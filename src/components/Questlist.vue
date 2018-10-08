<template>
    <div class="quest-list">
        <transition-group name="quest" mode="out-in">
            <app-quest
                    v-for="quest in messageboard"
                    :quest="quest"
                    :key="quest.adId"
                    @click="remove(key)"
            ></app-quest>
        </transition-group>

    </div>
</template>

<script>
import Quest from './Quest.vue'
import { mapGetters } from 'vuex';

export default {
    data () {
        return {
            columnOne: {},
            columnTwo: {}
        }
    },
    computed: {
        ...mapGetters (['messageboard'])
    },
    components: {
        appQuest: Quest
    },
    methods: {
        board() {
            console.log(this.messageboard)
        }
    }
}
</script>
<style>
    .quest-enter-active {
        transition: .75s;
        visibility: hidden;
    }
    .quest-leave-active {
        transition: opacity .75s ease-in-out;
        position: initial;
    }
    .quest-enter, .quest-leave-to {
        opacity: 0;
    }

    .quest-list {
    }
</style>
