<template>
    <div>
        <app-header></app-header>
        <div class="game-grid">
            <div v-if="mobileShop || !mobileView" :class="[{'mobile-shop': mobileView}, 'desktop-shop']">
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
        <app-popup v-if="popup">
            <app-notify slot="content"></app-notify>
        </app-popup>
        <!--<p>{{ reputation }}</p>-->
    </div>
</template>

<script>
import Shop from './Shop.vue';
import Questlist from './Questlist.vue';
import Quest from './Quest.vue'
import Header from './Header.vue';
import Popup from './Popup.vue'
import Notify from './Notify.vue'
import { mapGetters } from 'vuex';

export default {
    components: {
        appShop: Shop,
        appQuestlist: Questlist,
        appHeader: Header,
        appQuest: Quest,
        appPopup: Popup,
        appNotify: Notify
    },
    computed: {
        ...mapGetters(['game', 'messageboard', 'shop', 'reputation', 'mobileView', 'mobileShop', 'popup'])
    },
    created () {
        this.$store.dispatch('startGame');
        this.$store.dispatch('showStartPopup');
        if (window.innerWidth<=768) {
            this.$store.dispatch('changeViewport', true)
            this.$store.dispatch('toggleMobileShop', false)
        } else {
            this.$store.dispatch('changeViewport', false)
            this.$store.dispatch('toggleMobileShop', false)
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                if (window.innerWidth<=768) {
                    this.$store.dispatch('changeViewport', true)
                } else {
                    this.$store.dispatch('changeViewport', false)
                }
            })
        })
    }
}

</script>

<style>
@media (max-width: 1920px) {
    .game-grid {
        grid-template-columns: 40px 280px 40px 1fr 40px;
        grid-template-rows: 100px 1fr ;
        grid-auto-flow: dense;
    }
    .desktop-shop {
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
        grid-template-rows: 50px 1fr;
    }
    .desktop-shop {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    .game-quests-column {
        justify-self: center;
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 12;
        grid-template-columns: 1fr ;
        grid-template-rows: repeat(10, 1fr);

    }
    .mobile-shop {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(1, 5, 6, .7);
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
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
