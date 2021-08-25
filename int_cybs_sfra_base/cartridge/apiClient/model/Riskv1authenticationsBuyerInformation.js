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
    define(['ApiClient', 'model/Ptsv2paymentsBuyerInformationPersonalIdentification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsBuyerInformationPersonalIdentification'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1authenticationsBuyerInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsBuyerInformationPersonalIdentification);
  }
}(this, function(ApiClient, Ptsv2paymentsBuyerInformationPersonalIdentification) {
  'use strict';




  /**
   * The Riskv1authenticationsBuyerInformation model module.
   * @module model/Riskv1authenticationsBuyerInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsBuyerInformation</code>.
   * @alias module:model/Riskv1authenticationsBuyerInformation
   * @class
   * @param mobilePhone {Number} Cardholder’s mobile phone number. **Important** Required for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   */
  var exports = function(mobilePhone) {
    var _this = this;


    _this['mobilePhone'] = mobilePhone;
  };

  /**
   * Constructs a <code>Riskv1authenticationsBuyerInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsBuyerInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsBuyerInformation} The populated <code>Riskv1authenticationsBuyerInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('personalIdentification')) {
        obj['personalIdentification'] = ApiClient.convertToType(data['personalIdentification'], [Ptsv2paymentsBuyerInformationPersonalIdentification]);
      }
      if (data.hasOwnProperty('mobilePhone')) {
        obj['mobilePhone'] = ApiClient.convertToType(data['mobilePhone'], 'Number');
      }
    }
    return obj;
  }

  /**
   * This array contains detailed information about the buyer's form of persoanl identification.
   * @member {Array.<module:model/Ptsv2paymentsBuyerInformationPersonalIdentification>} personalIdentification
   */
  exports.prototype['personalIdentification'] = undefined;
  /**
   * Cardholder’s mobile phone number. **Important** Required for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions. 
   * @member {Number} mobilePhone
   */
  exports.prototype['mobilePhone'] = undefined;



  return exports;
}));


