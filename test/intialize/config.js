'use strict';
require('dotenv').config()

module.exports = {
    clientId: process.env.EBAY_CLIENT_ID,
    clientSecret: process.env.EBAY_CLIENT_SECRET,
    USER_TOKEN: process.env.EBAY_USER_TOKEN,
};