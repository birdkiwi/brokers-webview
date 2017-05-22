"use strict";
import config from './config';
import Vue from 'vue';
import store from './store';
import VueRouter from 'vue-router'
import VueKeepScrollPosition from 'vue-keep-scroll-position';
import '../less/style.less';

Vue.use(VueRouter);
Vue.use(VueKeepScrollPosition);

Vue.config.debug = (NODE_ENV == 'dev');

//Vue components
import App from './App.vue';
import BrokersList from './components/brokers-list.vue';
import BrokersCard from './components/brokers-card.vue';
import BrokersComparison from './components/brokers-comparison.vue';

const routes = [
    { path: '/brokers', component: BrokersList, props: true },
    { path: '/brokers/:type', component: BrokersList, props: true },
    { path: '/broker/:id', component: BrokersCard, props: true },
    { path: '/comparison', component: BrokersComparison, props: true },
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    store,
    render: createEle => createEle(App)
}).$mount('#app');

window.app = app;
