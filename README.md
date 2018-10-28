# eBay-node-client (eBay Node Client)
[![Version](https://img.shields.io/npm/v/ebay-node-client.svg)](https://www.npmjs.org/package/ebay-node-client)
[![Build Status](https://travis-ci.org/bhushankumarl/eBay-node-client.svg?branch=master)](https://travis-ci.org/bhushankumarl/eBay-node-client)

This API supported eBay's standard REST-style API that accepts/returns JSON requests and Here is the [API reference] (https://developer.ebay.com/api-docs/commerce/static/commerce-landing.html)

You can testify API through [eBay API Explorer](https://developer.ebay.com/my/api_test_tool) without any installation.

You can find [examples of JavaScript and TypeScript here](https://github.com/bhushankumarl/eBay-node-client/tree/master/examples). This will help you for faster implementation of eBay APIs.

##### It does supports EcmaScript 5, EcmaScript 6,  EcmaScript 8, TypeScript, async-await, Promises, Callback !
##### It does also supports for AWS Lambda like serverless cloud function call.
##### It supports pure JSON response.
##### All methods support Promise and Callback both.
##### Please Feel free to create Issue for any help !
##### All developers/contributors are requested to open Pull Request/Merge Request on development branch. Please make sure Test Cases be passed.

## Installation
```bash
npm install ebay-node-client --save
```

## Test Cases
```bash
npm run test.mocha
```

## Debugging
```bash
export DEBUG=eBay:*
```

## Usage
```bash
export EBAY_CLIENT_ID=KEY
export EBAY_CLIENT_SECRET=SECRET
```

## To Enable Sandbox Purpose
```bash
export EBAY_CLIENT_SANDBOX='true'
```

## Configuration Using JavaScript
```js
var eBay = require('ebay-node-client')('YOUR_KEY', 'YOUR_SECRET');
```

## Configuration Using TypeScript
```typescript
import * as eBay from 'ebay-node-client';

const eBay = new eBay();
eBay.setApiKey('YOUR_KEY', 'YOUR_SECRET');
```

## Pull Request
- Contributors can send their Pull Request to `development` branch.
- Kindly validate test cases & linting before opening new PR.

## Do you need an expert?
Are you finding a developer for your word class product? If yes, please contact here. [Submit your project request here.](https://goo.gl/forms/UofdG5GY5iHMoUWg2)
```
Originally by [Bhushankumar Lilapara](https://github.com/bhushankumarl) (bhushankumar.lilapara@gmail.com).
```

## Examples
### Application
#### Oauth Token
```
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        console.log('token.access_token ', token.access_token);
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
    }
    
```
### Browse
#### Get Item
```
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
        return;
    }

    var itemId = 'v1|110329773707|410089528845';
    try {
        var response = await eBay.browse.getItem(itemId);
        console.log('response', response);
    } catch (error) {
        console.log('error', error);
        return;
    }
    
```
#### Search
```
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
        return;
    }

    var data = {
        gtin: '010942122258',
        limit: '1'
    };
    try {
        var response = await eBay.browse.search(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
### Catalog
#### Create Change Request
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'changeRequestType': 'PRODUCT_CREATION',
        'reasonForChangeRequest': 'Request to add new product',
        'suggestedProduct': {
            'title': 'Apple iPhone',
            'description': 'This Space Grey iPhone comes with 256GB of storage, and can be used on any carrier network in the US.',
            'primaryCategoryId': '178114',
            'aspects': [
                {
                    'name': 'Model',
                    'values': ['iPhone 20']
                }
            ],
            'imageUrl': 'https://i.ebayimg.com/images/g/HFAAAOSw9W5bWgcQ/s-l1600.jpg?set_id=89040003C1C1',
            'brand': 'Apple',
            'upc': ['0745577656433'],
            'mpn': ['MD295LL/A']
        }
    };
    try {
        var response = await eBay.catalog.createChangeRequest(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Change Request
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var changeRequestId = '1010101';
    try {
        var response = await eBay.catalog.getChangeRequest(changeRequestId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Change Requests
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    try {
        var response = await eBay.catalog.getChangeRequests();
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Product
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var epId = '1300568638';
    try {
        var response = await eBay.catalog.getProduct(epId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Product Metadata
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'epid': '241827861',
        'primary_category_id': '9355',
        'other_applicable_category_ids': '15032,42428'
    };
    try {
        var response = await eBay.catalog.getProductMetadata(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Product Metadata For Categories
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'primary_category_id': '500',
        'other_applicable_category_ids': '34,36,63'
    };
    try {
        var response = await eBay.catalog.getProductMetadataForCategories(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Search
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        gtin: '010942122258'
    };
    try {
        var response = await eBay.catalog.search(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Search By Category
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        // Leaf Category Name
        q: 'Video Cables',
        // Leaf Category Id
        category_ids: '67859'
    };
    try {
        var response = await eBay.catalog.search(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
### Taxonomy
#### Get Category Subtree
```
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
        return;
    }

    var categoryTreeId = 203;
    var data = {
        category_id: '179623'
    };
    try {
        var response = await eBay.taxonomy.getCategorySubtree(categoryTreeId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Category Suggestions
```
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
        return;
    }

    var categoryTreeId = 203;
    var data = {
        'q': 'abc'
    };
    try {
        var response = await eBay.taxonomy.getCategorySuggestions(categoryTreeId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Category Tree
```
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
        return;
    }

    var categoryTreeId = 203;
    try {
        var response = await eBay.taxonomy.getCategoryTree(categoryTreeId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Default Category Tree Id
```
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
        return;
    }

    var data = {
        marketplace_id: 'EBAY_IN'
    };
    try {
        var response = await eBay.taxonomy.getDefaultCategoryTreeId(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Item Aspects For Category
```
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
        return;
    }

    var categoryTreeId = 203;
    var data = {
        category_id: '931'
    };
    try {
        var response = await eBay.taxonomy.getItemAspectsForCategory(categoryTreeId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
### Account
#### Create Or Replace Sales Tax
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var countryCode = 'US';
    var jurisdictionId = 'IN';
    var data = {
        'salesTaxPercentage': 7.0,
        'shippingAndHandlingTaxed': false
    };
    try {
        var response = await eBay.account.getSalesTax(countryCode, jurisdictionId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Delete Sales Tax
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var countryCode = 'US';
    var jurisdictionId = 'IN';
    try {
        var response = await eBay.account.deleteSalesTax(countryCode, jurisdictionId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Sales Tax
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var countryCode = 'US';
    var jurisdictionId = 'IN';
    try {
        var response = await eBay.account.getSalesTax(countryCode, jurisdictionId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Sales Taxes
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        country_code: 'US'
    };
    try {
        var response = await eBay.account.getSalesTaxes(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
### Inventory
#### Create Or Replace Inventory Item
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'availability': {
            'shipToLocationAvailability': {
                'quantity': 50
            }
        },
        'condition': 'NEW',
        'product': {
            'title': 'GoPro Hero4 Helmet Cam',
            'description': 'New GoPro Hero4 Helmet Cam. Unopened box.',
            'aspects': {
                'Brand': ['GoPro'],
                'Type': ['Helmet/Action'],
                'Storage Type': ['Removable'],
                'Recording Definition': ['High Definition'],
                'Media Format': ['Flash Drive (SSD)'],
                'Optical Zoom': ['10x']
            },
            'brand': 'GoPro',
            'mpn': 'CHDHX-401',
            'imageUrls': [
                'http://i.ebayimg.com/images/i/182196556219-0-1/s-l1000.jpg',
                'http://i.ebayimg.com/images/i/182196556219-0-1/s-l1001.jpg',
                'http://i.ebayimg.com/images/i/182196556219-0-1/s-l1002.jpg'
            ]
        }
    };
    var sku = '32984729384730';
    try {
        var response = await eBay.inventory.createOrReplaceInventoryItem(sku, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Bulk Inventory Item
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'requests': [
            {
                'sku': '13465446'
            },
            {
                'sku': '132165496'
            }
        ]
    };
    try {
        var response = await eBay.inventory.bulkGetInventoryItem(data);
        console.log('response ', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Inventory Item
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var sku = '32984729384729';
    try {
        var response = await eBay.inventory.getInventoryItem(sku);
        console.log('response ', response);
    } catch (error) {
        console.log('error ', error);
    }
    
```
#### Get Inventory Items
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        limit: '10'
    };
    try {
        var response = await eBay.inventory.getInventoryItems(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
### Location
#### Create Inventory Location
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'location': {
            'address': {
                'addressLine1': '2055 Hamilton Ave',
                'addressLine2': 'Building 3',
                'city': 'San Jose',
                'stateOrProvince': 'CA',
                'postalCode': '95125',
                'country': 'US'
            }
        },
        'locationInstructions': 'Open for drop-off only.',
        'name': 'Warehouse-1',
        'merchantLocationStatus': 'ENABLED',
        'locationTypes': [
            'WAREHOUSE'
        ],
        'operatingHours': [
            {
                'dayOfWeek': 'MONDAY',
                'intervals': [
                    {
                        'open': '09:00:00',
                        'close': '12:00:00'
                    },
                    {
                        'open': '13:00:00',
                        'close': '18:00:00'
                    }
                ]
            },
            {
                'dayOfWeek': 'TUESDAY',
                'intervals': [
                    {
                        'open': '09:00:00',
                        'close': '15:00:00'
                    }
                ]
            }
        ],
        'specialHours': [
            {
                'date': '2016-10-19T00:09:00.000Z',
                'intervals': [
                    {
                        'open': '09:00:00',
                        'close': '11:00:00'
                    }
                ]
            }
        ]
    };
    var customLocationIdentifier = 'LOC1014';
    try {
        var response = await eBay.location.createInventoryLocation(customLocationIdentifier, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Delete Inventory Location
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var customLocationIdentifier = 'LOC1014';
    try {
        var response = await eBay.location.deleteInventoryLocation(customLocationIdentifier);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Disable Inventory Location
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var customLocationIdentifier = 'LOC1014';
    try {
        var response = await eBay.location.disableInventoryLocation(customLocationIdentifier);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Enable Inventory Location
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var customLocationIdentifier = 'LOC1014';
    try {
        var response = await eBay.location.enableInventoryLocation(customLocationIdentifier);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Inventory Location
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var customLocationIdentifier = 'LOC1014';
    try {
        var response = await eBay.location.getInventoryLocation(customLocationIdentifier);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Inventory Locations
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        limit: 10,
        offset: 0
    };
    try {
        var response = await eBay.location.getInventoryLocations(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Update Inventory Location
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'name': 'My Store #1',
        'location': {
            'address': {
                'addressLine1': '2055 Hamilton Ave',
                'addressLine2': 'Building 3',
                'city': 'San Jose',
                'stateOrProvince': 'CA',
                'postalCode': '95008',
                'country': 'US'
            }
        },
        'merchantLocationStatus': 'ENABLED',
        'locationTypes': [
            'STORE'
        ],
        'merchantLocationKey': 'store-1'
    };
    var customLocationIdentifier = 'LOC1014';
    try {
        var response = await eBay.location.updateInventoryLocation(customLocationIdentifier, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
### Offer
#### Create Offer
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'sku': '32984729384730',
        'marketplaceId': 'EBAY_US',
        'format': 'FIXED_PRICE',
        'listingDescription': 'This is Test product',
        'availableQuantity': 1,
        'quantityLimitPerBuyer': 1,
        'pricingSummary': {
            'price': {
                'value': 0.99,
                'currency': 'USD'
            }
        },
        'listingPolicies': {
            'fulfillmentPolicyId': '78842674011',
            'paymentPolicyId': '61019561011',
            'returnPolicyId': '61019560011'
        },
        'categoryId': '178086',
        'merchantLocationKey': 'Store1',
        'tax': {
            'vatPercentage': 10.2,
            'applyTax': true,
            'thirdPartyTaxCategory': 'Electronics'
        }
    };
    try {
        var response = await eBay.offer.createOffer(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Delete Offer
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var offerId = '6360335010';
    try {
        var response = await eBay.offer.deleteOffer(offerId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Listing Fees
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        offers: [
            {
                'offerId': '6360337010'
            }
        ]
    };
    try {
        var response = await eBay.offer.getListingFees(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Offer
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var offerId = '6360335010';
    try {
        var response = await eBay.offer.getOffer(offerId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Get Offers By Sku
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        sku: '32984729384730'
    };
    try {
        var response = await eBay.offer.getOffers(data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Publish Offer
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var offerId = '6360337010';
    try {
        var response = await eBay.offer.publishOffer(offerId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Update Offer
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var data = {
        'availableQuantity': 60,
        'categoryId': '30120',
        'listingDescription': 'Test Test : Lumia phone with a stunning 5.7 inch Quad HD display and a powerful octa-core processor.',
        'listingPolicies': {
            'fulfillmentPolicyId': '78842674011',
            'paymentPolicyId': '61019561011',
            'returnPolicyId': '61019560011'
        },
        'pricingSummary': {
            'price': {
                'currency': 'USD',
                'value': '260.00'
            }
        },
        'quantityLimitPerBuyer': 3
    };
    var offerId = '6360335010';
    try {
        var response = await eBay.offer.updateOffer(offerId, data);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```
#### Withdraw Offer
```
    var userToken = utils.USER_TOKEN;
    eBay.setUserToken(userToken);
    var offerId = '6360335010';
    try {
        var response = await eBay.offer.withdrawOffer(offerId);
        console.log('response', response);
    } catch (error) {
        console.log('error ', error);
        return;
    }
    
```