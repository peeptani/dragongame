<template>
    <div class="quest">


        <p style="align-self: center">{{ quest.message }}</p>
        <div class="button-wrapper">
            <p class="badge badge-warning"> Reward: {{ quest.reward }}</p>
            <b-button variant="outline-secondary" class="take-quest" @click="takeQuest(quest)">Go on this Quest</b-button>
            <span style="float:right;"><p class="badge badge-danger"> Probability: {{ quest.probability }} </p></span>
        </div>
        <div class="game-bar">
            <p style="margin: 0;">Turns left:</p>
            <b-progress  style="width: 90%; margin-left: 20px;" height="5px" :variant="((quest.expiresIn === 1) ? 'danger' : 'secondary')" :value="quest.expiresIn" :max="7"></b-progress>
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

<style scoped>
    .quest {
        display: flex;
        flex-wrap: wrap;
        min-width: 400px;
        min-height: 0;
        max-width: 600px;
        max-height: 200px;
        overflow: hidden;
        border: 1px solid lightgrey;
        padding: 10px;
        background-color: whitesmoke;
        margin: 3px;
        border-radius: 5px;
    }
    .take-quest {
        padding-top: 0px;
        padding-bottom: 0px;
        margin: 0 auto;
        border-radius: 5px;
    }
    .button-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .game-bar {
        margin-top: 10px;
        align-items: center;
        display: flex;
    }
</style>