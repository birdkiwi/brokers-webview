"use strict";
import Vue from 'vue';
import '../less/style.less';

Vue.config.debug = (NODE_ENV == 'dev');

//Vue components
import App from './App.vue'

var app = new Vue({render: createEle => createEle(App)}).$mount('#app');

window.app = app;