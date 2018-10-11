'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);

var utils = require('../../../javaScript/utils');

var catalogRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'changeRequestType': 'PRODUCT_CREATION',
        'reasonForChangeRequest': 'Request to add new product',
        'suggestedProduct': {
            'title': 'Apple iPhone',
            'description': 'This Space Grey iPhone comes with 256GB of storage, and can be used on any carrier network in the US.',
            'primaryCategoryId': '178114',
            'aspects': [
                {
                    'name': 'Model',
                    'values': ['iPhone 20']
                }
            ],
            'imageUrl': 'https://i.ebayimg.com/images/g/HFAAAOSw9W5bWgcQ/s-l1600.jpg?set_id=89040003C1C1',
            'brand': 'Apple',
            'upc': ['0745577656433'],
            'mpn': ['MD295LL/A']
        }
    };
    try {
        var response = await eBay.catalog.createChangeRequest(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

catalogRequest();
