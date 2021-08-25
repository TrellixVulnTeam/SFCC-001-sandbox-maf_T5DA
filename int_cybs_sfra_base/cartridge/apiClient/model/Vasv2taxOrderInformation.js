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
    define(['ApiClient', 'model/RiskV1DecisionsPost201ResponseOrderInformationAmountDetails', 'model/Vasv2taxOrderInformationBillTo', 'model/Vasv2taxOrderInformationInvoiceDetails', 'model/Vasv2taxOrderInformationLineItems', 'model/Vasv2taxOrderInformationOrderAcceptance', 'model/Vasv2taxOrderInformationOrderOrigin', 'model/Vasv2taxOrderInformationShipTo', 'model/Vasv2taxOrderInformationShippingDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RiskV1DecisionsPost201ResponseOrderInformationAmountDetails'), require('./Vasv2taxOrderInformationBillTo'), require('./Vasv2taxOrderInformationInvoiceDetails'), require('./Vasv2taxOrderInformationLineItems'), require('./Vasv2taxOrderInformationOrderAcceptance'), require('./Vasv2taxOrderInformationOrderOrigin'), require('./Vasv2taxOrderInformationShipTo'), require('./Vasv2taxOrderInformationShippingDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Vasv2taxOrderInformation = factory(root.CyberSource.ApiClient, root.CyberSource.RiskV1DecisionsPost201ResponseOrderInformationAmountDetails, root.CyberSource.Vasv2taxOrderInformationBillTo, root.CyberSource.Vasv2taxOrderInformationInvoiceDetails, root.CyberSource.Vasv2taxOrderInformationLineItems, root.CyberSource.Vasv2taxOrderInformationOrderAcceptance, root.CyberSource.Vasv2taxOrderInformationOrderOrigin, root.CyberSource.Vasv2taxOrderInformationShipTo, root.CyberSource.Vasv2taxOrderInformationShippingDetails);
  }
}(this, function(ApiClient, RiskV1DecisionsPost201ResponseOrderInformationAmountDetails, Vasv2taxOrderInformationBillTo, Vasv2taxOrderInformationInvoiceDetails, Vasv2taxOrderInformationLineItems, Vasv2taxOrderInformationOrderAcceptance, Vasv2taxOrderInformationOrderOrigin, Vasv2taxOrderInformationShipTo, Vasv2taxOrderInformationShippingDetails) {
  'use strict';




  /**
   * The Vasv2taxOrderInformation model module.
   * @module model/Vasv2taxOrderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Vasv2taxOrderInformation</code>.
   * @alias module:model/Vasv2taxOrderInformation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Vasv2taxOrderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vasv2taxOrderInformation} obj Optional instance to populate.
   * @return {module:model/Vasv2taxOrderInformation} The populated <code>Vasv2taxOrderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = RiskV1DecisionsPost201ResponseOrderInformationAmountDetails.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('billTo')) {
        obj['billTo'] = Vasv2taxOrderInformationBillTo.constructFromObject(data['billTo']);
      }
      if (data.hasOwnProperty('shippingDetails')) {
        obj['shippingDetails'] = Vasv2taxOrderInformationShippingDetails.constructFromObject(data['shippingDetails']);
      }
      if (data.hasOwnProperty('shipTo')) {
        obj['shipTo'] = Vasv2taxOrderInformationShipTo.constructFromObject(data['shipTo']);
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [Vasv2taxOrderInformationLineItems]);
      }
      if (data.hasOwnProperty('invoiceDetails')) {
        obj['invoiceDetails'] = Vasv2taxOrderInformationInvoiceDetails.constructFromObject(data['invoiceDetails']);
      }
      if (data.hasOwnProperty('orderAcceptance')) {
        obj['orderAcceptance'] = Vasv2taxOrderInformationOrderAcceptance.constructFromObject(data['orderAcceptance']);
      }
      if (data.hasOwnProperty('orderOrigin')) {
        obj['orderOrigin'] = Vasv2taxOrderInformationOrderOrigin.constructFromObject(data['orderOrigin']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RiskV1DecisionsPost201ResponseOrderInformationAmountDetails} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * @member {module:model/Vasv2taxOrderInformationBillTo} billTo
   */
  exports.prototype['billTo'] = undefined;
  /**
   * @member {module:model/Vasv2taxOrderInformationShippingDetails} shippingDetails
   */
  exports.prototype['shippingDetails'] = undefined;
  /**
   * @member {module:model/Vasv2taxOrderInformationShipTo} shipTo
   */
  exports.prototype['shipTo'] = undefined;
  /**
   * @member {Array.<module:model/Vasv2taxOrderInformationLineItems>} lineItems
   */
  exports.prototype['lineItems'] = undefined;
  /**
   * @member {module:model/Vasv2taxOrderInformationInvoiceDetails} invoiceDetails
   */
  exports.prototype['invoiceDetails'] = undefined;
  /**
   * @member {module:model/Vasv2taxOrderInformationOrderAcceptance} orderAcceptance
   */
  exports.prototype['orderAcceptance'] = undefined;
  /**
   * @member {module:model/Vasv2taxOrderInformationOrderOrigin} orderOrigin
   */
  exports.prototype['orderOrigin'] = undefined;



  return exports;
}));


