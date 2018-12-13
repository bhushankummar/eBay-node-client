'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);

var userRequest = async function () {
    var token = {};
    try {
        var options = {
            redirectURI: 'Bhushankumar_L-Bhushank-DemoAp-onqph',
            code: 'v^1.1#i^1#f^0#r^1#p^3#I^3#t^Ul41Xzg6QTgwNEM4REE5RDUwODMyNzgyNjJFNUVBRTk1OTQ3QzlfMl8xI0VeMTI4NA=='
        };
        token = await eBay.user.retrieveUserToken(options);
        console.log('response ', token);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    console.log('user token ', token.access_token);
    eBay.setUserToken(token.access_token);
    var data = {
        q: 'drone'
    };
    try {
        var response = await eBay.catalog.search(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};
userRequest();
