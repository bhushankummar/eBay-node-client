'use strict';

var eBayResource = require('../../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getPaymentPolicies: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/payment_policy'
    })

});
