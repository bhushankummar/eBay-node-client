'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../../utils');

var accountRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        marketplace_id: 'EBAY_US'
    };
    try {
        var response = await eBay.returnPolicy.getReturnPolicies(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

accountRequest();
