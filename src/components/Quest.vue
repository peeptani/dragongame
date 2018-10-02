<template>
    <div class="quest">
        <p class="badge badge-warning"> Reward: {{ quest.reward }}</p>
        <span style="float:right;"><p class="badge badge-danger"> Probability: {{ quest.probability }} </p></span>
        <p style="align-self: center">{{ quest.message }}</p>
        <div class="button-wrapper">
            <b-button variant="outline-secondary" class="take-quest" @click="takeQuest(quest)">Go on this Quest</b-button>
        </div>
        <div class="game-bar">
            <p style="margin: 0;">Turns left:</p>
            <b-progress  style="width: 90%; margin-left: 20px;" height="5px" :variant="((quest.expiresIn === 1) ? 'danger' : 'dark')" :value="quest.expiresIn" :max="7"></b-progress>
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
        border: 1px solid lightgrey;
        padding: 20px;
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
        display: flex;
        align-items: center;
    }
</style>