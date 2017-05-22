import Vue from 'vue';
import Vuex from 'vuex';
import brokers from './modules/brokers';
import countries from './modules/countries';
import * as types from './mutation-types'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        spinner: false,
        filters: {
            visible: false,
            active: false,
            country: null,
            sortBy: null,
            tradeComission: {
                value: [0, 10],
                slider: {
                    width: '100%',
                    height: 2,
                    dotSize: 28,
                    min: 0,
                    max: 10,
                    tooltip: false
                }
            },
            minAccountDeposit: {
                value: [0, 10],
                slider: {
                    width: '100%',
                    height: 2,
                    dotSize: 28,
                    min: 0,
                    max: 10,
                    tooltip: false
                }
            }
        }
    },
    mutations: {
        [types.SPINNER_ENABLE] (state) {
            state.spinner = true;
        },

        [types.SPINNER_DISABLE] (state) {
            state.spinner = false;
        },

        [types.FILTER_OPEN] (state) {
            state.filters.visible = true;
        },

        [types.FILTER_CLOSE] (state) {
            state.filters.visible = false;
        },
    },
    actions: {

    },
    getters: {

    },
    modules: {
        brokers,
        countries
    },
});
