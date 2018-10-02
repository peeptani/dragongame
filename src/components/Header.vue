<template>
    <b-navbar class="fixed-top game-navbar">
        <b-navbar-brand href="#">
            <img height="60px" src="../../public/fierce_dragon.svg">
            Dragons of Mugloar
        </b-navbar-brand>
        <b-nav-text>
            Level: {{ game.level }}
        </b-nav-text>
        <b-nav-text>
            Lives: {{ game.lives }}
        </b-nav-text>
        <b-nav-text>
            Gold: {{ game.gold }}
        </b-nav-text>
        <b-nav-text>
            Score: {{ game.score }}
        </b-nav-text>
        <b-button variant="outline-secondary">New Game</b-button>
    </b-navbar>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['game'])
}
</script>

<style scoped>
.game-navbar {
    background-color: rgba(192,192,192, 0.8 );
}

</style>