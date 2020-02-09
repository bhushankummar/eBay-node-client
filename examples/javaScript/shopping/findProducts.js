'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';
var fse = require('fs-extra');

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);

var shoppingRequest = async function () {
    try {
        var content = fse.readFileSync('./sample.xml', 'UTF-8');
        // console.log('content', content);

        var response = await eBay.shopping.findProducts({content: content});
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

shoppingRequest();
