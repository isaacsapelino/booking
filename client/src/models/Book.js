import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

export const Book = {
    state: [],
    reducers: {
        setBook(state, payload) {
            return {
                ...state,
                payload
            }
        },
        getBooks(state, payload) {
            return [...state, payload]
        },
    },
    effects: (dispatch) => ({
        async setBooking(payload, rootState) {
            await axios.post('http://localhost:3000/api/booking', payload)
                .then(res => {
                    this.setBook(res.data);
                })
                .catch(err => console.log(err));
        },
        async getBookings(payload, rootState) {
            console.log('getBookings');
            await axios.get('http://localhost:3000/api/booking')
                .then(res => {
                    console.log(res);
                    this.getBooks(res.data);
                }).catch(err => console.error(err));
        },
    })
}