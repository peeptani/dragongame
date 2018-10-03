<template>
    <div>
        <app-header></app-header>
        <div class="game-grid">
            <div class="game-shop">
                <app-shop></app-shop>
            </div>
            <app-quest  class="game-quests-column" :style="{'grid-column-start': ((index<5)? 4 : 5 ), 'grid-row-start': ((index<5)? index+2 : index-3 )}" v-for="(quest, index) in $store.getters.messageboard" :quest="quest" :key="quest.adId"></app-quest>
        </div>
        <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
</template>

<script>
import Shop from './Shop.vue';
import Questlist from './Questlist.vue';
import Quest from './Quest.vue'
import Header from './Header.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        appShop: Shop,
        appQuestlist: Questlist,
        appHeader: Header,
        appQuest: Quest
    },
    computed: {
        ...mapGetters(['game', 'messageboard', 'shop']),
        questRow (index) {
            console.log(index)
            if (index < 5) {
                return index+2
            }
            else return index-3
        },
        questColumn (index) {
            if (index < 5) {
                return 3
            }
            else return 4
        }
    },
    created () {
        this.$store.dispatch('startGame');
    },
}

</script>

<style>
.game-grid {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: 50px auto 50px 1fr 1fr 50px;
    grid-template-rows: 100px repeat(5, 1fr) auto;
}
.game-shop {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 6;
}
.game-quests-column{
    align-self: stretch;
}

</style>
