'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getRedirectUrl: eBayMethod({
        method: 'OAUTH',
        action: 'GET_REDIRECT_URL',
        required: ['scope', 'redirectURI']
    }),

    getUserToken: eBayMethod({
        method: 'OAUTH',
        action: 'GET_USER_TOKEN'
    })

});
