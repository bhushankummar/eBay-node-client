'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getOAuthToken: eBayMethod({
        authorization: 'Basic',
        method: 'POST',
        path: 'identity/v1/oauth2/token'
    })

});
