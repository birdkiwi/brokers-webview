<template>
    <div class="broker-card">
        <div class="broker-card-preview">
            <div v-if="broker.Live" class="broker-card-preview-live">
                Live
            </div>

            <div class="broker-card-preview-padding">
                <div class="broker-card-logo">
                    <img :src="'http://www.brokeries.com/Content/Proto/images/logos/brokers/' + broker.Broker + '.jpg'">
                </div>
                <div class="broker-card-title">
                    {{ broker.Broker }}
                </div>
                <div class="broker-card-subtitle">
                    {{ broker.ProfileType }} Account
                </div>
                <div class="broker-card-link-btn">
                    <a :href="broker.BrokerWebsite" target="_blank" class="button button-round button-green">Open account</a>
                </div>
            </div>
            <div v-if="broker.Promo !== undefined" class="broker-card-promo">
                <div class="broker-card-promo-title">
                    Promo
                </div>
                <div v-if="broker.Promo.length" class="broker-card-promo-desc">
                    <p>
                        {{ broker.Promo }}
                    </p>
                </div>
            </div>
        </div>

        <div class="broker-card-tabs">
            <a href="#" @click.prevent="currentTab = 'details'" class="broker-card-tabs-item" :class="(currentTab == 'details') ? 'active' : ''">Account Details</a>
            <a v-if="broker.Description" href="#" @click.prevent="currentTab = 'summary'" class="broker-card-tabs-item" :class="(currentTab == 'summary') ? 'active' : ''">Summary</a>
        </div>

        <transition name="fade">
            <div v-if="currentTab == 'details'">
                <table class="brokers-card-details-table">
                    <tr>
                        <th>Aggregate rating</th>
                        <td class="text-right text-uppercase">
                            <span v-if="broker.Rank === 'Excellent'" class="c-green">
                                {{ broker.Rank }}
                            </span>
                            <span v-else-if="broker.Rank === 'Poor'" class="c-gray-light">
                                {{ broker.Rank }}
                            </span>
                            <span v-else>
                                {{ broker.Rank }}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>Rating</th>
                        <td class="text-right">
                            <div class="brokers-card-stars broker-stars">
                                <span v-for="index in Math.round(broker.StarRating)" class="broker-stars-item broker-stars-item-filled"></span>
                                <span v-for="index in (5 - Math.round(broker.StarRating))" class="broker-stars-item"></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>EUR/USD spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageEurUsdSpread.toFixed(2) }}
                        </td>
                    </tr>
                    <tr>
                        <th>USD/JPY spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageUSDJPYSpread.toFixed(2) }}
                        </td>
                    </tr>
                    <tr>
                        <th>GBP/USD spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageGBPUSDSpread.toFixed(2) }}
                        </td>
                    </tr>
                    <tr>
                        <th>USD/CAD spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageUSDCADSpread.toFixed(2) }}
                        </td>
                    </tr>
                    <tr>
                        <th>XAU/USD spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageXAUUSDSpread.toFixed(2) }}
                        </td>
                    </tr>
                    <tr>
                        <th>AUD/USD spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageAUDUSDSpread.toFixed(2) }}
                        </td>
                    </tr>
                    <tr>
                        <th>USD/CHF spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageUSDCHFSpread.toFixed(2) }}
                        </td>
                    </tr>
                    <tr>
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
                    </tr>

                    <!--<tr>
                        <th>Rejection rate, avg</th>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th>Slippage, avg</th>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th>Execution time, avg</th>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th>Rejection rate, avg</th>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th>Trade commision</th>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th>Exchange commissions</th>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th>Execution type</th>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th>Incentive</th>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <th>Incentivized commission</th>
                        <td>

                        </td>
                    </tr>

                    Incomming wire transfer
                    Assested trade
                    Check copy
                    Check request
                    Contract
                    Deposit, Max
                    Leverage, Max
                    Outgoing account transfer full
                    Outgoing acct transfer partial
                    Outgoing wire transfer
                    Stop payment request
                    -->
                </table>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="currentTab == 'summary'">
                <div v-if="broker.Description" v-html="broker.Description" class="broker-card-summary"></div>
            </div>
        </transition>

        <pre style="background: #666; max-width: 100%; overflow: auto; max-height: 300px;">
            {{ broker }}
        </pre>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentTab: 'details'
            }
        },
        props: ['id'],
        computed: {
            broker() {
                return this.$store.state.brokers.all.find(broker => broker.BrokerId === this.id);
            }
        },
        mounted() {
            //document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }
</script>
