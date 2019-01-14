import _ from 'lodash';
import DistanceMatrixService from '../services/DistanceMatrixService';

export default function TrafficController() {
    return {
        defaultData: {
            trafficdata: {
                distance: null,
                duration: null,
                duration_in_traffic: null,
            },
        },
        methods: {
            getDistance(origins, destinations, distanceMatrixService) {
                DistanceMatrixService().getDistance(origins, destinations, distanceMatrixService, (response) => {
                    if (response) {
                        this.trafficdata.distance = _.get(response, 'rows[0].elements[0].distance.value');
                        this.trafficdata.duration = _.get(response, 'rows[0].elements[0].duration.value');
                        this.trafficdata.duration_in_traffic = _.get(response, 'rows[0].elements[0].duration_in_traffic.value');
                        console.log(response);
                    } else {
                        // this.errorMessage = true;
                        // error occured
                    }
                });
            }
        },
    };
}
