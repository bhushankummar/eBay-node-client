'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    createOrReplaceInventoryItem: eBayMethod({
        method: 'PUT',
        path: 'sell/inventory/v1/inventory_item/{SKU}',
        urlParams: ['SKU'],
        required: ['SKU']
    })

});
