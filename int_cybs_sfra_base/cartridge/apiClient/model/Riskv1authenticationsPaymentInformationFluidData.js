"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
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
    define(['ApiClient'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }

    root.CyberSource.Riskv1authenticationsPaymentInformationFluidData = factory(root.CyberSource.ApiClient);
  }
})(void 0, function (ApiClient) {
  'use strict';
  /**
   * The Riskv1authenticationsPaymentInformationFluidData model module.
   * @module model/Riskv1authenticationsPaymentInformationFluidData
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsPaymentInformationFluidData</code>.
   * @alias module:model/Riskv1authenticationsPaymentInformationFluidData
   * @class
   * @param value {String} Represents the encrypted payment data BLOB. The entry for this field is dependent on the payment solution a merchant uses.  For details, see [Creating an Online Authorization](https://developer.cybersource.com/api/developer-guides/dita-payments/CreatingOnlineAuth.html) for the specific payment- solution entry. 
   */

  var exports = function exports(value) {
    var _this = this;

    _this['value'] = value;
  };
  /**
   * Constructs a <code>Riskv1authenticationsPaymentInformationFluidData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsPaymentInformationFluidData} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsPaymentInformationFluidData} The populated <code>Riskv1authenticationsPaymentInformationFluidData</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }

      if (data.hasOwnProperty('keySerialNumber')) {
        obj['keySerialNumber'] = ApiClient.convertToType(data['keySerialNumber'], 'String');
      }

      if (data.hasOwnProperty('descriptor')) {
        obj['descriptor'] = ApiClient.convertToType(data['descriptor'], 'String');
      }

      if (data.hasOwnProperty('encoding')) {
        obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
      }
    }

    return obj;
  };
  /**
   * Represents the encrypted payment data BLOB. The entry for this field is dependent on the payment solution a merchant uses.  For details, see [Creating an Online Authorization](https://developer.cybersource.com/api/developer-guides/dita-payments/CreatingOnlineAuth.html) for the specific payment- solution entry. 
   * @member {String} value
   */


  exports.prototype['value'] = undefined;
  /**
   * The encoded or encrypted value that a payment solution returns for an authorization request. For details about the valid values for a key, see [Creating an Online Authorization](https://developer.cybersource.com/api/developer-guides/dita-payments/CreatingOnlineAuth.html) 
   * @member {String} keySerialNumber
   */

  exports.prototype['keySerialNumber'] = undefined;
  /**
   * The identifier for a payment solution, which is sending the encrypted payment data to CyberSource for decryption. Valid values: - Samsung Pay: `RklEPUNPTU1PTi5TQU1TVU5HLklOQVBQLlBBWU1FTlQ=` **NOTE**: For other payment solutions, the value may be specific to the customer's mobile device. For example, the descriptor for a Bluefin payment encryption would be a device-generated descriptor.  For details about the list of payment solution identifiers, see [Creating an Online Authorization](https://developer.cybersource.com/api/developer-guides/dita-payments/CreatingOnlineAuth.html).  For details about the encrypted payment data, see the `encrypted_payment_descriptor` field description in the [Card-Present Processing Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/Retail_SCMP_API/html/). 
   * @member {String} descriptor
   */

  exports.prototype['descriptor'] = undefined;
  /**
   * Encoding method used to encrypt the payment data.  Valid value: Base64 
   * @member {String} encoding
   */

  exports.prototype['encoding'] = undefined;
  return exports;
});