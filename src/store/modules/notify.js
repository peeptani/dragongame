import axios from 'axios'

const state = {
    notifications: [],
    popup: false
}

const mutations = {
    addNotification(state, payload) {
        state.notifications = payload;
    },
    removeNotification(state) {
        state.notifications.shift()
    },
    setPopup(state, payload) {
        state.popup = payload;
    }
}

const actions = {
    showStartPopup: ({ commit }) => {
        commit('setPopup', 'start')
    },
    showDeathPopup: ({ commit }) => {
        commit('setPopup', 'death')
    },
    closePopup: ({ commit }) => {
        commit('setPopup', false)
    }
}

const getters = {
    notifications: state => state.notifications,
    popup: state => state.popup
}

export default {
    state,
    mutations,
    actions,
    getters
}