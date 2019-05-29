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
    deleteInventoryItem: eBayMethod({
        authorization: 'User',
        method: 'DELETE',
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
    }),
    getInventoryItems: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/inventory/v1/inventory_item?offset={offset}&limit={limit}',
        urlParams: ['offset', 'limit'],
        required: ['offset', 'limit']
    }),
    bulkGetInventoryItem: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/bulk_get_inventory_item'
    })

});
