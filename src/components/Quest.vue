<template>
    <div>
        <div class="card">
            <div class="card-body"></div>
            <div>
                <p class="badge badge-info"> {{ quest.reward }}</p>
                <p class="badge badge-info"> {{ quest.probability }}</p>
            </div>

            <button type="button" class="btn btn-light" @click="takeQuest(quest)">Take Quest</button>
            <b-progress height="5px" :variant="((quest.expiresIn === 1) ? 'danger' : 'dark')" :value="quest.expiresIn" :max="7"></b-progress>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['game']),
    props: ['quest'],
    methods: {
        takeQuest(quest) {
            let game = this.game
            let payload = {game, quest}
            this.$store.dispatch('doQuest', payload);
        }
    }
}

</script>

<style>
</style>