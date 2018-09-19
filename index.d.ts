// Type definitions for ebay-node-client

declare class BaseeBayNodeClient {

}

declare class Application extends BaseeBayNodeClient {

    getOAuthToken(params: any): Promise<any>;

}

declare class Browse extends BaseeBayNodeClient {

    getItem(itemId: string): Promise<any>;

    search(params: any): Promise<any>;

}

declare class Taxonomy extends BaseeBayNodeClient {

    getCategorySubtree(categoryTreeId: string, params: any): Promise<any>;

    getCategorySuggestions(categoryTreeId: string, params: any): Promise<any>;

    getItemAspectsForCategory(categoryTreeId: string, params: any): Promise<any>;

    getCategoryTree(categoryTreeId: string): Promise<any>;

    getDefaultCategoryTreeId(params: any): Promise<any>;

}

declare class Inventory extends BaseeBayNodeClient {

    createOrReplaceInventoryItem(sku: string, params: any): Promise<any>;

    getInventoryItem(sku: string): Promise<any>;

    getInventoryItems(params: any): Promise<any>;
    
}

declare class eBayNodeClient {

    application: Application;

    browse: Browse;

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