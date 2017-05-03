<template>
    <div class="brokers-filter">
        <div class="brokers-filter-padding">
            <div class="brokers-filter-header">
                <div class="brokers-filter-header-title">
                    Filter
                </div>

                <div class="brokers-filter-header-buttons">
                    <a href="#" @click.prevent="resetFilter" class="button button-round">Reset &times;</a>
                    <a href="#" @click.prevent="applyFilter" class="button button-round button-green">Apply</a>
                </div>
            </div>

            <div class="brokers-filter-body">
                <div class="brokers-filter-control brokers-filter-control-country">
                    <div class="brokers-filter-control-country-title">
                        Country range
                    </div>
                    <a href="#" @click.prevent="toggleCountrySelect" class="brokers-filter-control-country-link">
                        {{ filters.country ? filters.country : 'All countries' }}
                    </a>
                </div>

                <div class="brokers-filter-control brokers-filter-control-sorting">
                    <div class="brokers-filter-control-title">
                        Sorting
                    </div>
                    <div class="brokers-filter-control-sorting-select">
                        <a href="#" @click.prevent="filters.sortBy = null" class="brokers-filter-control-sorting-select-item" :class="filters.sortBy == null ? 'active': ''">
                            Unsorted
                        </a>
                        <a href="#" @click.prevent="filters.sortBy = 'abc'" class="brokers-filter-control-sorting-select-item" :class="filters.sortBy == 'abc' ? 'active': ''">
                            Abc
                        </a>
                    </div>
                </div>

                <div class="brokers-filter-control brokers-filter-control-range">
                    <div class="brokers-filter-control-title">
                        Trade Comission
                    </div>

                    <vue-slider ref="tradeComissionSlider" v-bind="filters.tradeComission.slider" v-model="filters.tradeComission.value"></vue-slider>
                    <div class="brokers-filter-control-range-values">
                        <div class="brokers-filter-control-range-min">
                            {{ filters.tradeComission.value[0] }}
                        </div>
                        <div class="brokers-filter-control-range-max">
                            {{ filters.tradeComission.value[1] }}
                        </div>
                    </div>
                </div>

                <div class="brokers-filter-control brokers-filter-control-range">
                    <div class="brokers-filter-control-title">
                        Min account deposit
                    </div>

                    <vue-slider v-bind="filters.minAccountDeposit.slider" v-model="filters.minAccountDeposit.value"></vue-slider>

                    <div class="brokers-filter-control-range-values">
                        <div class="brokers-filter-control-range-min">
                            {{ filters.minAccountDeposit.value[0] }}
                        </div>
                        <div class="brokers-filter-control-range-max">
                            {{ filters.minAccountDeposit.value[1] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <transition name="fade">
            <countries-select v-if="showCountrySelect" :countries="countries" :filters="filters"></countries-select>
        </transition>
    </div>
</template>
<script>
    import vueSlider from 'vue-slider-component';
    import countriesSelect from './countries-select.vue';

    export default {
        data() {
            return {
                showCountrySelect: false
            }
        },
        components: {
            vueSlider,
            countriesSelect
        },
        props: ['filters', 'countries'],
        methods: {
            toggleCountrySelect() {
                this.showCountrySelect = true;
            },
            resetFilter() {
                this.filters.active = false;
                this.filters.country = null;
                this.filters.sortBy = null;
                this.filters.tradeComission.value = [0, 10];
                this.filters.minAccountDeposit.value = [0, 10];
            },
            applyFilter() {
                this.filters.active = true;
                this.filters.visible = false;
            }
        }
    }
</script>
