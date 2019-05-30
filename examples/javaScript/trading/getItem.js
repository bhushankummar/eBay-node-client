'use strict';

var clientId = process.env.EBAY_CLIENT_ID || 'YOUR_KEY';
var clientSecret = process.env.EBAY_CLIENT_SECRET || 'YOUR_SECRET';

var eBay = require('../../../../lib/eBay-node-client')(clientId, clientSecret);
var utils = require('../../../javaScript/utils');

var getItem = async function () {
    try {
        var previousMonth = new Date();
        var nextMonth = new Date();
        previousMonth.setMonth(previousMonth.getMonth() - 1);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        var xmlData = '<?xml version="1.0" encoding="utf-8"?>' +
            '<GetSellerListRequest xmlns="urn:ebay:apis:eBLBaseComponents">' +
            '<ErrorLanguage>en_US</ErrorLanguage>' +
            '<WarningLevel>High</WarningLevel>' +
            '<GranularityLevel>Coarse</GranularityLevel>' +
            '<StartTimeFrom>' + previousMonth.toISOString() + '</StartTimeFrom>' +
            '<StartTimeTo>' + nextMonth.toISOString() + '</StartTimeTo>' +
            '<IncludeWatchCount>true</IncludeWatchCount>' +
            '<Pagination>' +
            '<EntriesPerPage>50</EntriesPerPage>' +
            '</Pagination>' +
            '</GetSellerListRequest>';
        var response = await this.eBay.trading.callMethod({ method: 'GetSellerList', xml: xmlData });
        console.log(JSON.stringify(response, null, 2));
        return response;
    } catch (error) {
        console.log('error ', error);
    }
};

getItem();
