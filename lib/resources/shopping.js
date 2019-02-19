'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getCategoryInfo: eBayMethod({
        contentType: 'text/xml',
        api: 'shopping',
        call: 'GetCategoryInfo',
        variation: 'xml',
        method: 'POST',
        path: 'shopping'
    }),

    findProducts: eBayMethod({
        contentType: 'text/xml',
        api: 'shopping',
        call: 'FindProducts',
        variation: 'xml',
        method: 'POST',
        path: 'shopping'
    }),

    geteBayTime: eBayMethod({
        contentType: 'text/xml',
        api: 'shopping',
        call: 'GeteBayTime',
        variation: 'xml',
        method: 'POST',
        path: 'shopping'
    }),

    getItemStatus: eBayMethod({
        contentType: 'text/xml',
        api: 'shopping',
        call: 'GetItemStatus',
        variation: 'xml',
        method: 'POST',
        path: 'shopping'
    }),

    getMultipleItems: eBayMethod({
        contentType: 'text/xml',
        api: 'shopping',
        call: 'GetMultipleItems',
        variation: 'xml',
        method: 'POST',
        path: 'shopping'
    }),

    getShippingCosts: eBayMethod({
        contentType: 'text/xml',
        api: 'shopping',
        call: 'GetShippingCosts',
        variation: 'xml',
        method: 'POST',
        path: 'shopping'
    }),

    getSingleItem: eBayMethod({
        contentType: 'text/xml',
        api: 'shopping',
        call: 'GetSingleItem',
        variation: 'xml',
        method: 'POST',
        path: 'shopping'
    }),

    getUserProfile: eBayMethod({
        contentType: 'text/xml',
        api: 'shopping',
        call: 'GetUserProfile',
        variation: 'xml',
        method: 'POST',
        path: 'shopping'
    })

});
