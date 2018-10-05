<template>
    <div>
        <b-list-group>
            <div class="shop" v-for="item in shop" :key="item.Id">
                <p style="margin: 0 0 auto">{{ item.name }}</p>
                <b-button :class="{disabled: buttonState(item)}" class="badge badge-warning shop-button" @click="buyItem(item)">{{ item.cost }}</b-button>
            </div>
        </b-list-group>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: mapGetters (['shop', 'game']),
    methods: {
        buyItem (item) {
            if (!this.buttonState(item)) {
                let game = this.game
                let payload = {game, item}
                this.$store.dispatch('makePurchase', payload);
            }
        },
        buttonState (item) {
            if (item.cost <= this.game.gold)
                return false
            else
                return true
        }
    }

}
</script>

<style>
@media (max-width: 768px) {
    .shop {
        width: 100%;
    }
}
    .shop {
        border: 1px solid lightgrey;
        padding: 15px;
        background-color: whitesmoke;
        margin: 3px;
        border-radius: 5px;
        display: flex;
        align-items: center;
    }
    .shop-button {
        float: right;
        margin-left: auto;
    }
</style>