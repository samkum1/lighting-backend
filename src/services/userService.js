const apiClient = require('../config/apiConfig');
const { accountInfoResponse, usernameInfoResponse, addGigaBytesResponse, countryResponse, stateResponse, cityResponse, proxyListStickyResponse, proxyListRotatingResponse } = require('../mockResponse/mockResponse');

const createUserResidential = async (userData) => {
    try {
        const response = await apiClient.post('/create-user-residential', userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to create user.');
    }
};

const createProxyUserResidential = async (proxyData) => {
    try {
        const response = await apiClient.post('/create-proxy-user-residential', proxyData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to create proxy user.');
    }
};

const addGigabytesResidential = async (gigabytesData) => {
    try {
        const response = await apiClient.post('/add-gigabytes-residential', gigabytesData);
        return response.data;
        // return addGigaBytesResponse
    } catch (error) {
        console.log(error)
        throw new Error(error.response?.data?.message || 'Failed to add gigabytes.');
    }
};

const proxyListCreateResidential = async (proxyListData) => {
    try {
        // console.log(proxyListData)
        const response = await apiClient.post('/proxy-list-create-residential', proxyListData);
        return response.data;
        // if(proxyListData?.type === "sticky"){
        //     return proxyListStickyResponse
        // }
        // else{
        //     return proxyListRotatingResponse
        // }
    } catch (error) {
        console.log(error)
        throw new Error(error.response?.data?.message || 'Failed to proxy list residential.');
    }
};



const accountInfo = async (accountData) => {
    try {
        const response = await apiClient.post('/residential-account-info', accountData);
        return response.data;
        // return accountInfoResponse
    } catch (error) {
        console.log(error)
        throw new Error(error.response?.data?.message || 'Failed to fetch account info.');
    }
};
const usernameInfo = async (usernameData) => {
    try {
        // console.log(usernameData)
        const response = await apiClient.post('/residential-username-info', usernameData);
        return response.data;
        // return usernameInfoResponse
    } catch (error) {
        console.log(error)
        throw new Error(error.response?.data?.message || 'Failed to fetch username info.');
    }
};

const getCountryStateCity = async (countryData) => {
    try {
        // if(countryData?.state){
        //     return cityResponse
        // }
        // else if(countryData?.country_code){
        //     return stateResponse
        // }
        // else{
        //     return countryResponse
        // }
        const response = await apiClient.post('/list-countries-state-city-isp', countryData);
        return response.data;
        // return stateResponse
    } catch (error) {
        console.log(error)
        throw new Error(error.response?.data?.message || 'Failed to fetch username info.');
    }
};

module.exports = {
    createUserResidential,
    createProxyUserResidential,
    addGigabytesResidential,
    accountInfo,
    usernameInfo,
    proxyListCreateResidential,
    getCountryStateCity
};
