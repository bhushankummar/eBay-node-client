'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);

var utils = require('../../../javaScript/utils');

var catalogRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'primary_category_id': '500',
        'other_applicable_category_ids': '34,36,63'
    };
    try {
        var response = await eBay.catalog.getProductMetadataForCategories(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

catalogRequest();
