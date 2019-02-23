// Type definitions for ebay-node-client

declare class BaseClient {

}

declare class Account extends BaseClient {

    getSalesTaxes(params: any): Promise<any>;

    getSalesTax(countryCode: string, jurisdictionId: string): Promise<any>;

    deleteSalesTax(countryCode: string, jurisdictionId: string): Promise<any>;

    createOrReplaceSalesTax(countryCode: string, jurisdictionId: string, params: any): Promise<any>;

}

declare class Application extends BaseClient {

    getOAuthToken(params: any): Promise<any>;

}

declare class Browse extends BaseClient {

    search(params: any): Promise<any>;

    getItem(itemId: string): Promise<any>;

}

declare class Catalog extends BaseClient {

    search(params: any): Promise<any>;

    getProduct(epId: string): Promise<any>;

    getProductMetadata(params: any): Promise<any>;

    getProductMetadataForCategories(params: any): Promise<any>;

    getChangeRequest(changeRequestId: string): Promise<any>;

    getChangeRequests(): Promise<any>;

    createChangeRequest(params: any): Promise<any>;
}

declare class Taxonomy extends BaseClient {

    getCategorySubtree(categoryTreeId: string, params: any): Promise<any>;

    getCategorySuggestions(categoryTreeId: string, params: any): Promise<any>;

    getItemAspectsForCategory(categoryTreeId: string, params: any): Promise<any>;

    getCategoryTree(categoryTreeId: string): Promise<any>;

    getDefaultCategoryTreeId(params: any): Promise<any>;
}

declare class Inventory extends BaseClient {

    createOrReplaceInventoryItem(sku: string, params: any): Promise<any>;

    deleteInventoryItem(sku: string): Promise<any>;

    getInventoryItem(sku: string): Promise<any>;

    getInventoryItems(params: any): Promise<any>;

    getBulkInventoryItem(params: any): Promise<any>;
}

declare class Location extends BaseClient {

    createOrReplaceInventoryItem(merchantLocationKey: string): Promise<any>;

    deleteInventoryLocation(merchantLocationKey: string): Promise<any>;

    disableInventoryLocation(merchantLocationKey: string): Promise<any>;

    enableInventoryLocation(merchantLocationKey: string): Promise<any>;

    getInventoryLocation(merchantLocationKey: string): Promise<any>;

    updateInventoryLocation(merchantLocationKey: string, params: any): Promise<any>;

    getInventoryLocations(params: any): Promise<any>;
}

declare class Offer extends BaseClient {

    createOffer(params: any): Promise<any>;

    deleteOffer(offerId: string): Promise<any>;

    getOffer(offerId: string): Promise<any>;

    publishOffer(offerId: string): Promise<any>;

    getOffers(params: any): Promise<any>;

    getOffers(params: any): Promise<any>;

    getListingFees(params: any): Promise<any>;

    withdrawOffer(offerId: string): Promise<any>;
}

declare class User extends BaseClient {

    getRedirectUrl(params: any): Promise<any>;

    retrieveUserToken(params: any): Promise<any>;

    refreshUserToken(params: any): Promise<any>;
}

declare class Trading extends BaseClient {

    addDispute(params: any): Promise<any>;

    addDisputeResponse(params: any): Promise<any>;

    addFixedPriceItem(params: any): Promise<any>;

    addItem(params: any): Promise<any>;

    addItemFromSellingManagerTemplate(params: any): Promise<any>;

    addItems(params: any): Promise<any>;

    addMemberMessageAAQToPartner(params: any): Promise<any>;

    addMemberMessageRTQ(params: any): Promise<any>;

    addMemberMessagesAAQToBidder(params: any): Promise<any>;

    addOrder(params: any): Promise<any>;

    addSecondChanceItem(params: any): Promise<any>;

    addSellingManagerInventoryFolder(params: any): Promise<any>;

    addSellingManagerProduct(params: any): Promise<any>;

    addSellingManagerTemplate(params: any): Promise<any>;

    addToItemDescription(params: any): Promise<any>;

    addToWatchList(params: any): Promise<any>;

    addTransactionConfirmationItem(params: any): Promise<any>;

    completeSale(params: any): Promise<any>;

    confirmIdentity(params: any): Promise<any>;

    deleteMyMessages(params: any): Promise<any>;

    deleteSellingManagerInventoryFolder(params: any): Promise<any>;

    deleteSellingManagerItemAutomationRule(params: any): Promise<any>;

    deleteSellingManagerProduct(params: any): Promise<any>;

    deleteSellingManagerTemplate(params: any): Promise<any>;

    deleteSellingManagerTemplateAutomationRule(params: any): Promise<any>;

    disableUnpaidItemAssistance(params: any): Promise<any>;

    endFixedPriceItem(params: any): Promise<any>;

    endItem(params: any): Promise<any>;

    extendSiteHostedPictures(params: any): Promise<any>;

    fetchToken(params: any): Promise<any>;

    getAccount(params: any): Promise<any>;

    getAdFormatLeads(params: any): Promise<any>;

    getAllBidders(params: any): Promise<any>;

    getApiAccessRules(params: any): Promise<any>;

    getBestOffers(params: any): Promise<any>;

    getBidderList(params: any): Promise<any>;

    getCategories(params: any): Promise<any>;

    getCategoryFeatures(params: any): Promise<any>;

    getCategoryMappings(params: any): Promise<any>;

    getCategorySpecifics(params: any): Promise<any>;

    getChallengeToken(params: any): Promise<any>;

    getCharities(params: any): Promise<any>;

    getClientAlertsAuthToken(params: any): Promise<any>;

    getContextualKeywords(params: any): Promise<any>;

    getDescriptionTemplates(params: any): Promise<any>;

    getDispute(params: any): Promise<any>;

    geteBayDetails(params: any): Promise<any>;

    geteBayOfficialTime(params: any): Promise<any>;

    getFeedback(params: any): Promise<any>;

    getItem(params: any): Promise<any>;

    getItemsAwaitingFeedback(params: any): Promise<any>;

    getItemShipping(params: any): Promise<any>;

    getItemTransactions(params: any): Promise<any>;

    getMemberMessages(params: any): Promise<any>;

    getMessagePreferences(params: any): Promise<any>;

    getMyeBayBuying(params: any): Promise<any>;

    getMyeBayReminders(params: any): Promise<any>;

    getMyeBaySelling(params: any): Promise<any>;

    getMyMessages(params: any): Promise<any>;

    getNotificationPreferences(params: any): Promise<any>;

    getNotificationsUsage(params: any): Promise<any>;

    getOrders(params: any): Promise<any>;

    getOrderTransactions(params: any): Promise<any>;

    getPromotionalSaleDetails(params: any): Promise<any>;

    getSellerDashboard(params: any): Promise<any>;

    getSellerEvents(params: any): Promise<any>;

    getSellerList(params: any): Promise<any>;

    getSellerTransactions(params: any): Promise<any>;

    getSellingManagerAlerts(params: any): Promise<any>;

    getSellingManagerEmailLog(params: any): Promise<any>;

    getSellingManagerInventory(params: any): Promise<any>;

    getSellingManagerInventoryFolder(params: any): Promise<any>;

    getSellingManagerItemAutomationRule(params: any): Promise<any>;

    getSellingManagerSaleRecord(params: any): Promise<any>;

    getSellingManagerSoldListings(params: any): Promise<any>;

    getSellingManagerTemplateAutomationRule(params: any): Promise<any>;

    getSellingManagerTemplates(params: any): Promise<any>;

    getSessionID(params: any): Promise<any>;

    getShippingDiscountProfiles(params: any): Promise<any>;

    getStore(params: any): Promise<any>;

    getStoreCategoryUpdateStatus(params: any): Promise<any>;

    getStoreCustomPage(params: any): Promise<any>;

    getStoreOptions(params: any): Promise<any>;

    getStorePreferences(params: any): Promise<any>;

    getSuggestedCategories(params: any): Promise<any>;

    getTaxTable(params: any): Promise<any>;

    getTokenStatus(params: any): Promise<any>;

    getUser(params: any): Promise<any>;

    getUserContactDetails(params: any): Promise<any>;

    getCategoryMappings(params: any): Promise<any>;

    getUserDisputes(params: any): Promise<any>;

    getUserPreferences(params: any): Promise<any>;

    getVeROReasonCodeDetails(params: any): Promise<any>;

    getVeROReportStatus(params: any): Promise<any>;

    leaveFeedback(params: any): Promise<any>;

    moveSellingManagerInventoryFolder(params: any): Promise<any>;

    placeOffer(params: any): Promise<any>;

    relistFixedPriceItem(params: any): Promise<any>;

    relistItem(params: any): Promise<any>;

    removeFromWatchList(params: any): Promise<any>;

    respondToBestOffer(params: any): Promise<any>;

    respondToFeedback(params: any): Promise<any>;

    reviseCheckoutStatus(params: any): Promise<any>;

    reviseFixedPriceItem(params: any): Promise<any>;

    reviseItem(params: any): Promise<any>;

    reviseInventoryStatus(params: any): Promise<any>;

    reviseMyMessages(params: any): Promise<any>;

    reviseMyMessagesFolders(params: any): Promise<any>;

    reviseSellingManagerInventoryFolder(params: any): Promise<any>;

    reviseSellingManagerProduct(params: any): Promise<any>;

    reviseSellingManagerTemplate(params: any): Promise<any>;

    revokeToken(params: any): Promise<any>;

    saveItemToSellingManagerTemplate(params: any): Promise<any>;

    sellerReverseDispute(params: any): Promise<any>;

    sendInvoice(params: any): Promise<any>;

    setMessagePreferences(params: any): Promise<any>;

    setNotificationPreferences(params: any): Promise<any>;

    setPromotionalSale(params: any): Promise<any>;

    setPromotionalSaleListings(params: any): Promise<any>;

    setSellingManagerFeedbackOptions(params: any): Promise<any>;

    setSellingManagerItemAutomationRule(params: any): Promise<any>;

    setSellingManagerTemplateAutomationRule(params: any): Promise<any>;

    setShippingDiscountProfiles(params: any): Promise<any>;

    setStore(params: any): Promise<any>;

    setStoreCategories(params: any): Promise<any>;

    setStoreCustomPage(params: any): Promise<any>;

    setStorePreferences(params: any): Promise<any>;

    setTaxTable(params: any): Promise<any>;

    setUserNotes(params: any): Promise<any>;

    setUserPreferences(params: any): Promise<any>;

    uploadSiteHostedPictures(params: any): Promise<any>;

    validateChallengeInput(params: any): Promise<any>;

    validateTestUserRegistration(params: any): Promise<any>;

    verifyAddFixedPriceItem(params: any): Promise<any>;

    verifyAddItem(params: any): Promise<any>;

    verifyAddSecondChanceItem(params: any): Promise<any>;

    verifyRelistItem(params: any): Promise<any>;

    veROReportItems(params: any): Promise<any>;

}

declare class Finding extends BaseClient {

    findCompletedItems(params: any): Promise<any>;

    findItemsAdvanced(params: any): Promise<any>;

    findItemsByCategory(params: any): Promise<any>;

    findItemsByKeywords(params: any): Promise<any>;

    findItemsByProduct(params: any): Promise<any>;

    findItemsIneBayStores(params: any): Promise<any>;

    getHistograms(params: any): Promise<any>;

    getSearchKeywordsRecommendation(params: any): Promise<any>;

    getVersion(params: any): Promise<any>;

}

declare class Shopping extends BaseClient {

    getCategoryInfo(params: any): Promise<any>;

    findProducts(params: any): Promise<any>;

    geteBayTime(params: any): Promise<any>;

    getItemStatus(params: any): Promise<any>;

    getMultipleItems(params: any): Promise<any>;

    getShippingCosts(params: any): Promise<any>;

    getSingleItem(params: any): Promise<any>;

    getUserProfile(params: any): Promise<any>;

}

declare class eBayNodeClient {

    account: Account;

    application: Application;

    browse: Browse;

    catalog: Catalog;

    location: Location;

    inventory: Inventory;

    offer: Offer;

    taxonomy: Taxonomy;

    user: User;

    trading: Trading;

    finding: Finding;

    shopping: Shopping;

    constructor()

    constructor(clientId: string, clientSecret: string);

    constructor(clientId: string, clientSecret: string, isSandbox: boolean);

    setApiKey(clientId: string, clientSecret: string): void;

    setHost(host?: string, port?: string, protocol?: string): void;

    setPort(port?: string): void;

    setProtocol(protocol?: string): void;

    setToken(applicationToken: string): void;

    setUserToken(userToken: string): void;

    setAppName(appName: string): void;

    setDevName(devName: string): void;

    setCertName(certName: string): void;
}


declare namespace eBayNodeClient {

}
export = eBayNodeClient;