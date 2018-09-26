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
            .then(payload => commit('setMessageboardState', payload));
            //console.log('made board')

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