import axios from 'axios';

export default function WeatherService() {
    return {
        getWeather: (callback) => {
            axios.get('/api/weatherforecast')
                .then((data) => {
                    callback(data);
                }, (error) => {
                    callback(null);
                })
        }
    }
}
