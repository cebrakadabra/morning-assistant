import moment from 'moment';
import WeatherService from '../services/WeatherService';

export default function WeatherController() {
    return {
        defaultData: {
            weatherdata: {
                currently: {
                    icon: null,
                    temperature: null,
                    humidity: null,
                    windspeed: null,
                    visibility: null,
                },
                daily: {
                    data: [],
                    summary: null,
                },
                hourly: {
                    data: [],
                },
            },
            lastFetched: null,
            errorMessage: false,
        },
        methods: {
            getWeather() {
                WeatherService().getWeather((response) => {
                    this.loading = false;
                    if (response) {
                        this.weatherdata = response.data;
                        console.log(response.data);
                        this.lastFetched = moment();
                    } else {
                        this.errorMessage = true;
                    }
                });
            },
        },
    }
}
