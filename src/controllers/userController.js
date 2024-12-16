const {
    createUserResidential,
    createProxyUserResidential,
    addGigabytesResidential,
    getProxiesResidential,
    addDomain,
    accountInfo,
    usernameInfo,
    proxyListCreateResidential,
    getCountryStateCity,
} = require('../services/userService');
const { sendSuccessResponse, sendErrorResponse } = require('../utils/responseHelper');

const createUser = async (req, res) => {
    try {
        const result = await createUserResidential(req.body);
        sendSuccessResponse(res, result, 'User created successfully.');
    } catch (error) {
        sendErrorResponse(res, error.message);
    }
};

const createProxyUser = async (req, res) => {
    try {
        const result = await createProxyUserResidential(req.body);
        sendSuccessResponse(res, result, 'Proxy user created successfully.');
    } catch (error) {
        sendErrorResponse(res, error.message);
    }
};

const addGigabytes = async (req, res) => {
    try {
        const result = await addGigabytesResidential(req.body);
        sendSuccessResponse(res, result, 'Gigabytes added successfully.');
    } catch (error) {
        sendErrorResponse(res, error.message);
    }
};

const proxyList = async (req, res) => {
    try {
        const result = await proxyListCreateResidential(req.body);
        sendSuccessResponse(res, result, 'Proxy list successfully.');
    } catch (error) {
        sendErrorResponse(res, error.message);
    }
};

const fetchAccountInfo = async (req, res) => {
    try {
        const result = await accountInfo(req.body);
        sendSuccessResponse(res, result, 'Account info fetched successfully.');
    } catch (error) {
        sendErrorResponse(res, error.message);
    }
};

const fetchUsernameInfo = async (req, res) => {
    try {
        const result = await usernameInfo(req.body);
        sendSuccessResponse(res, result, 'Username info fetched successfully.');
    } catch (error) {
        sendErrorResponse(res, error.message);
    }
};

const fetchCountry = async (req, res) => {
    try {
        const result = await getCountryStateCity(req.body);
        sendSuccessResponse(res, result, 'Country info fetched successfully.');
    } catch (error) {
        sendErrorResponse(res, error.message);
    }
};

module.exports = {
    createUser,
    createProxyUser,
    addGigabytes,
    fetchAccountInfo,
    fetchUsernameInfo,
    proxyList,
    fetchCountry
};
