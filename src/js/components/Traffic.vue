<template>
    <div>
        <div class="traffic-map" id="traffic-map"></div>
        <div class="duration-container">
            <div class="traffic-info">
                <div class="traffic-symbols"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> <i
                    class="fas fa-car" aria-hidden="true"></i> <i class="fas fa-long-arrow-alt-right"></i> <i
                    class="fas fa-briefcase" aria-hidden="true"></i></div>
                <div class="traffic-duration-real"
                     v-bind:class="{
                     green: ((this.trafficdata.duration_in_traffic / 60) <= 19),
                     yellow:  ((this.trafficdata.duration_in_traffic / 60) > 19 && (this.trafficdata.duration_in_traffic / 60) < 25),
                     red: ((this.trafficdata.duration_in_traffic / 60) >= 25)
                     }"
                >{{this.trafficdata.duration_in_traffic | calcmin }} min
                    <br>
                    <span class="traffic-duration-normal">Usually this takes {{this.trafficdata.duration | calcmin}} min</span>
                    <span class="km"> ({{this.trafficdata.distance | calckm}}km)</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import DistanceMatrixService from '../services/DistanceMatrixService';
    import _ from 'lodash';
    import './Traffic.less';

    export default {
        name: 'Traffic',
        components: {},
        data() {
            return {
                trafficdata: {
                    distance: null,
                    duration: null,
                    duration_in_traffic: null,
                }
            }
        },
        mounted() {
            const map = new google.maps.Map(document.getElementById('traffic-map'), {
                zoom: 10,
                center: {lat: 47.6628035, lng: 13.0867061},
                // styles: mapStyle,
            });
            const trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);

            const distanceMatrixService = new google.maps.DistanceMatrixService();

            const origins = ['Markt 77, 5440 Golling an der Salzach'];
            const destinations = ['Halleiner Landesstraße 24, 5061 Elsbethen'];
            // call once on mount
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

            // and then every 5min
            setInterval(() => {
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
            }, 1800000); // execute this every half an hour
        },
        computed: {},
    }
</script>
