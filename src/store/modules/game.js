import axios from 'axios'

const state = {
    game: {},
    mobileView: true,
    questResult: ''
}

const mutations = {
    setGameState: (state, payload) => {
        state.game = payload;
    },
    updateGameState: (state, payload) => {
        state.game = {...state.game, ...payload};
    },
    setMobileView: (state, payload) => {
        state.mobileView = payload;
    },
    setQuestResult: (state, payload) => {
        state.questResult = payload;
    },
    resetQuestResult: (state) => {
        state.questResult = '';
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
    updateGameState:({ commit, dispatch }, payload) => {
        commit('updateGameState', payload);
        if (payload.success == true) {
            commit('setQuestResult', true)
        } else {
            commit('setQuestResult', false)
        }
        if (payload.lives <= 0) {
            dispatch('showDeathPopup', true)}
    },
    changeViewport:({ commit }, payload) => {
        commit('setMobileView', payload)
    },
    deleteQuestResult: ({commit}) => {
        commit('resetQuestResult')
    }
}


const getters = {
    game: state => state.game,
    mobileView: state => state.mobileView,
    questResult: state => state.questResult
}

export default {
    state,
    mutations,
    actions,
    getters
}