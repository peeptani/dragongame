<template>
    <div>
        <div class="game-header fixed-top">
            <img class="dragon-head"  src="../../public/HornedDragon.svg">
            <img v-if="mobileView" class="shop-icon" @click="toggleShop()" src="../../public/Shop.svg">
            <p v-if="!mobileView" class="game-title">Dragons of Mugloar</p>
            <div :class="mobileView ? 'game-footer fixed-bottom' : 'info-tab' ">
                <p class="game-text">Level <span class="game-info">{{ game.level }}</span></p>
                <p class="game-text">Lives <span :class="[{'game-warning' : (game.lives <= 1)}, 'game-info']">{{ game.lives }}</span></p>
                <p class="game-text">Gold <span class="game-info">{{ game.gold }}</span></p>
                <p class="game-text">Score <span class="game-info">{{ game.score }}</span></p>
            </div>
            <button class="header-button" @click="newGame">New Game</button>
        </div>
    </div>
</template>
<script>
import Shop from './Shop.vue';
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['game', 'mobileView', 'mobileShop']),
        buttonState() {
            if (this.game.gold >=50)
                return true
            else
                return false
        }
    },
    methods: {
        toggleShop () {
            this.$store.dispatch('toggleMobileShop', !this.mobileShop)
        },
        newGame () {
            this.$store.dispatch('toggleMobileShop', false)
            this.$store.dispatch('startGame')
        }
    },
    components: {
        appShop: Shop
    }
}
</script>

<style scoped>
.game-header {
    display: grid;
    grid-auto-flow: row;
    justify-items: center;
    align-items: center;
    background-color: rgba(192,192,192, 0.8 );
    padding: 0 0;
}
.game-info {
    font-weight: bold;
    text-align: center;
    display: block;
}
.game-warning {
    font-weight: bold;
    font-size: 35px;
    color: red;
}
.game-title {
    justify-self: start;
    margin-left: 25px;
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
    margin-left: 17px;
}
.take-quest {
    margin-right: 20px;
    max-height: 35px;
    font-size: 15px;
}
.header-button {
    padding: 0 5px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: transparent;
    border-color: #6c757d;
    border: 1px solid;
    white-space: nowrap;
    justify-self: center;
}
.success-enter-active {
    transition: 1.75s;
    color: gold;
}
.success-leave-active {
    transition: 1.75s;
    color: black;
}
.success-enter, .success-leave-to {
}
@media (max-width: 1920px) {
    .game-title {
        font-size: 25px;
    }
    .game-info {
        font-size: 25px;
    }
    .game-header {
        grid-template-columns: 90px minmax(240px, 300px) 1fr 150px;
        grid-template-rows: 70px;
    }
    .info-tab {
        width: 100%;
        display: grid;
        rid-auto-flow: row;
        grid-template-columns:  repeat(4, 1fr);
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
        margin-bottom: 0px;
    }
    .game-header {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 50px;
    }
    .game-footer {
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
        height: 40px;
    }
    .shop-icon {
        background-color: transparent;
        border: none;
        height: 40px;
    }

}
</style>