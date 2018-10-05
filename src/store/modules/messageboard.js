import axios from 'axios'

const state = {
    messageboard: {},
    reputation: {}
}
const mutations = {
    setMessageboardState (state, payload) {
        state.messageboard = payload;
    },
    setReputationState (state, payload) {
        state.reputation = payload;
    }
}
const actions = {
    makeMessageboard: ({ commit }, gameData) => {
        axios.get(`https://www.dragonsofmugloar.com/api/v2/${ gameData.gameId }/messages`)
            .then(response => {
                // Some of data is encoded.
                for (let payload in response.data) {
                    if (response.data[payload].hasOwnProperty('encrypted')) {
                        if (response.data[payload].encrypted == 1) {
                            response.data[payload].message = atob(response.data[payload].message)
                            response.data[payload].adId = atob(response.data[payload].adId)
                            response.data[payload].probability = atob(response.data[payload].probability)
                        }

                    }
                }
                return response.data
            })
            .then(payload => commit('setMessageboardState', payload))
                // TODO reputation still being implemented?
                //.then(axios.post(`https://www.dragonsofmugloar.com/api/v2/${ gameData.gameId }/investigate/reputation`))
                    //.then(response => console.log(response))
                        //.then(rep => commit('setReputationState'), rep);



    },
    doQuest: ({ dispatch }, { game, quest } ) => {
        axios.post(`https://www.dragonsofmugloar.com/api/v2/${ game.gameId }/solve/${ quest.adId }`)
            .then(response => response.data)
                .then(payload => dispatch('updateGameState', payload))
                    .then (dispatch('makeMessageboard', game));
    }
}

const getters = {
    messageboard: state => state.messageboard,
    reputation: state => state.reputation
}

export default {
    state,
    mutations,
    actions,
    getters
}