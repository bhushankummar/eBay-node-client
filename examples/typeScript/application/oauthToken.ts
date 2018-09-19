'use strict';

const clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
const clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

const eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);

const applicationRequest = async function () {

    try {
        const token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        console.log('token.access_token ', token.access_token);
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
    }
};

applicationRequest();
