'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';
var js2xmlparser = require('js2xmlparser');

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../utils');

var tradingRequest = async function () {
    var devId = utils.DEV_ID;
    var ruName = utils.RU_NAME;

    eBay.setDevName(devId);

    const obj = {
        '@': {
            'xmlns': 'urn:ebay:apis:eBLBaseComponents'
        },
        'ErrorLanguage': 'en_US',
        'WarningLevel': 'High',
        'RuName': ruName
    };

    var content = js2xmlparser.parse('GetSessionIDRequest', obj, {declaration: {encoding: 'UTF-8'}});

    try {
        var response = await eBay.trading.getSessionID({content: content});
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

tradingRequest();
