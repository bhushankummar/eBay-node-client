'use strict';

var eBayResource = require('../../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getFulfillmentPolicies: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/fulfillment_policy'
    })

});
