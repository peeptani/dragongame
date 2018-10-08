import axios from 'axios'

const state = {
    shop: {},
    mobileShop: false,
    doingShopping: false
}

const mutations = {
    setShopState: (state, payload) => {
        state.shop = payload;
    },
    setMobileShop: (state, payload) => {
        state.mobileShop = payload;
    },
    shopping: (state, payload) => {
        state.doingShopping = payload;
        console.log(payload)
    }
}

const actions = {
    makeShop: ({commit}, game) => {
        axios.get(`https://www.dragonsofmugloar.com/api/v2/${game.gameId}/shop`)
            .then (response => response.data)
            .then (payload => commit('setShopState', payload))
    },
    makePurchase: ({commit, dispatch}, {game, item}) => {
        axios.post(`https://www.dragonsofmugloar.com/api/v2/${game.gameId}/shop/buy/${item.id}`)
            .then(response => response.data)
            .then(payload => {
                commit('shopping', true)
                commit('updateGameState', payload)
                dispatch('makeMessageboard', game)
                dispatch('makeShop', game)
            })
    },
    toggleMobileShop: ({ commit }, payload) => {
        commit('setMobileShop', payload)
    },
    toggleShopping: ({ commit }, payload) => {
        commit('shopping', payload)
    }
}

const getters = {
    shop: state => state.shop,
    mobileShop: state => state.mobileShop,
    doingShopping: state => state.doingShopping
}

export default {
    state,
    mutations,
    actions,
    getters
}