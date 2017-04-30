<template>
    <div class="broker-card">
        <div class="broker-card-preview">

            <div class="broker-card-preview-live">
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
            <div class="broker-card-promo">
                <div class="broker-card-promo-title">
                    Promo
                </div>
                <div class="broker-card-promo-desc">
                    <p>
                        Promo???
                    </p>
                </div>
            </div>
        </div>

        <div class="broker-card-tabs">
            <a href="#" @click.prevent="currentTab = 'details'" class="broker-card-tabs-item" :class="(currentTab == 'details') ? 'active' : ''">Account Details</a>
            <a href="#" @click.prevent="currentTab = 'summary'" class="broker-card-tabs-item" :class="(currentTab == 'summary') ? 'active' : ''">Summary</a>
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
                            {{ broker.AverageEurUsdSpread }}
                        </td>
                    </tr>
                    <tr>
                        <th>USD/JPY spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageUSDJPYSpread }}
                        </td>
                    </tr>
                    <tr>
                        <th>GBP/USD spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageGBPUSDSpread }}
                        </td>
                    </tr>
                    <tr>
                        <th>USD/CAD spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageUSDCADSpread }}
                        </td>
                    </tr>
                    <tr>
                        <th>XAU/USD spread, avg</th>
                        <td class="text-right">
                            {{ broker.AverageXAUUSDSpread }}
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
                <div class="broker-card-summary">
                    <p>
                        Trade over 50 currency pairs including gold and silver in real time. Benefits from sophisticated trading platforms, premium charting tools. Access extensive education, actionable research, detailed charts, and more…
                    </p>
                </div>
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
        props: ['broker']
    }
</script>
