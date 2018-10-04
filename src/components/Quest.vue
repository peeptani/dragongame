<template>

        <div class="quest">
            <p class="message-text">{{ quest.message }}</p>
            <div class="button-wrapper">
                <p class="badge badge-warning"> Reward: {{ quest.reward }}</p>
                <button
                        variant="outline-secondary"
                        class="take-quest"
                        @click="takeQuest(quest)"
                >Go on this Quest</button>
                <span style="float:right;"><p class="badge badge-danger"> Probability: {{ quest.probability }} </p></span>
            </div>
            <div class="game-bar">
                <p class="game-bar-text">Turns left:</p>
                <b-progress  style="width: 85%; margin-left: 10px;" height="7px"
                             :variant="((quest.expiresIn === 1) ? 'danger' : 'secondary')"
                             :value="quest.expiresIn"
                             :max="7"
                ></b-progress>
            </div>
        </div>
    </transition>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['game']),
    props: ['quest'],
    methods: {
        takeQuest(quest) {
            let game = this.game
            let payload = {game, quest}
            this.$store.dispatch('doQuest', payload);
        }
    }
}

</script>

<style>

.quest {
    display: flex;
    flex-wrap: wrap;
    min-width: 400px;
    min-height: 0;
    max-height: 250px;
    border: 1px solid lightgrey;
    padding: 10px;
    background-color: whitesmoke;
    margin: 3px;
    border-radius: 5px;
}
.take-quest {
    padding: 0 5px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: transparent;
    border-color: #6c757d;
    border: 1px solid;
}
.take-quest:hover {
    background-color: lightgray;
}
.button-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.game-bar {
    margin-top: 0px;
    align-items: baseline;
    display: flex;
    width: 100%;
}
.message-text {
    margin: 0 auto 5px ;
    text-align: center;
}
.game-bar-text {
    font-size: 14px;
    margin-bottom: 0px;
}
</style>