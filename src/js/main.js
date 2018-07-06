import Vue from 'vue';
import moment from 'moment';
import Home from './components/Home.vue';
import '../styles/style.less';

// import store from '../store';

/* eslint-disable no-new */
Vue.config.productionTip = false;

Vue.filter('formatDate', (value) => {
    const nowCheck = moment.unix(value).format('dh');
    const todayCheck = moment().format('dh');
    if (nowCheck === todayCheck) {
        return 'Now';
    }
    return moment.unix(value).format('ha');
});

Vue.filter('sunTimeStamps', (value) => {
    return moment.unix(value).format('hh:mma');
});

Vue.filter('getDay', (value) => {
    return moment.unix(value).format('dddd');
});

Vue.filter('round', (value) => {
    return Math.round(value);
});

const routes = {
    '/': Home
};

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // store,
    data: {
        currentRoute: window.location.pathname,
    },
    computed: {
        ViewComponent() {
            return routes[this.currentRoute];
        }
    },
    components: {
        Home,
    },
    created() {
        // this.$store.dispatch('loadData');
    },
    render(h) {
        return h(this.ViewComponent)
    },
});
