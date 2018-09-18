'use strict';

var debug = require('debug')('eBay:Error.js');
var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error Class to wrap any errors returned by eBay-node
 */
function _Error() {
    this.populate.apply(this, arguments);
    var stack = (new Error(this.message)).stack;
    debug('stack ', stack);
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function (type, message) {
    this.Type = type;
    this.Message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from eBay's REST API)
 */
var eBayError = _Error.eBayError = _Error.extend({
    Type: 'eBayError',
    Message: '',
    populate: function (raw) {
        this.Type = this.type || 'unknown';
        this.Code = raw.Code || 'GenericError';
        this.Message = raw.message || raw.error || 'unknown';
        this.StatusCode = raw.StatusCode || 'unknown';
    }
});

/**
 * Helper factory which takes raw eBay errors and outputs wrapping instances
 */
eBayError.generate = function () {
    return new _Error('Generic', 'Unknown Error');
};

// Specific eBay Error types:
_Error.eBayInvalidRequestError = eBayError.extend({type: 'eBayInvalidRequestError'});
_Error.eBayAPIError = eBayError.extend({type: 'eBayAPIError'});
_Error.eBayAuthenticationError = eBayError.extend({type: 'eBayAuthenticationError'});
_Error.eBayPermissionError = eBayError.extend({type: 'eBayPermissionError'});
_Error.eBayRateLimitError = eBayError.extend({type: 'eBayRateLimitError'});
_Error.eBayConnectionError = eBayError.extend({type: 'eBayConnectionError'});
