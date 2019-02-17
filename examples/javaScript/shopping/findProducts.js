'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';
var fse = require('fs-extra');

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../javaScript/utils');

var inventoryRequest = async function () {
    var userToken = utils.USER_TOKEN;
    var appName = utils.APP_NAME;
    eBay.setUserToken(userToken);
    eBay.setAppName(appName);
    var content = fse.readFileSync('./sample.xml', 'UTF-8');
    // console.log('content', content);

    try {
        var response = await eBay.shopping.findProducts({content: content});
        console.log('response', response);
        console.log('response', JSON.stringify(response));
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

inventoryRequest();
