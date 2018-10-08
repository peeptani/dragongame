<template>
    <div class="shop">
        <div class="shop-item" v-for="item in shop" :key="item.Id">
            <p class="shop-item-text">{{ item.name }}</p>
            <button :class="(buttonState(item) ? 'disabled' : 'enabled')" class="shop-button" @click="buyItem(item)">{{ item.cost }}</button>
        </div>
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
            return item.cost > this.game.gold;
        }
    }
}
</script>

<style>
.shop-button {
    float: right;
    margin-left: auto;
    background-color: darkgray;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 0 5px;
}
.disabled {
    pointer-events: none;
    opacity: .8;
}
.enabled {
    background-color: gold;
}
.enabled:hover {
    background-color: beige;
}
.shop-item {
    background-color: whitesmoke;
    margin: 3px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgrey;
    z-index: 9998;
}
.shop-item-text {
    margin: 0 auto 0 0;
}
.shop {
    max-height: 90%;
}
@media (max-width: 1920px) {
    .shop-item {
        padding: 15px;
    }
}
@media (max-width: 768px) {
    .shop-item {
        padding: 10px;
    }
}
@media (max-height: 640px) {
    .shop-item {
        max-height: 37px;
    }
}
</style>