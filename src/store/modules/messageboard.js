import axios from 'axios'

const state = {
    messageboard: {}
}
const mutations = {
    setMessageboardState (state, payload) {
        state.messageboard = payload;
    }
}
const actions = {
    makeMessageboard: ({ commit }, gameData) => {
        axios.get(`https://www.dragonsofmugloar.com/api/v2/${ gameData.gameId }/messages`)
            .then(response => {
                // Some data is encoded so it needs to be decoded.
                for (let payload in response.data) {
                    if (response.data[payload].hasOwnProperty('encrypted')) {
                        response.data[payload].message = atob(response.data[payload].message)
                        response.data[payload].adId = atob(response.data[payload].adId)
                        response.data[payload].probability = atob(response.data[payload].probability)
                    }
                }
                return response.data
            })
            .then(payload => commit('setMessageboardState', payload));



    },
    doQuest: ({ commit, dispatch }, { game, quest } ) => {
        axios.post(`https://www.dragonsofmugloar.com/api/v2/${ game.gameId }/solve/${ quest.adId }`)
            .then(response => response.data)
            .then(payload => {
                commit('updateGameState', payload);
                dispatch('makeMessageboard', game)
            }
        );

    }
}

const getters = {
    messageboard: state => state.messageboard
}

export default {
    state,
    mutations,
    actions,
    getters
}