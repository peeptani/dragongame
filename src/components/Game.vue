<template>
    <div>
        <app-header></app-header>
        <div class="row">
            <div class="col-md-2">
                <app-shop></app-shop>
            </div>
            <div class="col-md-8">
                <div>
                    <app-questlist></app-questlist>
                </div>
            </div>
        </div>
        <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
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