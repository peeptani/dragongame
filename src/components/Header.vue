<template>
    <nav class="navbar navbar-light fixed-top" style="background-color: #c6c7ff;">
        <div>
            <p>{{ game }}</p>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: mapGetters(['game'])
}
</script>