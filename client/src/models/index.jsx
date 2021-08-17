import axios from 'axios';
export const Appointments = {
    state: {
        appointmentName: '',
        appointmentDate: new Date(),
        appointmentTime: '',
        place: '',
    },
    reducers: {
        addAppointment(state, payload) {
            return [...state, payload]
        } 
    },
    effects: (dispatch) => ({
        async AddAppointment(payload, rootState) {
            await new Promise((resolve) => {
                
            })
        }
    })
}
