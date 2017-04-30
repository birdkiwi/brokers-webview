<template>
    <div class="brokers-filter">
        <div class="brokers-filter-header">
            <div class="brokers-filter-header-title">
                Filter
            </div>

            <div class="brokers-filter-header-buttons">
                <a href="#" class="button button-round button-gray">Reset</a>
                <a href="#" class="button button-round button-green">Apply</a>
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
                <select v-model="filters.country" class="js-country-select brokers-filter-control-country-select">
                    <option :value="null">All countries</option>
                    <option v-for="(country, name) in countries" :value="name">
                        {{ name }}
                    </option>
                </select>
            </div>

            <div class="brokers-filter-control brokers-filter-control-sorting">
                <div class="brokers-filter-control-title">
                    Sorting
                </div>
                <div class="brokers-filter-control-sorting-select">
                    <a href="#" @click.prevent="" class="brokers-filter-control-sorting-select-item active">
                        Unsorted
                    </a>
                    <a href="#" @click.prevent="" class="brokers-filter-control-sorting-select-item">
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
</template>
<script>
    import vueSlider from 'vue-slider-component';

    export default {
        data() {
            return {

            }
        },
        components: {
            vueSlider
        },
        props: ['filters', 'countries']
    }
</script>
