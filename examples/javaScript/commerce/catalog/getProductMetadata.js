'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);

var utils = require('../../../javaScript/utils');

var catalogRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'epid': '241827861',
        'primary_category_id': '9355',
        'other_applicable_category_ids': '15032,42428'
    };
    try {
        var response = await eBay.catalog.getProductMetadata(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

catalogRequest();
