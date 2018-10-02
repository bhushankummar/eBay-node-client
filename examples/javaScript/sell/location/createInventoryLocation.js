'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../../javaScript/utils');

var offerRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);

    var data = {
        'location': {
            'address': {
                'addressLine1': '2055 Hamilton Ave',
                'addressLine2': 'Building 3',
                'city': 'San Jose',
                'stateOrProvince': 'CA',
                'postalCode': '95125',
                'country': 'US'
            }
        },
        'locationInstructions': 'Open for drop-off only.',
        'name': 'Warehouse-1',
        'merchantLocationStatus': 'ENABLED',
        'locationTypes': [
            'WAREHOUSE'
        ],
        'operatingHours': [
            {
                'dayOfWeek': 'MONDAY',
                'intervals': [
                    {
                        'open': '09:00:00',
                        'close': '12:00:00'
                    },
                    {
                        'open': '13:00:00',
                        'close': '18:00:00'
                    }
                ]
            },
            {
                'dayOfWeek': 'TUESDAY',
                'intervals': [
                    {
                        'open': '09:00:00',
                        'close': '15:00:00'
                    }
                ]
            }
        ],
        'specialHours': [
            {
                'date': '2016-10-19T00:09:00.000Z',
                'intervals': [
                    {
                        'open': '09:00:00',
                        'close': '11:00:00'
                    }
                ]
            }
        ]
    };

    try {
        var response = await eBay.location.createInventoryLocation(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

offerRequest();
