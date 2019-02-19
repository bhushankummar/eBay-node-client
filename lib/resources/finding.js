'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    findCompletedItems: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'findCompletedItems',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    }),

    findItemsAdvanced: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'findItemsAdvanced',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    }),

    findItemsByCategory: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'findItemsByCategory',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    }),

    findItemsByKeywords: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'findItemsByKeywords',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    }),

    findItemsByProduct: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'findItemsByProduct',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    }),

    findItemsIneBayStores: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'findItemsIneBayStores',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    }),

    getHistograms: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'getHistograms',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    }),

    getSearchKeywordsRecommendation: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'getSearchKeywordsRecommendation',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    }),

    getVersion: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'getVersion',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    })

});
