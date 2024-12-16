const express = require('express');
const {
    createUser,
    createProxyUser,
    addGigabytes,
    fetchAccountInfo,
    fetchUsernameInfo,
    proxyList,
    fetchCountry,
} = require('../controllers/userController');

const router = express.Router();

// Routes for user-related actions
router.post('/create-user', createUser);
router.post('/create-proxy-user', createProxyUser);
router.post('/add-gigabytes', addGigabytes);
router.post('/account-info', fetchAccountInfo);
router.post('/username-info', fetchUsernameInfo);
router.post('/proxy-list', proxyList);
router.post('/country-state-city', fetchCountry);

module.exports = router;
