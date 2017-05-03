<template>
    <div class="brokers-filter-select">
        <a href="#" @click.prevent="selectCountry(null)" class="brokers-filter-select-item">
            All countries
        </a>
        <a href="#" @click.prevent="selectCountry(name)" v-for="(country, name) in countries" class="brokers-filter-select-item">
            {{ name }}
        </a>
    </div>
</template>
<script>
    export default {
        props: ['countries', 'filters'],
        methods: {
            selectCountry(name) {
                this.$parent.showCountrySelect = false;
                this.filters.country = name;
            }
        }
    }
</script>
