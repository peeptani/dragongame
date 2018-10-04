<template>
    <div>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[0]" ></app-quest>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[1]" ></app-quest>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[2]" ></app-quest>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[3]" ></app-quest>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[4]" ></app-quest>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[5]" ></app-quest>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[6]" ></app-quest>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[7]" ></app-quest>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[8]" ></app-quest>
        <app-quest class="game-quests" :quest="$store.getters.messageboard[9]" ></app-quest>
    </div>
</template>

<script>
import Quest from './Quest.vue'

export default {
    components: {
        appQuest: Quest
    }
}
</script>

