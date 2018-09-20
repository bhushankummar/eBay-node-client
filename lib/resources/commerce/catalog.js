'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    search: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'commerce/catalog/v1_beta/product_summary/search'
    }),

    getProduct: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'commerce/catalog/v1_beta/product/{epid}',
        urlParams: ['epid'],
        required: ['epid']
    }),

    getProductMetadata: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'commerce/catalog/v1_beta/get_product_metadata'
    }),

    getProductMetadataForCategories: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'commerce/catalog/v1_beta/get_product_metadata_for_categories'
    }),

    getChangeRequest: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'commerce/catalog/v1_beta/change_request/{changeRequestId}',
        urlParams: ['changeRequestId'],
        required: ['changeRequestId']
    }),

    getChangeRequests: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'commerce/catalog/v1_beta/change_request'
    }),

    createChangeRequest: eBayMethod({
        authorization: 'User',
        method: 'POST',
        path: 'commerce/catalog/v1_beta/change_request'
    })

});
