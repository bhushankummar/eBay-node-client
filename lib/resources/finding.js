'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    findItemsByProduct: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'finding',
        call: 'findItemsByProduct',
        variation: 'xml',
        method: 'POST',
        path: 'services/search/FindingService/v1'
    })

});
