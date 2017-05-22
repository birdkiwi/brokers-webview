import config from '../config';
import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: config.apiUrl,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export default {
    getBrokers(params) {
        return axiosInstance.get('FindAccounts', { params: params });
    },
    getCountries() {
        return axiosInstance.get('AccountCountries');
    }
}