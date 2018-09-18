'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    search: eBayMethod({
        method: 'GET',
        path: 'buy/browse/v1/item_summary/search'
    }),
    getItem: eBayMethod({
        method: 'GET',
        path: 'buy/browse/v1/item/{item_id}',
        urlParams: ['item_id'],
        required: ['item_id']
    })

});
