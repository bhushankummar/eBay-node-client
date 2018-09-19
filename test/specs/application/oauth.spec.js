'use strict';
var config = require('../../intialize/config');
var clientId = config.clientId;
var clientSecret = config.clientSecret;

var chai = require('chai');
var expect = chai.expect;

var eBay = require('../../../lib/eBay-node-client')(clientId, clientSecret);

describe('Application', function () {

    before(function () {
        expect(clientId).to.be.a('string');
        expect(clientSecret).to.be.a('string');
    });

    it('It should get Application OAuth Token ', async function () {
        var options = {
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        };

        expect(options.grant_type).to.be.a('string');
        expect(options.scope).to.be.a('string');

        try {
            var response = await eBay.application.getOAuthToken(options);
            eBay.setToken(response.access_token);
            expect(response).to.be.a('object');
            expect(response).to.have.property('access_token').to.be.a('string');
            expect(response).to.have.property('expires_in').to.be.a('number');
            expect(response).to.have.property('token_type').to.be.a('string');
        } catch (error) {
            console.log('error ', error);
            expect(response).to.be.a(undefined);
        }

    });
});