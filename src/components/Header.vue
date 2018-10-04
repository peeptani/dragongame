<template>
    <div>
        <div class="game-header fixed-top">
            <img height="90px" src="../../public/fierce_dragon.svg">
            <p v-if="!mobileView" class="game-title">Dragons of Mugloar</p>

            <div :class="mobileView ? 'game-footer fixed-bottom' : 'info-tab' ">
                <p class="game-text">Level <span class="game-info">{{ game.level }}</span></p>
                <p class="game-text">Lives <span :class="[{'game-warning' : (game.lives <= 1)}, 'game-info']">{{ game.lives }}</span></p>
                <p class="game-text">Gold <span class="game-info">{{ game.gold }}</span></p>
                <p class="game-text">Score <span class="game-info">{{ game.score }}</span></p>
            </div>
            <button variant="outline-secondary" @click="startNewGame">New Game</button>
        </div>

    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
      return {
          mobileView: false
      }
    },
    computed: mapGetters(['game']),
    methods: {
        startNewGame () {
        this.$store.dispatch('startGame');
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                this.mobileView = (window.innerWidth<=768)
            })
        })
    }
}
</script>

<style scoped>
@media (max-width: 1920px) {
    .game-title {
        font-size: 25px;
    }
    .game-info {
        font-size: 25px;
    }
    .game-header {

        grid-template-columns: 70px repeat(3, 1fr);
        grid-template-rows: 60px;
    }
    .info-tab {
        display: grid;
        rid-auto-flow: row;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 50px;
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
}
.game-warning {
    font-weight: bold;
    font-size: 35px;
    color: red;
}
.game-title {
    align-self: left;
    margin-left: 10px;
    padding: 0px;
    margin-top: 20px;
    font-weight: bold;

}
</style>