<template>
    <div>
        <app-quest v-for="quest in $store.getters.messageboard" :quest="quest" :key="quest.adId"></app-quest>
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