import brokersAPI from '../../api/brokers'
import * as types from '../mutation-types'

const state = {
    all: [],
    comparison: [],
    countries: [],
    scrollPosition: 0
};

const getters = {
    getBrokersByType: (state, getters) => (type) => {
        if (type === "Other") {
            return state.all.filter( broker => {
                return broker.ProfileType !== "Forex" && broker.ProfileType !== "Stock"
            });
        } else {
            return state.all.filter(broker => broker.ProfileType === type);
        }
    }
};

const actions = {
    getAllBrokers ({ commit }) {
        commit(types.SPINNER_ENABLE);

        let localStorageBrokers = [];
        let localStorageCountries = {};

        try {
            localStorageBrokers = JSON.parse(window.localStorage.getItem('brokers'));
            localStorageCountries = JSON.parse(window.localStorage.getItem('countries'));
        } catch(e) {
            console.log('LocalStorage Get error: ', e);
        }

        if (localStorageBrokers && localStorageBrokers.length) {
            commit(types.BROKERS_RECEIVE, localStorageBrokers);
        } else {
            brokersAPI.getBrokers().then(res => {
                if (res.data && res.data.data) {
                    try {
                        window.localStorage.setItem('brokers', JSON.stringify(res.data.data));
                    } catch(e) {
                        console.log('LocalStorage Set error: ', e);
                    }
                    commit(types.BROKERS_RECEIVE, res.data.data);
                }
            });

            //TODO: error callback

            //TODO: check last_updated to update localStorage brokers
        }

        if (localStorageCountries && Object.keys(localStorageCountries).length) {
            commit(types.COUNTRIES_RECEIVE, localStorageCountries);
        } else {
            brokersAPI.getCountries().then(res => {
                try {
                    window.localStorage.setItem('countries', JSON.stringify(res.data));
                } catch(e) {
                    console.log('LocalStorage Set error: ', e);
                }
                commit(types.COUNTRIES_RECEIVE, res.data);
            });
        }
    }
};

const mutations = {
    [types.BROKERS_RECEIVE] (state, brokers) {
        state.all = brokers;
    },

    [types.COUNTRIES_RECEIVE] (state, countries) {
        state.countries = countries;
    },

    [types.COMPARISON_BROKER_ADD] (state, { id }) {
        const brokerFound = state.comparison.filter( broker => broker.BrokerId === id);
        const broker = state.all.find(broker => broker.BrokerId === id);

        if (broker && !brokerFound.length) {
            state.comparison.push(broker);
        }
    },

    [types.COMPARISON_BROKER_DEL] (state, { id }) {
        state.comparison = state.comparison.filter( broker => {
            return broker.BrokerId !== id;
        } )
    },

    [types.COMPARISON_CLEAR] (state) {
        state.comparison = [];
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}