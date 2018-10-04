<template>
    <div>
        <app-quest class="game-quests" :quest="messageboard[0]" ></app-quest>
        <app-quest class="game-quests" :quest="messageboard[1]" ></app-quest>
        <app-quest class="game-quests" :quest="messageboard[2]" ></app-quest>
        <app-quest class="game-quests" :quest="messageboard[3]" ></app-quest>
        <app-quest class="game-quests" :quest="messageboard[4]" ></app-quest>
        <app-quest class="game-quests" :quest="messageboard[5]" ></app-quest>
        <app-quest class="game-quests" :quest="messageboard[6]" ></app-quest>
        <app-quest class="game-quests" :quest="messageboard[7]" ></app-quest>
        <app-quest class="game-quests" :quest="messageboard[8]" ></app-quest>
        <app-quest class="game-quests" :quest="messageboard[9]" ></app-quest>
    </div>
</template>

<script>
import Quest from './Quest.vue'
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters (['messageboard']),   components: {
        appQuest: Quest
    }
}
</script>

<style>

</style>
