'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../../javaScript/utils');

var offerRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);

    var data = {
        'name': 'My Store #1',
        'location': {
            'address': {
                'addressLine1': '2055 Hamilton Ave',
                'addressLine2': 'Building 3',
                'city': 'San Jose',
                'stateOrProvince': 'CA',
                'postalCode': '95008',
                'country': 'US'
            }
        },
        'merchantLocationStatus': 'ENABLED',
        'locationTypes': [
            'STORE'
        ],
        'merchantLocationKey': 'store-1'
    };

    var customLocationIdentifier = 'LOC1014';
    try {
        var response = await eBay.location.updateInventoryLocation(customLocationIdentifier, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

offerRequest();
