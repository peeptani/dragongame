<template>
    <div id="app">
        <app-game></app-game>
    </div>
</template>

<script>
import Game from './components/Game.vue';

export default {
    name: 'app',
    components: {
        appGame: Game
    }
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Muli');
    body {
        background-color: ghostwhite;
        font-family: 'Muli', sans-serif;
    }
    button:focus {
         outline: none;
     }
    @media (max-width: 1920px) {
        span {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(5, 1fr) 50px;
            grid-auto-flow: row dense;
        }
    }
    @media (max-width: 768px) {
        span {
            justify-self: center;
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            grid-row-end: 12;
            grid-template-columns: 1fr ;
            grid-template-rows: repeat(10, 1fr) 50px;
        }
    }

</style>
