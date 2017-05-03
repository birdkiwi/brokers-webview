<template>
    <div>
        <div class="brokers-list">
            <div class="brokers-list-item" v-for="broker in brokers">
                <a href="#" @click.prevent="$parent.openBroker(broker)" class="brokers-list-item-left">
                    <div class="brokers-list-item-photo">
                        <img :src="'http://www.brokeries.com/Content/Proto/images/logos/brokers/' + broker.Broker + '.jpg'">
                    </div>
                    <div class="brokers-list-item-stars broker-stars">
                        <span v-for="index in Math.round(broker.StarRating)" class="broker-stars-item broker-stars-item-filled"></span>
                        <span v-for="index in (5 - Math.round(broker.StarRating))" class="broker-stars-item"></span>
                    </div>
                </a>
                <a href="#" @click.prevent="$parent.openBroker(broker)" class="brokers-list-item-content">
                    <div class="brokers-list-item-title">{{ broker.Broker }}</div>
                    <div class="brokers-list-item-subtitle">
                        <div class="brokers-list-item-label">Promo</div>
                        {{ broker.ProfileType }} Account
                    </div>
                    <table class="brokers-list-item-table">
                        <tr>
                            <th>Aggregate rating</th>
                            <th>Min Deposit</th>
                            <th>Max Leverage</th>
                        </tr>
                        <tr>
                            <td>
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
                            <td>
                                {{ broker.MinDeposit }}
                            </td>
                            <td>
                                {{ broker.MaxLeverage }}
                            </td>
                        </tr>
                    </table>
                </a>
                <a v-if="inComparison(broker)" href="#" class="brokers-list-item-comparison" @click.prevent="removeFromComparison(broker)">
                    <svg width="29px" height="29px" viewBox="0 0 28 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <circle fill="#0CAE00" cx="14.5" cy="14.5" r="14.5"></circle>
                            <path d="M13.4482584,18.5301613 L21.9922485,9.98901367 L21.0046387,9 L13.0028687,17.0126343 L13.0028687,17.0353962 L9.934021,13.9698486 L9,14.9414063 L13.0028687,18.9685579 L13.0028687,18.9754028 L13.0062813,18.9719913 L13.0144043,18.9801636 L13.4482584,18.5301613 Z" fill="#FFFFFF"></path>
                        </g>
                    </svg>
                </a>
                <a v-else-if="comparison.length < 5" href="#" class="brokers-list-item-comparison" @click.prevent="addToComparison(broker)">
                    <svg width="29px" height="29px" viewBox="0 0 28 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <circle id="path-1" cx="14.5" cy="14.5" r="14.5"></circle>
                            <mask id="mask-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="29" height="29" fill="white">
                                <use xlink:href="#path-1"></use>
                            </mask>
                        </defs>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <use stroke="#ADADAD" mask="url(#mask-2)" stroke-width="2" fill="#FFFFFF" xlink:href="#path-1"></use>
                            <g transform="translate(7.000000, 7.000000)" fill="#ADADAD">
                                <rect x="0" y="7" width="15" height="1"></rect>
                                <rect transform="translate(7.500000, 7.500000) rotate(-270.000000) translate(-7.500000, -7.500000) " x="0" y="7" width="15" height="1"></rect>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        <div :class="'brokers-comparison-button ' + (comparison.length ? 'active': '')">
            <a href="#" @click.prevent="compare" class="brokers-comparison-button-text">
                Compare: {{ comparison.length }}
            </a>
            <a href="#" @click.prevent="clearComparison" class="brokers-comparison-button-clear"></a>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showShadow: true
            }
        },
        props: ['brokers', 'comparison'],
        methods: {
            addToComparison(broker) {
                if (!this.inComparison(broker) && this.comparison.length < 5) {
                    this.comparison.push(broker);
                }
            },
            removeFromComparison(broker) {
                this.comparison.forEach((v, i) => {
                    if (v.BrokerId === broker.BrokerId) {
                        this.comparison.splice(i, 1);
                    }
                });
            },
            inComparison(broker) {
                let result = false;

                this.comparison.forEach((v, i) => {
                    if (v.BrokerId === broker.BrokerId) {
                        result = true;
                    }
                });

                return result;
            },
            clearComparison() {
                this.comparison.splice(0, this.comparison.length);
            },
            compare() {
                window.scrollTo(0, 0);
                this.$parent.setView('brokers-comparison');
            },
            scroll() {
                this.$parent.brokersListScroll = window.pageYOffset;
            }
        }
    }
</script>
