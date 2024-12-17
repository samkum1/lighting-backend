const Bandwidth = require('../Models/BandwidthModel');
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
        const {username} = req.body
        const result = await Bandwidth.findOne({userName: username});
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

const updateUserNameInfo = async (username) => {
    try {
        const result = await usernameInfo({username});
        const { bandwidthLeft, all_buy, used } = result
     
        const updatedBandwidth = await Bandwidth.findOneAndUpdate(
            { userName: username },
            { $set: { bandwidthLeft, all_buy, used } },
            { new: true, runValidators: true }
        );
        console.log(updatedBandwidth, 'UserName Info Updated Successfully');
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    createUser,
    createProxyUser,
    addGigabytes,
    fetchAccountInfo,
    fetchUsernameInfo,
    proxyList,
    fetchCountry,
    updateUserNameInfo
};
