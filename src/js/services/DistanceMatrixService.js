export default function DistanceMatrixService() {
    return {
        getDistance: (origins, destinations, gservice, callback) => {
            gservice.getDistanceMatrix({
                origins: origins,
                destinations: destinations,
                travelMode: 'DRIVING',
                drivingOptions: {
                    departureTime: new Date(),
                    trafficModel: 'pessimistic',
                },
                avoidHighways: false,
                avoidTolls: false,
            }, callback);
        },
    };
}
