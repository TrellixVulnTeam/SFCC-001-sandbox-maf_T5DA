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
    define(['ApiClient', 'model/Riskv1addressverificationsOrderInformationBillTo', 'model/Riskv1addressverificationsOrderInformationLineItems', 'model/Riskv1addressverificationsOrderInformationShipTo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1addressverificationsOrderInformationBillTo'), require('./Riskv1addressverificationsOrderInformationLineItems'), require('./Riskv1addressverificationsOrderInformationShipTo'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1addressverificationsOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1addressverificationsOrderInformationBillTo, root.CyberSource.Riskv1addressverificationsOrderInformationLineItems, root.CyberSource.Riskv1addressverificationsOrderInformationShipTo);
  }
}(this, function(ApiClient, Riskv1addressverificationsOrderInformationBillTo, Riskv1addressverificationsOrderInformationLineItems, Riskv1addressverificationsOrderInformationShipTo) {
  'use strict';




  /**
   * The Riskv1addressverificationsOrderInformation model module.
   * @module model/Riskv1addressverificationsOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1addressverificationsOrderInformation</code>.
   * @alias module:model/Riskv1addressverificationsOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Riskv1addressverificationsOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1addressverificationsOrderInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1addressverificationsOrderInformation} The populated <code>Riskv1addressverificationsOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = Riskv1addressverificationsOrderInformationBillTo.constructFromObject(data['billTo']);
      }
      if (data.hasOwnProperty('shipTo')) {
        obj['shipTo'] = Riskv1addressverificationsOrderInformationShipTo.constructFromObject(data['shipTo']);
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [Riskv1addressverificationsOrderInformationLineItems]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1addressverificationsOrderInformationBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;
  /**
   * @member {module:model/Riskv1addressverificationsOrderInformationShipTo} shipTo
   */
  exports.prototype['shipTo'] = undefined;
  /**
   * @member {Array.<module:model/Riskv1addressverificationsOrderInformationLineItems>} lineItems
   */
  exports.prototype['lineItems'] = undefined;



  return exports;
}));


