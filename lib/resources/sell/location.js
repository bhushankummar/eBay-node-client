'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    createInventoryLocation: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/location/{merchantLocationKey}',
        urlParams: ['merchantLocationKey'],
        required: ['merchantLocationKey']
    }),
    updateInventoryLocation: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/location/{merchantLocationKey}/update_location_details',
        urlParams: ['merchantLocationKey'],
        required: ['merchantLocationKey']
    }),
    enableInventoryLocation: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/location/{merchantLocationKey}/enable',
        urlParams: ['merchantLocationKey'],
        required: ['merchantLocationKey']
    }),
    disableInventoryLocation: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/location/{merchantLocationKey}/disable',
        urlParams: ['merchantLocationKey'],
        required: ['merchantLocationKey']
    }),
    getInventoryLocation: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/inventory/v1/location/{merchantLocationKey}',
        urlParams: ['merchantLocationKey'],
        required: ['merchantLocationKey']
    }),
    deleteInventoryLocation: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/inventory/v1/location/{merchantLocationKey}',
        urlParams: ['merchantLocationKey'],
        required: ['merchantLocationKey']
    }),
    getInventoryLocations: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/inventory/v1/location'
    })
});
