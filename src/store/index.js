import Vue from 'vue';
import Vuex from 'vuex';
import messageboard from './modules/messageboard.js'
import shop from './modules/shop.js'
import game from './modules/game.js'
import notifications from './modules/notify.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: [
        messageboard,
        shop,
        game,
        notifications
    ]
});