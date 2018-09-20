// Type definitions for ebay-node-client

declare class BaseClient {

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

}

declare class eBayNodeClient {

    application: Application;

    browse: Browse;

    catalog: Catalog;

    taxonomy: Taxonomy;

    inventory: Inventory;

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