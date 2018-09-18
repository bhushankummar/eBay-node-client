'use strict';

// var accessKey = process.env.AWS_ACCESS_KEY_ID || 'YOUR_KEY';
// var accessSecret = process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')('', true);

var feedRequest = function () {
    eBay.taxonomy.getDefaultCategoryTreeId({}, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

feedRequest();