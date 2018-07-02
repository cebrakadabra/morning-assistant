<template>
    <div class="weather-container">
        <div class="weather-current">
            <h1><span>{{this.weatherdata.currently.icon}}</span>{{this.weatherdata.currently.temperature}}°C</h1>
        </div>
        <h1>Weather outlook<br/><small>will go here</small></h1>
    </div>
</template>

<script>
    import WeatherService from '../services/WeatherService';
    import './Weather.less';

    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                weatherdata: null,
                errorMessage: false,
            }
        },
        mounted() {
            WeatherService().getEventProfiles((response) => {
                this.loading = false;
                if (response) {
                    this.weatherdata = response.data;
                    console.log(response.data);
                } else {
                    this.errorMessage = true;
                }
            });
        },
        computed: {}
    }
</script>
