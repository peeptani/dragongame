<template>
    <div>
        <div class="popup-box">
            <div v-if="popup==='start'">
                <p>Welcome to game: Dragons of Mugloar</p>
                <p>You are courageous dragon trainer but it is expensive profession.
                    Luckily citizens of Mugloar offer quests rewarded with gold.
                    Try not to take harder ones unless you have improved your chances with various items from Dragon Upgrade Shop.
                </p>
                <div>
                    <div class="info-button" @click="showInfo = !showInfo">
                        <p class="info-button-text">i</p>
                    </div>
                    <button class="modal-button" @click="$store.dispatch('closePopup')">Start Game</button>
                </div>
                <div>
                    <transition name="slide">
                        <img v-if="showInfo" width="300px" src="../../public/Example.png">
                    </transition>
                </div>
            </div>
            <div v-if="popup==='death'">
                <p>You Died</p>
                <p>Your score: {{ game.score }}</p>
                <p>High Score: {{ game.highScore }}</p>
                <p>Turn: {{ game.turn }}</p>
                <p>Want to try again?</p>
                <div>
                    <div class="info-button" @click="showInfo = !showInfo">
                        <p class="info-button-text">i</p>
                    </div>
                    <button class="modal-button" @click="newGame">Go Again</button>
                </div>
                <div>
                    <transition name="slide">
                        <img v-if="showInfo" width="300px" src="../../public/Example.png">
                    </transition>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data () {
        return {
            showInfo: false
        }
    },
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
.info-button {
    border: 2px solid black;
    display: inline-block;
    border-radius: 30px;
    float: left
}
.info-button-text {
    font-weight: bold;
    font-size: 15px;
    font-style: italic;
    padding:  0 12px 0 10px;
    margin: 0
}
.slide-enter-active {
    animation: slide-in .5s;
    transition: .5s ease-in-out;
}
.slide-leave-active {
    transition: .5s ease-in-out;
    animation: slide-out .5s;
}
.slide-enter, .slide-leave-to {
    opacity: 0;
}
@keyframes slide-out {
    from {
        transform: translate(0, 0);
    }
    to {
        transform: translate(0, -100%);
    }
}

@keyframes slide-in {
    from {
        transform: translate(0, -100%);
    }
    to {
        transform: translate(0, 0);
    }
}
</style>