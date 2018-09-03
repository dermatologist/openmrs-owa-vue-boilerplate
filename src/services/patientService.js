// import crudService from './crudService';
//
// export default class patientService extends crudService {
//   findPatients(query) {
//     return this.getResources(`/openmrs/ws/rest/v1/patient?q=${query}`);
//   }
//
//
//   getPatient(uuid) {
//     return this.getResource('/openmrs/ws/rest/v1/patient/', uuid);
//   }
// }
// store.js

// Step 1
import Vapi from "vuex-rest-api"


// Step 2
const patients = new Vapi({
    baseURL: "",
    state: {
        patients: []
    }
})
// Step 3
    .get({
        action: "getPatientByUuid",
        property: "patient",
        path: ({ id }) => `/openmrs/ws/rest/v1/patient/${id}`
    })
    .get({
        action: "queryPatients",
        property: "patients",
        queryParams: true,
        path: "/openmrs/ws/rest/v1/patient"
    })
    // Request body (data {}) contains data to persist (not in  params)
    .post({
        action: "createPatient",
        property: "patient",
        path: "/openmrs/ws/rest/v1/patient"
    })
    // Request body (data {}) contains data to persist (not in  params)
    .post({
        action: "updatePatient",
        property: "patient",
        path: ({ id }) => `/openmrs/ws/rest/v1/patient/${id}`
    })
    .post({
        action: "deletePatient",
        property: "patient",
        path: ({ id }) => `/openmrs/ws/rest/v1/patient/${id}`
    })
    // Step 4
    .getStore()

// Step 5
export const patient = new Vuex.Store(patients)