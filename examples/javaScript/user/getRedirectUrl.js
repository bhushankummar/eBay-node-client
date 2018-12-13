'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);

var userRequest = async function () {
    try {
        var DEFAULT_SCOPE_SANDBOX = 'https://api.ebay.com/oauth/api_scope/sell.inventory https://api.ebay.com/oauth/api_scope/commerce.catalog.readonly';

        var options = {
            scope: DEFAULT_SCOPE_SANDBOX,
            redirectURI: 'Bhushankumar_L-Bhushank-DemoAp-onqph'
        };
        var response = await eBay.user.getRedirectUrl(options);
        console.log('redirectUrl ', response);
    } catch (error) {
        console.log('error ', error);
    }
};
userRequest();
