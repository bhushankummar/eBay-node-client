'use strict';

var eBayResource = require('../../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getReturnPolicies: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/account/v1/return_policy'
    })

});
