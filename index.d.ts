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

declare class eBayNodeClient {

    account: Account;

    application: Application;

    browse: Browse;

    catalog: Catalog;

    location: Location;

    inventory: Inventory;

    offer: Offer;

    taxonomy: Taxonomy;

    constructor()

    constructor(clientId: string, clientSecret: string);

    constructor(clientId: string, clientSecret: string, isSandbox: boolean);

    setApiKey(clientId: string, clientSecret: string): void;

    setHost(host?: string, port?: string, protocol?: string): void;

    setToken(applicationToken: string): void;

    setUserToken(userToken: string): void;
}


declare namespace eBayNodeClient {

}
export = eBayNodeClient;