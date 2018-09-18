'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    category_tree: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/category_tree'
    }),

    getDefaultCategoryTreeId: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/get_default_category_tree_id'
    })

});
