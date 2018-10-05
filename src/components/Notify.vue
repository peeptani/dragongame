<template>
    <div>
        <div v-if="popup=='start'">
            <p>Welcome to game: Dragons of Mugloar</p>
            <p>You are courageous dragon trainer but it is expensive profession. Luckily citizens of Mugloar offer quests rewarded with gold. Try not to take harder ones unless you have improved your chances with various items from Dragon Upgrade Shop.</p>
            <button class="take-quest" variant="outline-secondary" @click="$store.dispatch('closePopup')">Start Game</button>
        </div>
        <div v-if="popup=='death'">
            <p>You Died</p>
            <p>Your score: {{ game.score }}</p>
            <p>High Score: {{ game.highScore }}</p>
            <p>Turn: {{ game.turn }}</p>
            <p>Want to try again?</p>
            <button class="take-quest" variant="outline-secondary" @click="newGame">Start Game</button>
        </div>

    </div>
</template>




<script>

import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['notifications', 'game', 'popup']),
    methods: {
        newGame () {
            this.$store.dispatch('startGame')
            this.$store.dispatch('closePopup')
        }
    }
}
</script>

<style>

</style>