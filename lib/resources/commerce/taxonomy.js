'use strict';

var eBayResource = require('../../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    getDefaultCategoryTreeId: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/get_default_category_tree_id',
        required: ['marketplace_id']
    }),
    getCategoryTree: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/category_tree/{category_tree_id}',
        urlParams: ['category_tree_id'],
        required: ['category_tree_id']
    }),
    getCategorySubtree: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/category_tree/{category_tree_id}/get_category_subtree',
        urlParams: ['category_tree_id'],
        required: ['category_tree_id']
    }),
    getCategorySuggestions: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/category_tree/{category_tree_id}/get_category_suggestions',
        urlParams: ['category_tree_id'],
        required: ['category_tree_id']
    }),
    getItemAspectsForCategory: eBayMethod({
        method: 'GET',
        path: 'commerce/taxonomy/v1_beta/category_tree/{category_tree_id}/get_item_aspects_for_category',
        urlParams: ['category_tree_id'],
        required: ['category_tree_id']
    })

});
