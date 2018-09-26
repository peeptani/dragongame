<template>
    <div>
        <p> {{ game }} </p>
        <p> {{ messageboard }}</p>
        <button class="btn btn-primary" @click="testThis">KLIK</button>
    </div>
</template>

<script>
//import Shop from '.src/components/Shop.vue';
//import Quest from '.src/components/Quest.vue';
//import Questlist from '.src/components/Questlist.vue';
//import Header from '.src/components/Header.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        //appShop: Shop,
        //appQuestlist: Questlist,
        //appQuest: Quest,
        //appHeader: Header
    },
    computed: {
        ...mapGetters(['game', 'messageboard', 'shop'])
    },
    created () {
        this.$store.dispatch('startGame');

    },
    methods: {
        testThis () {
            this.$store.dispatch('makeMessageboard', this.game);
    }
    }

}

</script>