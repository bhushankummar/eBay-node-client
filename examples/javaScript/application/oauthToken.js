'use strict';

var accessKey = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var accessSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../lib/eBay-node-client')('', true);

var feedRequest = function () {
    eBay.application.getOAuthApplicationToken({
        grant_type: 'client_credentials'
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

feedRequest();