'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../utils');

var inventoryRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = { /* BulkPriceQuantity */
        'requests': [
            { /* PriceQuantity */
                'offers': [
                    { /* OfferPriceQuantity */
                        'availableQuantity': 'integer',
                        'offerId': 'string',
                        'price': { /* Amount */
                            'currency': 'string',
                            'value': 'string'
                        }
                    }
                ],
                'shipToLocationAvailability': {
                    /* ShipToLocationAvailability */
                    'quantity': 'integer'
                },
                'sku': 'string'
            }
        ]
    }
    try {
        var response = await eBay.inventory.bulkUpdatePriceQuantity(sku, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

inventoryRequest();
