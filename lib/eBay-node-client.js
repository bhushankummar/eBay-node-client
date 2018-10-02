'use strict';

// var debug = require('debug')('eBay:eBay-node-client');
eBay.DEFAULT_HOST = 'api.ebay.com';
eBay.DEFAULT_SANDBOX_HOST = 'api.sandbox.ebay.com';
eBay.DEFAULT_PORT = '443';
eBay.DEFAULT_BASE_PATH = '/';
eBay.DEFAULT_RESPONSE_FORMAT = '.json';
eBay.DEFAULT_API_VERSION = null;

// Use node's default timeout:
eBay.DEFAULT_TIMEOUT = require('http').createServer().timeout;

eBay.PACKAGE_VERSION = require('../package.json').version;

eBay.USER_AGENT = {
    bindings_version: eBay.PACKAGE_VERSION,
    lang: 'node',
    lang_version: process.version,
    platform: process.platform,
    publisher: 'eBay-node-client',
    uname: null
};

eBay.USER_AGENT_SERIALIZED = null;

var exec = require('child_process').exec;

var resources = {
    account: require('./resources/sell/account'),
    application: require('./resources/application'),
    browse: require('./resources/buy/browse'),
    catalog: require('./resources/commerce/catalog'),
    location: require('./resources/sell/location'),
    inventory: require('./resources/sell/inventory'),
    offer: require('./resources/sell/offer'),
    taxonomy: require('./resources/commerce/taxonomy')
};

eBay.eBayResource = require('./eBayResource');
eBay.resources = resources;


function eBay(clientId, clientSecret, isSandbox) {
    if (!(this instanceof eBay)) {
        return new eBay(clientId, clientSecret, isSandbox);
    }

    this._api = {
        auth: null,
        host: eBay.DEFAULT_HOST,
        port: eBay.DEFAULT_PORT,
        basePath: eBay.DEFAULT_BASE_PATH,
        version: eBay.DEFAULT_API_VERSION,
        timeout: eBay.DEFAULT_TIMEOUT,
        agent: null,
        dev: false
    };

    if (process.env.EBAY_CLIENT_SANDBOX === 'true') {
        this._api.host = eBay.DEFAULT_SANDBOX_HOST;
    }
    if (isSandbox === true) {
        this._api.host = eBay.DEFAULT_SANDBOX_HOST;
    }
    this._prepResources();
    this.setApiKey(clientId, clientSecret);
    this.setResponseFormat(eBay.DEFAULT_RESPONSE_FORMAT);
}

eBay.prototype = {

    setHost: function (host, port, protocol) {
        this._setApiField('host', host);
        if (port) {
            this.setPort(port);
        }
        if (protocol) {
            this.setProtocol(protocol);
        }
    },

    setProtocol: function (protocol) {
        this._setApiField('protocol', protocol.toLowerCase());
    },

    setPort: function (port) {
        this._setApiField('port', port);
    },

    setResponseFormat: function (format) {
        this._setApiField('format', format);
    },

    setApiKey: function (accessKey, accessSecret) {
        if (accessKey) {
            this._setApiField('key', accessKey);
        }
        if (accessSecret) {
            this._setApiField('secret', accessSecret);
        }
    },

    setToken: function (token) {
        if (token) {
            this._setApiField('token', token);
        }
    },

    setUserToken: function (token) {
        if (token) {
            this._setApiField('userToken', token);
        }
    },

    setTimeout: function (timeout) {
        this._setApiField('timeout', timeout === null ? eBay.DEFAULT_TIMEOUT : timeout);
    },

    setHttpAgent: function (agent) {
        this._setApiField('agent', agent);
    },

    _setApiField: function (key, value) {
        this._api[key] = value;
    },

    getApiField: function (key) {
        return this._api[key];
    },

    getResponseFormat: function (key) {
        return this._api[key];
    },

    getConstant: function (c) {
        return eBay[c];
    },

    _prepResources: function () {
        for (var name in resources) {
            this[name[0].toLowerCase() + name.substring(1)] = new resources[name](this);
        }
    },

    // Gets a JSON version of a User-Agent and uses a cached version for a slight
    // speed advantage.
    getClientUserAgent: function (cb) {
        if (eBay.USER_AGENT_SERIALIZED) {
            return cb(eBay.USER_AGENT_SERIALIZED);
        }
        this.getClientUserAgentSeeded(eBay.USER_AGENT, function (cua) {
            eBay.USER_AGENT_SERIALIZED = cua;
            cb(eBay.USER_AGENT_SERIALIZED);
        });
    },

    // Gets a JSON version of a User-Agent by encoding a seeded object and
    // fetching a uname from the system.
    getClientUserAgentSeeded: function (seed, cb) {
        exec('uname -a', function (err, uname) {
            var userAgent = {};
            for (var field in seed) {
                userAgent[field] = encodeURIComponent(seed[field]);
            }

            // URI-encode in case there are unusual characters in the system's uname.
            userAgent.uname = encodeURIComponent(uname) || 'UNKNOWN';

            cb(JSON.stringify(userAgent));
        });
    }
};

module.exports = eBay;

module.exports.eBay = eBay;
