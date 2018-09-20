'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getSalesTaxes: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/sales_tax',
        required: ['countryCode']
    }),
    getSalesTax: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/sales_tax/{countryCode}/{jurisdictionId}',
        urlParams: ['countryCode', 'jurisdictionId'],
        required: ['countryCode', 'jurisdictionId']
    }),
    createOrReplaceSalesTax: eBayMethod({
        authorization: 'User',
        method: 'PUT',
        path: 'sell/account/v1/sales_tax/{countryCode}/{jurisdictionId}',
        urlParams: ['countryCode', 'jurisdictionId'],
        required: ['countryCode', 'jurisdictionId']
    }),
    deleteSalesTax: eBayMethod({
        authorization: 'User',
        method: 'DELETE',
        path: 'sell/account/v1/sales_tax/{countryCode}/{jurisdictionId}',
        urlParams: ['countryCode', 'jurisdictionId'],
        required: ['countryCode', 'jurisdictionId']
    })

});
