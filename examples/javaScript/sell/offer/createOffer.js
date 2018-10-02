'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../../javaScript/utils');

var offerRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);

    var data = {
        'sku': '32984729384730',
        'marketplaceId': 'EBAY_US',
        'format': 'FIXED_PRICE',
        'listingDescription': 'This is Test product',
        'availableQuantity': 1,
        'quantityLimitPerBuyer': 1,
        'pricingSummary': {
            'price': {
                'value': 0.99,
                'currency': 'USD'
            }
        },
        'listingPolicies': {
            'fulfillmentPolicyId': '78842674011',
            'paymentPolicyId': '61019561011',
            'returnPolicyId': '61019560011'
        },
        'categoryId': '178086',
        'merchantLocationKey': 'Store1',
        'tax': {
            'vatPercentage': 10.2,
            'applyTax': true,
            'thirdPartyTaxCategory': 'Electronics'
        }
    };

    try {
        var response = await eBay.offer.createOffer(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

offerRequest();
