'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    createOffer: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/offer'
    }),
    updateOffer: eBayMethod({
        authorization: 'User',
        method: 'PUT',
        path: 'sell/inventory/v1/offer/{offerId}',
        urlParams: ['offerId'],
        required: ['offerId']
    }),
    getOffer: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/inventory/v1/offer/{offerId}',
        urlParams: ['offerId'],
        required: ['offerId']
    }),
    getOffers: eBayMethod({
        authorization: 'User',
        method: 'GET',
        path: 'sell/inventory/v1/offer'
    }),
    publishOffer: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/offer/{offerId}/publish',
        urlParams: ['offerId'],
        required: ['offerId']
    }),
    deleteOffer: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'DELETE',
        path: 'sell/inventory/v1/offer/{offerId}',
        urlParams: ['offerId'],
        required: ['offerId']
    }),
    getListingFees: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/offer/get_listing_fees'
    }),
    withdrawOffer: eBayMethod({
        authorization: 'User',
        contentType: 'application/json',
        method: 'POST',
        path: 'sell/inventory/v1/offer/{offerId}/withdraw',
        urlParams: ['offerId'],
        required: ['offerId']
    })
});
