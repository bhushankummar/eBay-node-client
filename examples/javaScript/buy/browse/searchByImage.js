'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../../javaScript/utils');

var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode (file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

var browseRequest = async function () {
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var base64Content = base64_encode('sample-image.jpg');
    // console.log('base64Content ', base64Content);
    var data = {
        image: base64Content
    };
    try {
        var response = await eBay.browse.searchByImage(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
};

browseRequest();
