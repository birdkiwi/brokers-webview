<template>
    <div class="wrapper">
        <transition name="fade">
            <div class="spinner-overlay" v-if="spinner">
                <div class="spinner">
                    <spinner :radius="'20px'"></spinner>
                </div>
            </div>
        </transition>

        <!--<transition name="fade">-->
            <router-view v-keep-scroll-position></router-view>
        <!--</transition>-->

        <!--<transition name="fade">
            <brokers-list v-if="currentView == 'brokers-list'" :brokers="brokers" :comparison="comparison"></brokers-list>
        </transition>

        <transition name="fade">
            <brokers-card v-if="currentView == 'brokers-card'" :broker="currentBroker"></brokers-card>
        </transition>

        <transition name="fade">
            <brokers-comparison v-if="currentView == 'brokers-comparison'" :comparison="comparison"></brokers-comparison>
        </transition>
        -->

        <transition name="fade">
            <div class="overlay overlay-padding" v-if="filters.visible">
                <brokers-filter :filters="filters" :countries="countries"></brokers-filter>
            </div>
        </transition>
    </div>
</template>
<script>
    import spinner from 'vue-spinner/src/FadeLoader.vue';
    import brokersList from './components/brokers-list.vue';
    import brokersCard from './components/brokers-card.vue';
    import brokersComparison from './components/brokers-comparison.vue';
    import brokersFilter from './components/brokers-filter.vue';
    import countryCodes from './data/countries.json';
    import * as types from './store/mutation-types';

    export default {
        data() {
            return {
            }
        },
        computed: {
            spinner() {
                return this.$store.state.spinner;
            },
            filters() {
                return this.$store.state.filters;
            },
            countries() {
                return this.$store.state.brokers.countries;
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
            this.$store.dispatch('getAllBrokers');

            window.messageFromNative = action => {
                this.$store.commit('SPINNER_DISABLE');

                switch (action) {
                    case 'list:FOREX':
                        this.$router.push('/brokers/Forex');
                        break;
                    case 'list:STOCKS':
                        this.$router.push('/brokers/Stock');
                        break;
                    case 'list:OTHER':
                        this.$router.push('/brokers/Other');
                        break;
                    case 'openFilter':
                        this.$store.commit(types.FILTER_OPEN);
                        break;
                    case 'closeFilter':
                        this.$store.commit(types.FILTER_CLOSE);
                        break;
                    default:
                        if (action.includes('id:')) {
                            const brokersIds = action.split(':')[1].split(',');

                            if (brokersIds.length > 1) {
                                this.$store.commit(types.COMPARISON_CLEAR);

                                brokersIds.forEach(brokerId => {
                                    this.$store.commit(types.COMPARISON_BROKER_ADD, {id: brokerId});
                                });

                                this.$router.push('/comparison');
                            } else {
                                this.$router.push('/broker/' + brokersIds[0]);
                            }
                        }
                }
            }
        }
    }
</script>
