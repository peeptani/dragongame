<template>
    <div class="popup-box">
        <div v-if="popup==='start'">
            <p>Welcome to game: Dragons of Mugloar</p>
            <p>You are courageous dragon trainer but it is expensive profession.
                Luckily citizens of Mugloar offer quests rewarded with gold.
                Try not to take harder ones unless you have improved your chances with various items from Dragon Upgrade Shop.
            </p>
            <div>
                <div style="border: 2px solid black; display: inline-block; border-radius: 25px">
                    <p style="font-weight: bold; font-size: 20px; font-style: italic; padding: 10px ">i</p>
                </div>

                <button class="modal-button" @click="$store.dispatch('closePopup')">Start Game</button>
            </div>

        </div>
        <div v-if="popup==='death'">
            <p>You Died</p>
            <p>Your score: {{ game.score }}</p>
            <p>High Score: {{ game.highScore }}</p>
            <p>Turn: {{ game.turn }}</p>
            <p>Want to try again?</p>
            <button class="modal-button" @click="newGame">Start Game</button>
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
.modal-button {
    padding: 0 5px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: transparent;
    border-color: #6c757d;
    border: 1px solid;
    white-space: nowrap;
    justify-self: center;
}
.popup-box {
    padding: 15px;
}
</style>