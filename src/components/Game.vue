<template>
    <div>
        <app-header></app-header>
        <div class="game-grid">
            <div class="game-shop">
                <app-shop></app-shop>
            </div>
            <app-questlist class="game-quests-column"></app-questlist>

            <!--<app-quest TODO Find more graceful way to implent v-for placing of quests on grid. This would help unaccepted quests to stay on same location.
                    class="game-quests-column"
                    :style="{'grid-column-start': ((index<5)? 4 : 5 ), 'grid-row-start': ((index<5)? index+2 : index-3 )}"
                    v-for="(quest, index) in $store.getters.messageboard"
                    :quest="quest"
                    :key="quest.adId"></app-quest>-->
        </div>
        <!--<p>{{ reputation }}</p>-->
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
        ...mapGetters(['game', 'messageboard', 'shop', 'reputation'])
    },
    created () {
        this.$store.dispatch('startGame');
    },
}

</script>

<style>
@media (max-width: 1920px) {
    .game-grid {
        grid-template-columns: 40px 280px 40px 1fr 40px;
        grid-template-rows: 100px 1fr ;
        grid-auto-flow: dense;
    }
    .game-shop {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .game-quests-column{
        grid-column-start: 4;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(5, 1fr);

    }
}
@media (max-width: 768px) {
    .game-grid {
        grid-template-columns: auto 1fr auto;
        grid-template-rows: 50px 680px 1fr;
    }
    .game-shop {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .game-quests-column{
        justify-self: center;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 12;
        grid-template-columns: 1fr ;
        grid-template-rows: repeat(10, 1fr);

    }
}
.game-grid {
    display: grid;
}
.game-quests-column{
    align-self: stretch;
    display: grid;
}
</style>
