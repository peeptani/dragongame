<template>
    <div class="quest">
        <p class="message-text">{{ quest.message }}</p>
        <div class="game-bar">
            <p class="difficulty">{{ quest.probability }} </p>
            <p class="reward">{{ quest.reward }}</p>
            <div class="button-wrapper">
                <button
                    class="take-quest"
                    @click="takeQuest(quest)">
                    Take Quest
                </button>
            </div>
            <b-progress
                    class="game-progress-bar"
                    :variant="((quest.expiresIn === 1) ? 'danger' : 'secondary')"
                    :value="quest.expiresIn"
                    :max="7">
            </b-progress>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['game', 'mobileShop']),
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
    min-width: 300px;
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
    white-space: nowrap;
    align-self: flex-end;
    justify-self: right;
}
.take-quest:hover {
    background-color: lightgray;
}
.button-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: right;
}
.game-bar {
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    grid-template-rows: 1fr 10px;
    grid-auto-flow: row dense;
    margin-top: 0;
    width: 100%;
}
.message-text {
    margin: 0 auto 5px ;
    text-align: center;
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
    justify-self: center;
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
    justify-self: left;
}
.game-progress-bar {
    width: 100%;
    height: 7px;
    align-self: flex-start;
    margin-top: 7px;
    margin-bottom: 3px;
    grid-column-start: 1;
    grid-column-end: span col3-end;
    grid-row-start: 2;
    grid-row-end: row2-end;
}
</style>