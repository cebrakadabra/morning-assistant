<template>
    <div class="weather-container">
        <p class="weather-updated">last updated: {{lastFetched | formatTimeStamp}}</p>
        <div class="weather-current">
            <div class="weather-icon">
                <img v-if="this.weatherdata.currently.icon !== null" v-bind:src="'assets/' + this.weatherdata.currently.icon + '.png'" alt="">
            </div>
            <div class="weather-text">
                <p>
                    <span class="temperature">{{this.weatherdata.currently.temperature | round}}°</span> <span class="temperature-summary">{{this.weatherdata.currently.summary}} &nbsp;&nbsp;&nbsp;</span><br>
                    <span class="temperature-info">
                        <span class="temperature-info-additional">
                            <i class="fas fa-thermometer-quarter"></i> {{this.weatherdata.currently.humidity * 100 | roundTwo}}% &nbsp;&nbsp;&nbsp;
                            <i class="far fa-compass"></i> {{this.weatherdata.currently.windSpeed | roundTwo}} km/h &nbsp;&nbsp;&nbsp;
                            <i class="fas fa-eye"></i> {{this.weatherdata.currently.visibility | roundTwo}} km
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
        <div class="weather-daily-forecast">
            <ul class="weather-daily-forecast-items">
                <li class="weather-daily-forecast-item" v-for="ditem in this.weatherdata.daily.data">
                    <div class="dayname">
                        <p>{{ditem.time | getDay}}</p>
                    </div>
                    <div class="icon">
                        <img v-bind:src="'assets/' + ditem.icon + '.png'" alt="">
                    </div>
                    <div class="max">
                        <p class="high">{{ditem.apparentTemperatureHigh | round}}</p>
                    </div>
                    <div class="min">
                        <p>{{ditem.apparentTemperatureLow | round}}</p>
                    </div>
                    <div class="sunrise">
                        <img v-bind:src="'assets/sunrise.png'" alt="">
                        <span>{{ditem.sunriseTime | sunTimeStamps}}</span>
                    </div>
                    <div class="sunset">
                        <img v-bind:src="'assets/sunset.png'" alt="">
                        <span>{{ditem.sunsetTime | sunTimeStamps}}</span>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import WeatherController from '../controllers/WeatherController';
    import './Weather.less';

    export default {
        name: 'Weather',
        components: {},
        data() {
            return WeatherController().defaultData;
        },
        methods: WeatherController().methods,
        mounted() {
            // call once on mount
            this.getWeather();
            // and then every 5min
            setInterval(() => {
                this.getWeather();
            }, 300000);
        },
        computed: {}
    }
</script>
