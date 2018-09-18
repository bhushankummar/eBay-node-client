'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    createOrReplaceInventoryItem: eBayMethod({
        authorization: 'User',
        method: 'PUT',
        path: 'sell/inventory/v1/inventory_item/{sku}',
        urlParams: ['sku'],
        required: ['sku']
    }),
    getInventoryItem: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/inventory/v1/inventory_item/{sku}',
        urlParams: ['sku'],
        required: ['sku']
    })

});
