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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsRecurringPaymentInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsRecurringPaymentInformation model module.
   * @module model/Ptsv2paymentsRecurringPaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsRecurringPaymentInformation</code>.
   * This object contains recurring payment information.
   * @alias module:model/Ptsv2paymentsRecurringPaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2paymentsRecurringPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsRecurringPaymentInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsRecurringPaymentInformation} The populated <code>Ptsv2paymentsRecurringPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
      }
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
      }
      if (data.hasOwnProperty('originalPurchaseDate')) {
        obj['originalPurchaseDate'] = ApiClient.convertToType(data['originalPurchaseDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * The date after which no further recurring authorizations should be performed. Format: `YYYY-MM-DD` **Note** This field is required for recurring transactions. 
   * @member {String} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * Integer value indicating the minimum number of days between recurring authorizations. A frequency of monthly is indicated by the value 28. Multiple of 28 days will be used to indicate months.  Example: 6 months = 168  Example values accepted (31 days): - 31 - 031 - 0031  **Note** This field is required for recurring transactions. 
   * @member {Number} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * Date of original purchase. Required for recurring transactions. Format: `YYYY-MM-DDTHH:MM:SSZ` **Note**: If this field is empty, the current date is used. 
   * @member {String} originalPurchaseDate
   */
  exports.prototype['originalPurchaseDate'] = undefined;



  return exports;
}));


