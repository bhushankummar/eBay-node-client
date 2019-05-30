'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({
    getItem: eBayMethod({
        authorization: 'User',
        method: 'POST',
        path: 'ws/api.dll',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        headers: { 
            "X-EBAY-API-SITEID": '0', 
            "X-EBAY-API-CALL-NAME": 'GetItem', 
            "X-EBAY-API-COMPATIBILITY-LEVEL" : '967',
            "X-EBAY-API-IAF-TOKEN": '',
            api: 'trading',
            variation: 'xml',
            call: 'GetItem'
        }
    })
});
