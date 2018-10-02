# eBay-node-client (eBay Node Client)
[![Version](https://img.shields.io/npm/v/eBay-node-client.svg)](https://www.npmjs.org/package/eBay-node-client)
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

### Application

#### Get OAuth Token
```js
    try {
        var token = await eBay.application.getOAuthToken({
            grant_type: 'client_credentials',
            scope: 'https://api.ebay.com/oauth/api_scope'
        });
        eBay.setToken(token.access_token);
    } catch (error) {
        console.log('error ', error);
    }
```

```
Originally by [Bhushankumar Lilapara](https://github.com/bhushankumarl) (bhushankumar.lilapara@gmail.com).
