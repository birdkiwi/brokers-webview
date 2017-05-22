<template>
    <div class="broker-comparison">
        <div v-for="(broker, index) in comparison" class="broker-comparison-item">
            <div class="broker-comparison-card">
                <div class="broker-comparison-card-padding">
                    <div class="broker-comparison-card-logo">
                        <img :src="'http://www.brokeries.com/Content/Proto/images/logos/brokers/' + broker.Broker + '.jpg'">
                    </div>
                    <div class="broker-comparison-card-title">
                        {{ broker.Broker }}
                    </div>
                    <div class="broker-comparison-card-subtitle">
                        {{ broker.ProfileType }} Account
                    </div>
                    <div class="broker-comparison-card-link-btn">
                        <a :href="broker.BrokerWebsite" target="_blank" class="button button-round button-green">Open account</a>
                    </div>
                </div>
            </div>
            <div class="broker-comparison-table">
                <div class="broker-comparison-table-row">
                    <div v-if="index == 0" class="broker-comparison-table-row-title">
                        Aggregate rating
                    </div>
                    <span v-if="broker.Rank === 'Excellent'" class="c-green">
                        {{ broker.Rank }}
                    </span>
                    <span v-else-if="broker.Rank === 'Poor'" class="c-gray-light">
                        {{ broker.Rank }}
                    </span>
                    <span v-else>
                        {{ broker.Rank }}
                    </span>
                </div>
                <div class="broker-comparison-table-row">
                    <div v-if="index == 0" class="broker-comparison-table-row-title">
                        Rating
                    </div>
                    <div class="brokers-card-stars broker-stars">
                        <span v-for="index in Math.round(broker.StarRating)" class="broker-stars-item broker-stars-item-filled"></span>
                        <span v-for="index in (5 - Math.round(broker.StarRating))" class="broker-stars-item"></span>
                    </div>
                </div>
                <div class="broker-comparison-table-row">
                    <div v-if="index == 0" class="broker-comparison-table-row-title">
                        EUR/USD spread, avg
                    </div>
                    {{ broker.AverageEurUsdSpread.toFixed(2) }}
                </div>
                <div class="broker-comparison-table-row">
                    <div v-if="index == 0" class="broker-comparison-table-row-title">
                        USD/JPY spread, avg
                    </div>
                    {{ broker.AverageUSDJPYSpread.toFixed(2) }}
                </div>
                <div class="broker-comparison-table-row">
                    <div v-if="index == 0" class="broker-comparison-table-row-title">
                        GBP/USD spread, avg
                    </div>
                    {{ broker.AverageGBPUSDSpread.toFixed(2) }}
                </div>
                <div class="broker-comparison-table-row">
                    <div v-if="index == 0" class="broker-comparison-table-row-title">
                        USD/CAD spread, avg
                    </div>
                    {{ broker.AverageUSDCADSpread.toFixed(2) }}
                </div>
                <div class="broker-comparison-table-row">
                    <div v-if="index == 0" class="broker-comparison-table-row-title">
                        XAU/USD spread, avg
                    </div>
                    {{ broker.AverageXAUUSDSpread.toFixed(2) }}
                </div>
                <div class="broker-comparison-table-row">
                    <div v-if="index == 0" class="broker-comparison-table-row-title">
                        AUD/USD spread, avg
                    </div>
                    {{ broker.AverageAUDUSDSpread }}
                </div>
                <div class="broker-comparison-table-row">
                    <div v-if="index == 0" class="broker-comparison-table-row-title">
                        USD/CHF spread, avg
                    </div>
                    {{ broker.AverageUSDCHFSpread.toFixed(2) }}
                </div>


                <!--<tr>
                    <th>Trade comission</th>
                    <td class="text-right">
                        {{ broker.TradeCommission }}
                    </td>
                </tr>
                <tr>
                    <th>Incentive</th>
                    <td class="text-right">
                        {{ broker.Incentive }}
                    </td>
                </tr>
                <tr>
                    <th>Assisted trade fee</th>
                    <td class="text-right">
                        {{ broker.AssistedTradeFee }}
                    </td>
                </tr>
                <tr>
                    <th>Marginable</th>
                    <td class="text-right">
                        {{ broker.Marginable ? 'Yes' : 'No' }}
                    </td>
                </tr>
                <tr>
                    <th>Margin rate</th>
                    <td class="text-right">
                        {{ broker.MarginRate }}
                    </td>
                </tr>
                <tr>
                    <th>Volume-based commission</th>
                    <td class="text-right">
                        {{ broker.IsCommissionVolumeBased ? 'Yes' : 'No' }}
                    </td>
                </tr>
                <tr>
                    <th>Minumum deposit</th>
                    <td class="text-right">
                        {{ broker.MinDeposit }}
                    </td>
                </tr>
                <tr>
                    <th>Minumum deposit (Margin)</th>
                    <td class="text-right">
                        {{ broker.MarginMinDeposit }}
                    </td>
                </tr>
                <tr>
                    <th>Maximum Leverage</th>
                    <td class="text-right">
                        {{ broker.MaxLeverage }}
                    </td>
                </tr>
                <tr>
                    <th>Contract fee</th>
                    <td class="text-right">
                        {{ broker.ContractFee }}
                    </td>
                </tr>
                <tr>
                    <th>Broker Address</th>
                    <td class="text-right">
                        <div v-html="broker.Location">
                        </div>
                    </td>
                </tr>-->
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            comparison() {
                return this.$store.state.brokers.comparison;
            }
        }
    }
</script>
