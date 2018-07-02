import axios from 'axios';

export default function WeatherService() {
    return {
        getEventProfiles: (callback) => {
            axios.get('/api/weatherforecast')
                .then((data) => {
                    callback(data);
                }, (error) => {
                    callback(null);
                })
        }
    }
}
