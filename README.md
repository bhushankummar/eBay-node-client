# amazon-mws (Amazon Marketplace Web Service)
[![Build Status](https://travis-ci.org/bhushankumarl/amazon-mws.svg?branch=master)](https://travis-ci.org/bhushankumarl/amazon-mws)

This API supported Amazon Marketplace Web Service(MWS)'s standard REST-style API that accepts/returns JSON requests and Here is the [API reference] (http://docs.developer.amazonservices.com/en_IN/dev_guide/DG_IfNew.html)

You can testify API through [Amazon MWS Scratchpad](https://mws.amazonservices.in/scratchpad/index.html) without any installation.

You can find [examples of JavaScript and TypeScript here](https://github.com/bhushankumarl/amazon-mws/tree/master/examples). This will help you for faster implementation of Amazon Marketplace Web Service's(MWS).

##### It does supports EcmaScript 5, EcmaScript 6,  EcmaScript 8, TypeScript, async-await, Promises, Callback !
##### It does also supports for AWS Lambda like serverless cloud function call.
##### It supports pure JSON response.
##### All methods support Promise and Callback both.
##### Please Feel free to create Issue for any help !
##### All developers/contributors are requested to open Pull Request/Merge Request on development branch. Please make sure Test Cases be passed.

## Installation
```bash
npm install eBay-node-client --save
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

## Configuration Using JavaScript
```js
var amazonMws = require('amazon-mws')('AWS_ACCESS_KEY_ID','AWS_SECRET_ACCESS_KEY');
```

## Configuration Using TypeScript
```typescript
import * as MwsApi from 'eBay-node-client';

const amazonMws = new MwsApi();
amazonMws.setApiKey(accessKey, accessSecret);
```

## Pull Request
- Contributors can send their Pull Request to `development` branch.
- Kindly validate test cases & linting before opening new PR.

### Feeds

#### Submit Feed
```js
    var FeedContent = fs.readFileSync('./file.txt', 'UTF-8');

    amazonMws.feeds.submit({
        'Version': '2009-01-01',
        'Action': 'SubmitFeed',
        'SellerId': 'SELLER_ID',
        'MWSAuthToken': 'MWS_AUTH_TOKEN',
        'FeedType': '_POST_PRODUCT_DATA_',
        'FeedContent': FeedContent
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
```

```
Originally by [Bhushankumar Lilapara](https://github.com/bhushankumarl) (bhushankumar.lilapara@gmail.com).
