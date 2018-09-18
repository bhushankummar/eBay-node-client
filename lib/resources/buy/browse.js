'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    search: eBayMethod({
        method: 'GET',
        path: 'buy/browse/v1/item_summary/search'
    })

});
