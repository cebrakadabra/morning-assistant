<template>
    <div class="home-container">
        <div class="home-weather">
            <Weather></Weather>
        </div>
        <div class="home-traffic">
            <Traffic></Traffic>
        </div>
    </div>
</template>

<script>
    import Traffic from './Traffic.vue';
    import Weather from './Weather.vue';
    import './Home.less';

    export default {
        name: 'Home',
        components: {
            Traffic,
            Weather,
        },
        data() {
            return {}
        },
        computed: {}
    }
</script>
