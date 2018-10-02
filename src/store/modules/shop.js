import axios from 'axios'

const state = {
    shop: {}
}

const mutations = {
    setShopState: (state, payload) => {
        state.shop = payload;
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
                commit('updateGameState', payload)
                dispatch('makeMessageboard', game)
                dispatch('makeShop', game)
            })
    }
}

const getters = {
    shop: state => state.shop
}

export default {
    state,
    mutations,
    actions,
    getters
}