<template>
    <div>
        <div class="game-header fixed-top">
            <img class="dragon-head"  src="../../public/fierce_dragon.svg">
            <img v-if="!mobileView" class="shop" @click="toggleShop = !toggleShop" src="../../public/Shop.svg">


            <p v-if="mobileView" class="game-title">Dragons of Mugloar</p>

            <div :class="!mobileView ? 'game-footer fixed-bottom' : 'info-tab' ">
                <p class="game-text">Level <span class="game-info">{{ game.level }}</span></p>
                <p class="game-text">Lives <span :class="[{'game-warning' : (game.lives <= 1)}, 'game-info']">{{ game.lives }}</span></p>
                <p class="game-text">Gold <span class="game-info">{{ game.gold }}</span></p>
                <p class="game-text">Score <span class="game-info">{{ game.score }}</span></p>
            </div>
            <button class="take-quest" variant="outline-secondary" @click="startNewGame">New Game</button>
        </div>
        <div class="mobile-shop fixed-top">
            <app-shop v-if="(toggleShop && !mobileView)"></app-shop>
        </div>
    </div>
</template>
<script>
import Shop from './Shop.vue';
import { mapGetters } from 'vuex';
export default {
    data () {
        return {
            toggleShop: false
        }
    },
    computed: mapGetters(['game', 'mobileView']),
    methods: {
        startNewGame () {
        this.$store.dispatch('startGame');
        }
    },
    components: {
        appShop: Shop
    }
}
</script>

<style scoped>
@media (max-width: 1920px) {
    .game-title {
        font-size: 25px;
        font-family: "Lucida Console", Monaco, monospace;
    }
    .game-info {
        font-size: 25px;
    }
    .game-header {

        grid-template-columns: 70px minmax(240px, 300px) 1fr 100px;
        grid-template-rows: 70px;
    }
    .info-tab {
        width: 100%;
        display: grid;
        rid-auto-flow: row;
        grid-template-columns:  repeat(4, 1fr);
        grid-template-rows: 50px;
        justify-content: center;
    }
    .dragon-head {
        height: 60px;
    }


}
@media (max-width: 768px) {
    .game-title {
        font-size: 20px;
    }
    .game-info {
        font-size: 15px !important;
        display: block;
        margin-bottom: 0px;
    }
    .game-header {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 50px;

    }.game-footer {
         grid-template-columns: repeat(4, 1fr);
         grid-template-rows: 50px;
     }
    .game-text {
        margin-bottom: 5px;

    }
    .game-footer {
        display: grid;
        grid-auto-flow: row;
        justify-items: center;
        align-items: center;
        background-color: rgba(192,192,192, 0.8 );
        padding: 0 0px;
    }
    .dragon-head {
        justify-self: left;
        margin-left: 15px;
        height: 50px;
    }
    .shop {
        background-color: transparent;
        border: none;
        height: 70px;
    }
    .mobile-shop {
        margin-top: 40px;
        background-color: whitesmoke;
        z-index: 1;
    }
}
.game-header {
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
    align-items: center;
    background-color: rgba(192,192,192, 0.8 );
    padding: 0 0px;
}

.game-info {
    font-weight: bold;
    text-align: center;
}
.game-warning {
    font-weight: bold;
    font-size: 35px;
    color: red;
}
.game-title {
    justify-self: start;
    margin-left: 10px;
    padding: 0px;
    margin-top: 20px;
    font-weight: bold;
}
.game-text {
    margin: auto 0;
    justify-self: center;
}
.dragon-head {
    justify-self: left;
    margin-left: 15px;
}
</style>