"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * CYBS Value Added Service REST API
 * A group of RESTful API that provides value added services to CyberSource clients.
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Vasv2accountnumberlookuppost201responseClientReferenceInformation', 'model/Vasv2accountnumberlookuppost201responseIssuer', 'model/Vasv2accountnumberlookuppost201responsePaymentAccountInformation'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Vasv2accountnumberlookuppost201responseClientReferenceInformation'), require('./Vasv2accountnumberlookuppost201responseIssuer'), require('./Vasv2accountnumberlookuppost201responsePaymentAccountInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.Vasv2accountnumberlookuppost201response = factory(root.CyberSource.ApiClient, root.CyberSource.Vasv2accountnumberlookuppost201responseClientReferenceInformation, root.CyberSource.Vasv2accountnumberlookuppost201responseIssuer, root.CyberSource.Vasv2accountnumberlookuppost201responsePaymentAccountInformation);
  }
})(void 0, function (ApiClient, Vasv2accountnumberlookuppost201responseClientReferenceInformation, Vasv2accountnumberlookuppost201responseIssuer, Vasv2accountnumberlookuppost201responsePaymentAccountInformation) {
  'use strict';
  /**
   * The Vasv2accountnumberlookuppost201response model module.
   * @module model/Vasv2accountnumberlookuppost201response
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Vasv2accountnumberlookuppost201response</code>.
   * @alias module:model/Vasv2accountnumberlookuppost201response
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>Vasv2accountnumberlookuppost201response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vasv2accountnumberlookuppost201response} obj Optional instance to populate.
   * @return {module:model/Vasv2accountnumberlookuppost201response} The populated <code>Vasv2accountnumberlookuppost201response</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }

      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'String');
      }

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Vasv2accountnumberlookuppost201responseClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }

      if (data.hasOwnProperty('paymentAccountInformation')) {
        obj['paymentAccountInformation'] = Vasv2accountnumberlookuppost201responsePaymentAccountInformation.constructFromObject(data['paymentAccountInformation']);
      }

      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = Vasv2accountnumberlookuppost201responseIssuer.constructFromObject(data['issuer']);
      }
    }

    return obj;
  };
  /**
   * An unique identification number assigned by CyberSource to identify the submitted request. It is also appended to the endpoint of the resource.  On incremental authorizations, this value with be the same as the identification number returned in the original authorization response. 
   * @member {String} id
   */


  exports.prototype['id'] = undefined;
  /**
   * Time of request in UTC. Format: `YYYY-MM-DDThh:mm:ssZ` Example `2016-08-11T22:47:57Z` equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The `T` separates the date and the time. The `Z` indicates UTC. 
   * @member {String} submitTimeUtc
   */

  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The status of the submitted transaction.  Possible values:  - ACCEPTED 
   * @member {String} status
   */

  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Vasv2accountnumberlookuppost201responseClientReferenceInformation} clientReferenceInformation
   */

  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Vasv2accountnumberlookuppost201responsePaymentAccountInformation} paymentAccountInformation
   */

  exports.prototype['paymentAccountInformation'] = undefined;
  /**
   * @member {module:model/Vasv2accountnumberlookuppost201responseIssuer} issuer
   */

  exports.prototype['issuer'] = undefined;
  return exports;
});