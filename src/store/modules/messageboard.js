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
            .then(response => response.data)
            .then(payload => commit('setMessageboardState', payload))

    },
    doQuest: ({ commit }, {gameData, adData} ) => {
        axios.post(`https://www.dragonsofmugloar.com/api/v2/${ gameData.gameId }/solve/${ adData.adId }`)
            .then(response => response.data)
            .then(payload => commit('updateStats', payload))
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