'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);

var inventoryRequest = async function () {

    var userToken = 'USER_TOKEN';
    eBay.setUserToken(userToken);

    var data = {
        limit: '10'
    };
    eBay.inventory.getInventoryItems(data, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

inventoryRequest();
