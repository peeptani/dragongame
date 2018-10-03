<template>
    <b-navbar class="fixed-top game-navbar">
        <b-navbar-brand href="#">
            <img height="70px" src="../../public/fierce_dragon.svg">
            <b-nav-text class="game-title">
                Dragons of Mugloar
            </b-nav-text>
        </b-navbar-brand>


        <b-nav-text>
            Level <span class="game-info">{{ game.level }}</span>
        </b-nav-text>
        <b-nav-text>
            Lives <span :class="[{'game-warning' : (game.lives <= 1)}, 'game-info']">{{ game.lives }}</span>
        </b-nav-text>
        <b-nav-text>
            Gold <span class="game-info">{{ game.gold }}</span>
        </b-nav-text>
        <b-nav-text>
            Score <span class="game-info">{{ game.score }}</span>
        </b-nav-text>



        <b-button variant="outline-secondary" @click="startNewGame">New Game</b-button>
    </b-navbar>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['game']),
    methods: {
        startNewGame () {
            this.$store.dispatch('startGame');
        }
    }
}
</script>

<style scoped>
.game-navbar {
    background-color: rgba(192,192,192, 0.8 );
    padding: 0 30px;
}
.navbar-brand {
    padding: 0px;
}
.navbar-text {

    font-size: 16px;
}
.game-info {
    font-weight: bold;
    font-size: 25px;
}
.game-warning {
    font-weight: bold;
    font-size: 35px;
    color: red;
}
.game-title {
    align-self: left;
    margin-left: 10px;
    font-size: 25px;
    padding: 0px;
    margin-top: 20px;
    font-weight: bold;

}
.navbar-text {
    color: black;
}
</style>