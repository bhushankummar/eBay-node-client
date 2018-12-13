'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getRedirectUrl: eBayMethod({
        method: 'OAUTH',
        action: 'GET_REDIRECT_URL',
        required: ['scope', 'redirectURI']
    }),

    retrieveUserToken: eBayMethod({
        method: 'OAUTH',
        action: 'RETRIEVE_USER_TOKEN',
        required: ['code', 'redirectURI']
    }),

    refreshUserToken: eBayMethod({
        method: 'OAUTH',
        action: 'REFRESH_USER_TOKEN',
        required: ['code', 'redirectURI']
    })
});
