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
    define(['ApiClient', 'model/Vasv2accountnumberlookupClientReferenceInformation', 'model/Vasv2accountnumberlookupPaymentAccountInformation', 'model/Vasv2accountnumberlookupProcessingInformation'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Vasv2accountnumberlookupClientReferenceInformation'), require('./Vasv2accountnumberlookupPaymentAccountInformation'), require('./Vasv2accountnumberlookupProcessingInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.RaccountNumberLookupRequest = factory(root.CyberSource.ApiClient, root.CyberSource.Vasv2accountnumberlookupClientReferenceInformation, root.CyberSource.Vasv2accountnumberlookupPaymentAccountInformation, root.CyberSource.Vasv2accountnumberlookupProcessingInformation);
  }
})(void 0, function (ApiClient, Vasv2accountnumberlookupClientReferenceInformation, Vasv2accountnumberlookupPaymentAccountInformation, Vasv2accountnumberlookupProcessingInformation) {
  'use strict';
  /**
   * The RaccountNumberLookupRequest model module.
   * @module model/RaccountNumberLookupRequest
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>RaccountNumberLookupRequest</code>.
   * @alias module:model/RaccountNumberLookupRequest
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>RaccountNumberLookupRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RaccountNumberLookupRequest} obj Optional instance to populate.
   * @return {module:model/RaccountNumberLookupRequest} The populated <code>RaccountNumberLookupRequest</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clientReferenceInformation')) {
        obj['clientReferenceInformation'] = Vasv2accountnumberlookupClientReferenceInformation.constructFromObject(data['clientReferenceInformation']);
      }

      if (data.hasOwnProperty('paymentAccountInformation')) {
        obj['paymentAccountInformation'] = Vasv2accountnumberlookupPaymentAccountInformation.constructFromObject(data['paymentAccountInformation']);
      }

      if (data.hasOwnProperty('processingInformation')) {
        obj['processingInformation'] = Vasv2accountnumberlookupProcessingInformation.constructFromObject(data['processingInformation']);
      }
    }

    return obj;
  };
  /**
   * @member {module:model/Vasv2accountnumberlookupClientReferenceInformation} clientReferenceInformation
   */


  exports.prototype['clientReferenceInformation'] = undefined;
  /**
   * @member {module:model/Vasv2accountnumberlookupPaymentAccountInformation} paymentAccountInformation
   */

  exports.prototype['paymentAccountInformation'] = undefined;
  /**
   * @member {module:model/Vasv2accountnumberlookupProcessingInformation} processingInformation
   */

  exports.prototype['processingInformation'] = undefined;
  return exports;
});