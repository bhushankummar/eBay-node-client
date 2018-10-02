'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../../javaScript/utils');

var offerRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);

    var data = {
        'availableQuantity': 60,
        'categoryId': '30120',
        'listingDescription': 'Test Test : Lumia phone with a stunning 5.7 inch Quad HD display and a powerful octa-core processor.',
        'listingPolicies': {
            'fulfillmentPolicyId': '78842674011',
            'paymentPolicyId': '61019561011',
            'returnPolicyId': '61019560011'
        },
        'pricingSummary': {
            'price': {
                'currency': 'USD',
                'value': '260.00'
            }
        },
        'quantityLimitPerBuyer': 3
    };

    var offerId = '6360335010';
    try {
        var response = await eBay.offer.updateOffer(offerId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

offerRequest();
