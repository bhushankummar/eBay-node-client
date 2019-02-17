'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';
var fse = require('fs-extra');

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../javaScript/utils');

var inventoryRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var content = fse.readFileSync('./sample.txt', 'UTF-8');
    // console.log('content', content);

    try {
        var response = await eBay.trading.addItem({content: content});
        console.log('response', response);
        console.log('response', JSON.stringify(response));
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

inventoryRequest();
