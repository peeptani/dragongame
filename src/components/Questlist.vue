<template>
    <div class="quest-list">
        <!--<transition-group :name="['quest', {'quest-success' : questSuccess }, {'quest-failure' : questFailure}]" mode="out-in">-->
        <transition-group :name="transition" mode="out-in">
            <app-quest
                    v-for="quest in messageboard"
                    :quest="quest"
                    :key="quest.adId"
            ></app-quest>
        </transition-group>

    </div>
</template>

<script>
import Quest from './Quest.vue'
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters (['messageboard', 'questResult', 'doingShopping']),
        transition () {
            console.log('tr')
            if (this.doingShopping) return 'quest'
            else if (this.questResult === true) return 'quest-success'
            else if (this.questResult === false) return 'quest-failure'
            else return 'quest'
        }
    },
    components: {
        appQuest: Quest
    }
}
</script>
<style>

    .quest-success-enter-active {
        transition: .75s;
        visibility: hidden;
    }
    .quest-success-leave-active {
        transition: opacity .75s ease-in-out;
        position: initial;
        background-color: rgba(255, 215, 0, 0.5);
    }
    .quest-success-enter, .quest-success-leave-to {
        opacity: 0;
    }
    .quest-failure-enter-active {
        transition: .75s;
        visibility: hidden;
    }
    .quest-failure-leave-active {
        transition: opacity .75s ease-in-out;
        position: initial;
        background-color: rgba(139, 0, 0, 0.5);
    }
    .quest-failure-enter, .quest-failure-leave-to {
        opacity: 0;
    }
    @media (max-width: 1920px) {
        .quest-enter-active {
            transition: .75s;
            visibility: hidden;
            background-color: unset;
        }
        .quest-leave-active {
            transition: opacity .75s ease-in-out;
            position: initial;
            background-color: unset;
        }
        .quest-enter, .quest-leave-to {
            opacity: 0;
        }
    }
    @media (max-width: 768px) {
        .quest-enter-active {
            transition: .75s;
            visibility: hidden;
            background-color: unset;
        }
        .quest-leave-active {
            transition: opacity .75s ease-in-out;
            position: initial;
            background-color: unset;
        }
        .quest-enter, .quest-leave-to {
            opacity: 0;
        }
    }
</style>
