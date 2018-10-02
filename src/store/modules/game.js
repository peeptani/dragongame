import axios from 'axios'

const state = {
    game: {}
}

const mutations = {
    setGameState: (state, payload) => {
        state.game = payload;
    },
    updateGameState: (state, payload) => {
        state.game = {...state.game, ...payload};
    }
}

const actions = {
    startGame: ({ commit, dispatch }) => {
        axios.post('https://www.dragonsofmugloar.com/api/v2/game/start')
            .then (response => response.data)
            .then (payload => {
                commit('setGameState', payload);
                dispatch('makeMessageboard', payload);
                dispatch('makeShop', payload)
            });
    },
    updateGameState:({ commit }, payload) => {
        commit('updateGameState', payload);
}
}


const getters = {
    game: state => state.game
}

export default {
    state,
    mutations,
    actions,
    getters
}