import regeneratorRuntime from 'regenerator-runtime';
import axios from 'axios';

export const Agents = {
    state: {},
    reducers: {
        agents(state, payload) {
            return payload
        }
    },
    effects: (dispatch) => ({
        async loadAgents(payload, rootState) {
            axios.get('http://localhost:3000/api/agents')
                .then(res => {
                    this.agents(res.data);
                })
                .catch(e => console.log(e));
        }
    })
}