<template>
    <div>
        <app-header></app-header>
        <div class="row">
            <div class="col-md-4">
                <app-shop></app-shop>
            </div>
            <div class="col-md-8">
                <div>
                    <app-questlist></app-questlist>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Shop from './Shop.vue';
import Questlist from './Questlist.vue';
import Header from './Header.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        appShop: Shop,
        appQuestlist: Questlist,
        appHeader: Header
    },
    computed: {
        ...mapGetters(['game', 'messageboard', 'shop'])
    },
    created () {
        this.$store.dispatch('startGame');
    },
}

</script>

<style>

</style>