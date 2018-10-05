<template>
    <div class="quest">
        <p class="message-text">{{ quest.message }}</p>
        <div class="button-wrapper">
            <button
                    variant="outline-secondary"
                    class="take-quest"
                    @click="takeQuest(quest)"
            >Go on this Quest</button>
        </div>
        <b-progress  class="game-progress-bar"
                     :variant="((quest.expiresIn === 1) ? 'danger' : 'secondary')"
                     :value="quest.expiresIn"
                     :max="7"
        ></b-progress>
        <div class="game-bar">
            <p class="game-bar-text">Turns left:</p>
            <p class="reward"> Reward: {{ quest.reward }}</p>
            <p class="difficulty"> Probability: {{ quest.probability }} </p>
        </div>
    </div>
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
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 0px;
    width: 100%;
}
.message-text {
    margin: 0 auto 5px ;
    text-align: center;
}
.game-bar-text {
    font-size: 12px;
    font-weight: bold;
    background: lightgrey;
    border-radius: 5px;
    align-self: flex-end;
    margin: 0;
    padding: 0 5px;
    white-space: nowrap;
}
.reward {
    font-size: 12px;
    font-weight: bold;
    background: gold;
    border-radius: 5px;
    align-self: flex-end;
    margin: 0;
    padding: 0 5px;
    white-space: nowrap;
}
.difficulty {
    font-size: 12px;
    font-weight: bold;
    color: white;
    background: red;
    border-radius: 5px;
    align-self: flex-end;
    margin: 0;
    padding: 0 5px;
    white-space: nowrap;
}
.game-progress-bar {
    width: 100%;
    height: 7px;
    align-self: flex-start;
    margin: 3px;
}
</style>