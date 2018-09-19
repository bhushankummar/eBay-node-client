'use strict';

const clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
const clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

const eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);

const browseRequest = async function () {
    try {
        const token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
        return;
    }

    const itemId = 'v1|110329773707|410089528845';
    eBay.browse.getItem(itemId, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

browseRequest();
