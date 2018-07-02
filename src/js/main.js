import Vue from 'vue';
import Home from './components/Home.vue';
import '../styles/style.less';

// import store from '../store';

/* eslint-disable no-new */
Vue.config.productionTip = false;
//
// Vue.filter('formatDate', (value) => {
//     return moment(String(value)).format('ddd, MMM Do YYYY - hh:mma');
// });
//
// Vue.filter('formatShortDate', (value) => {
//     return moment(String(value)).format('MM/DD hh:mma');
// });

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
