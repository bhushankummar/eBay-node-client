'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../../javaScript/utils');

var inventoryRequest = function () {

    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);

    var data = {
        'availability': {
            'shipToLocationAvailability': {
                'quantity': 50
            }
        },
        'condition': 'NEW',
        'product': {
            'title': 'GoPro Hero4 Helmet Cam',
            'description': 'New GoPro Hero4 Helmet Cam. Unopened box.',
            'aspects': {
                'Brand': ['GoPro'],
                'Type': ['Helmet/Action'],
                'Storage Type': ['Removable'],
                'Recording Definition': ['High Definition'],
                'Media Format': ['Flash Drive (SSD)'],
                'Optical Zoom': ['10x']
            },
            'brand': 'GoPro',
            'mpn': 'CHDHX-401',
            'imageUrls': [
                'http://i.ebayimg.com/images/i/182196556219-0-1/s-l1000.jpg',
                'http://i.ebayimg.com/images/i/182196556219-0-1/s-l1001.jpg',
                'http://i.ebayimg.com/images/i/182196556219-0-1/s-l1002.jpg'
            ]
        }
    };

    var sku = '32984729384730';
    eBay.inventory.createOrReplaceInventoryItem(sku, data, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

inventoryRequest();
