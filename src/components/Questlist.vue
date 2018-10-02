<template>
    <b-list-group>
        <app-quest v-for="quest in $store.getters.messageboard" :quest="quest" :key="quest.adId"></app-quest>
    </b-list-group>
</template>

<script>
import Quest from './Quest.vue'

export default {
    components: {
        appQuest: Quest
    }
}
</script>