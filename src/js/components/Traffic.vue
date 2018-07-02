<template>
    <div class="traffic-map" id="traffic-map">

    </div>
</template>

<script>
    import mapStyle from '../lib/mapStyle';
    import './Traffic.less';

    export default {
        name: 'Traffic',
        components: {},
        data() {
            return {}
        },
        mounted() {
            const map = new google.maps.Map(document.getElementById('traffic-map'), {
                zoom: 10,
                center: {lat: 47.6628035, lng: 13.0867061},
                // styles: mapStyle,
            });
            const trafficLayer = new google.maps.TrafficLayer();
            trafficLayer.setMap(map);
        },
        computed: {

        }
    }
</script>
