<template>
    <div>
        <app-header></app-header>
        <section class="container pt-4">
            <div class="row">
                <div class="col-xs-6">
                    <div class="card-columns">
                        <app-questlist></app-questlist>
                    </div>
                </div>

            </div>
        </section>

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