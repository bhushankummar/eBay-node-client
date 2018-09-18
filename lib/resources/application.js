'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getOAuthApplicationToken: eBayMethod({
        method: 'POST',
        path: 'identity/v1/oauth2/token'
    })

});
