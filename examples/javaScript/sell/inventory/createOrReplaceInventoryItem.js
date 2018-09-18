'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);

var browseRequest = async function () {
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
    }

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
    eBay.inventory.createOrReplaceInventoryItem('MySKU', data, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

browseRequest();
