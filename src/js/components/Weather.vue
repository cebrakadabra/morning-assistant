<template>
    <div class="weather-container">
        <div class="weather-current">
            <div class="weather-icon">
                <img v-bind:src="'assets/' + this.weatherdata.currently.icon + '.png'" alt="">
            </div>
            <div class="weather-text">
                <p>
                    <span class="temperature">{{this.weatherdata.currently.temperature | round}}°</span> <span class="temperature-summary">{{this.weatherdata.currently.summary}} &nbsp;&nbsp;&nbsp;</span><br>
                    <span class="temperature-info">
                        <span class="temperature-info-additional">
                            <i class="fas fa-thermometer-quarter"></i> {{this.weatherdata.currently.humidity * 100}}% &nbsp;&nbsp;&nbsp;
                            <i class="far fa-compass"></i> {{this.weatherdata.currently.windSpeed}} km/h &nbsp;&nbsp;&nbsp;
                            <i class="fas fa-eye"></i> {{this.weatherdata.currently.visibility}} km
                        </span>

                    </span>
                </p>
            </div>
        </div>
        <div class="weather-hourly-forecast">
            <ul class="weather-hourly-forecast-items">
                <li class="weather-hourly-forecast-item" v-for="hitem in this.weatherdata.hourly.data">
                    <p>
                        <span class="time">{{hitem.time | formatDate}}</span><br>
                        <span class="precip"><span v-if="hitem.icon === 'rain'">{{hitem.precipProbability * 100 | round}}%</span></span>
                    </p>
                    <img v-bind:src="'assets/' + hitem.icon + '.png'" alt="">
                    <p>
                        <span class="temp">{{hitem.temperature | round}}°</span>
                    </p>
                </li>
            </ul>
            <div class="weather-hourly-summary">
                <p>{{this.weatherdata.daily.summary}}</p>
            </div>
        </div>
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
