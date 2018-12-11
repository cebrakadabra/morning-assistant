import axios from 'axios';

export default function DistanceMatrixService() {
    return {
        getDistance: (origins, destinations, service, callback) => {
            service.getDistanceMatrix({
                origins: origins,
                destinations: destinations,
                travelMode: 'DRIVING',
                drivingOptions: {
                    departureTime: new Date(),
                    trafficModel: 'pessimistic'
                },
                avoidHighways: false,
                avoidTolls: false,
            }, callback);
        }
    }
}
