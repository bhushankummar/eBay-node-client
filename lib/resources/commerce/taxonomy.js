'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getDefaultCategoryTreeId: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/get_default_category_tree_id/?marketplace_id={marketplace_id}',
        urlParams: [ 'marketplace_id' ],
        required: [ 'marketplace_id' ]
    }),
    category_tree: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/category_tree/{category_tree_id}',
        urlParams: [ 'category_tree_id' ],
        required: [ 'category_tree_id' ]
    }),

});
