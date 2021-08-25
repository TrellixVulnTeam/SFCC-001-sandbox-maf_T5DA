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
    root.CyberSource.Tmsv2customersBuyerInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Tmsv2customersBuyerInformation model module.
   * @module model/Tmsv2customersBuyerInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv2customersBuyerInformation</code>.
   * @alias module:model/Tmsv2customersBuyerInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Tmsv2customersBuyerInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv2customersBuyerInformation} obj Optional instance to populate.
   * @return {module:model/Tmsv2customersBuyerInformation} The populated <code>Tmsv2customersBuyerInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantCustomerID')) {
        obj['merchantCustomerID'] = ApiClient.convertToType(data['merchantCustomerID'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }

  /**
   * Your identifier for the customer. 
   * @member {String} merchantCustomerID
   */
  exports.prototype['merchantCustomerID'] = undefined;
  /**
   * Customer's primary email address, including the full domain name. 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;



  return exports;
}));


