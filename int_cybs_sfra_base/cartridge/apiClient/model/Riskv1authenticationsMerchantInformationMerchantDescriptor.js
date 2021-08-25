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

    root.CyberSource.Riskv1authenticationsMerchantInformationMerchantDescriptor = factory(root.CyberSource.ApiClient);
  }
})(void 0, function (ApiClient) {
  'use strict';
  /**
   * The Riskv1authenticationsMerchantInformationMerchantDescriptor model module.
   * @module model/Riskv1authenticationsMerchantInformationMerchantDescriptor
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsMerchantInformationMerchantDescriptor</code>.
   * @alias module:model/Riskv1authenticationsMerchantInformationMerchantDescriptor
   * @class
   */

  var exports = function exports() {
    var _this = this;
  };
  /**
   * Constructs a <code>Riskv1authenticationsMerchantInformationMerchantDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsMerchantInformationMerchantDescriptor} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsMerchantInformationMerchantDescriptor} The populated <code>Riskv1authenticationsMerchantInformationMerchantDescriptor</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }

    return obj;
  };
  /**
   * Merchant's name.  For more details about the merchant-related fields, see the `merchant_descriptor` field description in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html)  **Note** For Paymentech processor using Cybersource Payouts, the maximum data length is 22. 
   * @member {String} name
   */


  exports.prototype['name'] = undefined;
  /**
   * Address of company's website provided by merchant 
   * @member {String} url
   */

  exports.prototype['url'] = undefined;
  return exports;
});