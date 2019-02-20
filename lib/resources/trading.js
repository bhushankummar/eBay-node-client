'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    addDispute: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddDispute',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addDisputeResponse: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddDisputeResponse',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addFixedPriceItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddFixedPriceItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addItemFromSellingManagerTemplate: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddItemFromSellingManagerTemplate',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addItems: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddItems',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addMemberMessageAAQToPartner: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddMemberMessageAAQToPartner',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addMemberMessageRTQ: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddMemberMessageRTQ',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addMemberMessagesAAQToBidder: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddMemberMessagesAAQToBidder',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addOrder: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddOrder',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addSecondChanceItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddSecondChanceItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addSellingManagerInventoryFolder: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddSellingManagerInventoryFolder',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addSellingManagerProduct: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddSellingManagerProduct',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addSellingManagerTemplate: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddSellingManagerTemplate',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addToItemDescription: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddToItemDescription',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addToWatchList: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'addToWatchList',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    addTransactionConfirmationItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddTransactionConfirmationItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    completeSale: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'CompleteSale',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    confirmIdentity: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ConfirmIdentity',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    deleteMyMessages: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'DeleteMyMessages',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    deleteSellingManagerInventoryFolder: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'DeleteSellingManagerInventoryFolder',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    deleteSellingManagerItemAutomationRule: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'DeleteSellingManagerItemAutomationRule',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    deleteSellingManagerProduct: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'DeleteSellingManagerProduct',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    deleteSellingManagerTemplate: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'DeleteSellingManagerTemplate',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    deleteSellingManagerTemplateAutomationRule: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'DeleteSellingManagerTemplateAutomationRule',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    disableUnpaidItemAssistance: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'DisableUnpaidItemAssistance',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    endFixedPriceItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'EndFixedPriceItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    endItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'EndItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    endItems: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'EndItems',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    extendSiteHostedPictures: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ExtendSiteHostedPictures',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    fetchToken: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'FetchToken',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getAccount: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetAccount',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getAdFormatLeads: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetAdFormatLeads',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getAllBidders: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetAllBidders',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getApiAccessRules: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetApiAccessRules',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getBestOffers: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetBestOffers',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getBidderList: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetBidderList',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getCategories: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetCategories',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getCategoryFeatures: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetCategoryFeatures',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getCategoryMappings: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetCategoryMappings',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getCategorySpecifics: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetCategorySpecifics',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getChallengeToken: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetChallengeToken',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getCharities: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetCharities',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getClientAlertsAuthToken: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetClientAlertsAuthToken',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getContextualKeywords: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetContextualKeywords',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getDescriptionTemplates: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetDescriptionTemplates',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getDispute: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetDispute',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    geteBayDetails: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GeteBayDetails',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    geteBayOfficialTime: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GeteBayOfficialTime',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getFeedback: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetFeedback',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getItemsAwaitingFeedback: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetItemsAwaitingFeedback',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getItemShipping: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetItemShipping',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getItemTransactions: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetItemTransactions',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getMemberMessages: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetMemberMessages',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getMessagePreferences: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetMessagePreferences',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getMyeBayBuying: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetMyeBayBuying',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getMyeBayReminders: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetMyeBayReminders',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getMyeBaySelling: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetMyeBaySelling',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getMyMessages: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetMyMessages',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getNotificationPreferences: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetNotificationPreferences',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getNotificationsUsage: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetNotificationsUsage',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getOrders: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetOrders',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getOrderTransactions: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetOrderTransactions',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getPromotionalSaleDetails: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetPromotionalSaleDetails',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellerDashboard: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellerDashboard',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellerEvents: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellerEvents',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellerList: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellerList',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellerTransactions: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellerTransactions',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellingManagerAlerts: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellingManagerAlerts',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellingManagerEmailLog: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellingManagerEmailLog',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellingManagerInventory: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellingManagerInventory',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellingManagerInventoryFolder: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellingManagerInventoryFolder',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellingManagerItemAutomationRule: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellingManagerItemAutomationRule',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellingManagerSaleRecord: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellingManagerSaleRecord',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellingManagerSoldListings: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellingManagerSoldListings',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellingManagerTemplateAutomationRule: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellingManagerTemplateAutomationRule',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSellingManagerTemplates: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSellingManagerTemplates',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSessionID: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSessionID',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getShippingDiscountProfiles: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetShippingDiscountProfiles',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getStore: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetStore',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getStoreCategoryUpdateStatus: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetStoreCategoryUpdateStatus',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getStoreCustomPage: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetStoreCustomPage',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getStoreOptions: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetStoreOptions',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getStorePreferences: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetStorePreferences',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getSuggestedCategories: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetSuggestedCategories',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getTaxTable: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetTaxTable',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getTokenStatus: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetTokenStatus',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getUser: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetUser',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getUserContactDetails: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetUserContactDetails',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getUserDisputes: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetUserDisputes',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getUserPreferences: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetUserPreferences',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getVeROReasonCodeDetails: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetVeROReasonCodeDetails',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    getVeROReportStatus: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'GetVeROReportStatus',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    leaveFeedback: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'LeaveFeedback',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    moveSellingManagerInventoryFolder: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'MoveSellingManagerInventoryFolder',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    placeOffer: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'PlaceOffer',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    relistFixedPriceItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'RelistFixedPriceItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    relistItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'RelistItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    removeFromWatchList: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'RemoveFromWatchList',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    respondToBestOffer: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'RespondToBestOffer',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    respondToFeedback: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'RespondToFeedback',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    reviseCheckoutStatus: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ReviseCheckoutStatus',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    reviseFixedPriceItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ReviseFixedPriceItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    reviseItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ReviseItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    reviseInventoryStatus: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ReviseInventoryStatus',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    reviseMyMessages: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ReviseMyMessages',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    reviseMyMessagesFolders: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ReviseMyMessagesFolders',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    reviseSellingManagerInventoryFolder: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ReviseSellingManagerInventoryFolder',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    reviseSellingManagerProduct: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ReviseSellingManagerProduct',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    reviseSellingManagerTemplate: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ReviseSellingManagerTemplate',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    revokeToken: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'RevokeToken',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    saveItemToSellingManagerTemplate: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SaveItemToSellingManagerTemplate',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    sellerReverseDispute: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SellerReverseDispute',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    sendInvoice: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SendInvoice',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setMessagePreferences: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetMessagePreferences',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setNotificationPreferences: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetNotificationPreferences',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setPromotionalSale: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetPromotionalSale',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setPromotionalSaleListings: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetPromotionalSaleListings',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setSellingManagerFeedbackOptions: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetSellingManagerFeedbackOptions',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setSellingManagerItemAutomationRule: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetSellingManagerItemAutomationRule',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setSellingManagerTemplateAutomationRule: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetSellingManagerTemplateAutomationRule',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setShippingDiscountProfiles: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetShippingDiscountProfiles',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setStore: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetStore',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setStoreCategories: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetStoreCategories',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setStoreCustomPage: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetStoreCustomPage',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setStorePreferences: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetStorePreferences',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setTaxTable: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetTaxTable',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setUserNotes: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetUserNotes',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    setUserPreferences: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'SetUserPreferences',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    uploadSiteHostedPictures: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'UploadSiteHostedPictures',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    validateChallengeInput: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ValidateChallengeInput',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    validateTestUserRegistration: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'ValidateTestUserRegistration',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    verifyAddFixedPriceItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'VerifyAddFixedPriceItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    verifyAddItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'VerifyAddItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    verifyAddSecondChanceItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'VerifyAddSecondChanceItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    verifyRelistItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'VerifyRelistItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    }),

    veROReportItems: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'VeROReportItems',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    })

});
