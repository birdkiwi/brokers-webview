<template>
    <div class="wrapper">
        <transition name="fade">
            <div class="spinner-overlay" v-if="spinner">
                <div class="spinner">
                    <spinner :radius="'20px'"></spinner>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <brokers-list v-if="currentView == 'brokers-list'" :brokers="brokers" :comparison="comparison"></brokers-list>
        </transition>

        <transition name="fade">
            <brokers-card v-if="currentView == 'brokers-card'" :broker="currentBroker"></brokers-card>
        </transition>

        <transition name="fade">
            <brokers-comparison v-if="currentView == 'brokers-comparison'" :comparison="comparison"></brokers-comparison>
        </transition>

        <transition name="fade">
            <div class="overlay overlay-padding" v-if="filters.visible">
                <brokers-filter :filters="filters" :countries="countries"></brokers-filter>
            </div>
        </transition>
    </div>
</template>
<script>
    import config from './config';
    import axios from 'axios';
    import spinner from 'vue-spinner/src/FadeLoader.vue';
    import brokersList from './components/brokers-list.vue';
    import brokersCard from './components/brokers-card.vue';
    import brokersComparison from './components/brokers-comparison.vue';
    import brokersFilter from './components/brokers-filter.vue';
    import countryCodes from './data/countries.json';

    let axiosInstance = axios.create({
        baseURL: config.apiUrl,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    });

    export default {
        data() {
            return {
                currentView: 'brokers-list',
                brokersListScroll: 0,
                currentBroker: null,
                spinner: false,
                brokers: [],
                countries: {},
                comparison: [],
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
            }
        },
        components: {
            brokersList,
            brokersFilter,
            brokersComparison,
            brokersCard,
            spinner
        },
        methods: {
            getAccounts(type) {
                let _this = this;
                _this.spinner = true;

                let params = {
                    type: type ? type : 'Forex'
                }

                axiosInstance.get('FindAccounts', {
                    params: params
                }).then(function(response) {
                    _this.brokers = response.data.data;
                    _this.spinner = false;
                }, function (error) {
                    _this.spinner = false;
                    //TODO: error handler
                });
            },
            getCountries() {
                let _this = this;

                axiosInstance.get('AccountCountries')
                    .then(function(response) {
                        _this.countries = response.data;
                    }, function (error) {
                        //TODO: error handler
                    });
            },
            showFilter() {
                this.filters.visible = true;
            },
            hideFilter() {
                this.filters.visible = false;
            },
            toggleCountrySelect() {
                this.$el.querySelector('.js-country-select').click();
            },
            openBroker(broker) {
                this.currentView = 'brokers-card';
                this.currentBroker = broker;
            },
            setView(view) {
                this.currentView = view;
            }
        },
        mounted() {
            this.getAccounts();
            this.getCountries();
            window.showFilter = this.showFilter;
            window.hideFilter = this.hideFilter;
            window.getAccounts = this.getAccounts;
            window.setView = this.setView;
        }
    }
</script>
