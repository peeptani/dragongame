<template>
    <div>
        <app-quest class="game-quests" v-for="(quest, index) in $store.getters.messageboard" :quest="quest" :key="quest.adId"></app-quest>
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

