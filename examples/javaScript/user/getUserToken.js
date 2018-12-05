'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);

var userRequest = async function () {
    try {
        var DEFAULT_SCOPE_SANDBOX = 'https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly';

        var options = {
            code: 'CODE'
        };
        var response = await eBay.user.getUserToken(options);
        console.log('redirectUrl ', response.redirectUrl);
    } catch (error) {
        console.log('error ', error);
    }
};
userRequest();
