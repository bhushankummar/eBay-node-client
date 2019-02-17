'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    findProducts: eBayMethod({
        contentType: 'text/xml',
        api: 'shopping',
        call: 'FindProducts',
        variation: 'xml',
        method: 'POST',
        path: 'shopping'
    })

});
