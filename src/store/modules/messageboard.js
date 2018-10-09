import axios from 'axios'
import { rot13 } from './decode.js'


let coinSound = new Audio('../../../public/coin.mp3')
let damageSound = new Audio('../../../public/damage.mp3')


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
    makeMessageboard: ({ commit, dispatch }, gameData) => {
        axios.get(`https://www.dragonsofmugloar.com/api/v2/${ gameData.gameId }/messages`)
            .then(response => {
                // Some of data is encoded.
                for (let payload in response.data) {
                    if (response.data[payload].hasOwnProperty('encrypted')) {
                        if (response.data[payload].encrypted === 1) {
                            response.data[payload].message = atob(response.data[payload].message)
                            response.data[payload].adId = atob(response.data[payload].adId)
                            response.data[payload].probability = atob(response.data[payload].probability)
                        } else if (response.data[payload].encrypted === 2) {
                            response.data[payload].message = rot13(response.data[payload].message)
                            response.data[payload].adId = rot13(response.data[payload].adId)
                            response.data[payload].probability = rot13(response.data[payload].probability)
                        }
                    }
                }
                return response.data
            })
            .then(payload => commit('setMessageboardState', payload))
            .catch(() => console.log('Unable to fetch quests'))
            setTimeout(() => {
                dispatch('toggleShopping', false)
            }, 50);
            // TODO reputation still being implemented?
            //.then(axios.post(`https://www.dragonsofmugloar.com/api/v2/${ gameData.gameId }/investigate/reputation`))
                //.then(response => console.log(response))
                    //.then(rep => commit('setReputationState'), rep);
    },
    doQuest: ({ dispatch }, { game, quest } ) => {
        axios.post(`https://www.dragonsofmugloar.com/api/v2/${ game.gameId }/solve/${ quest.adId }`)
            .then(response => {
                if (response.data.success === true) coinSound.play()
                else damageSound.play()
                return response.data
            })
            .then(payload => {
                if (payload.lives >=1) dispatch('makeMessageboard', game)
                return dispatch('updateGameState', payload)
            })
            .catch(() => console.log('Too tired to take that quest'))
        dispatch('deleteQuestResult')
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