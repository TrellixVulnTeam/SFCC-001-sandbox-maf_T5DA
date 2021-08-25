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
    define(['ApiClient', 'model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts', 'model/Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion', 'model/Ptsv2paymentsOrderInformationAmountDetailsSurcharge', 'model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts'), require('./Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion'), require('./Ptsv2paymentsOrderInformationAmountDetailsSurcharge'), require('./Ptsv2paymentsOrderInformationAmountDetailsTaxDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsOrderInformationAmountDetails = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsSurcharge, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsTaxDetails);
  }
}(this, function(ApiClient, Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts, Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion, Ptsv2paymentsOrderInformationAmountDetailsSurcharge, Ptsv2paymentsOrderInformationAmountDetailsTaxDetails) {
  'use strict';




  /**
   * The Ptsv2paymentsOrderInformationAmountDetails model module.
   * @module model/Ptsv2paymentsOrderInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsOrderInformationAmountDetails</code>.
   * @alias module:model/Ptsv2paymentsOrderInformationAmountDetails
   * @class
   */
  var exports = function() {
    var _this = this;


























  };

  /**
   * Constructs a <code>Ptsv2paymentsOrderInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsOrderInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsOrderInformationAmountDetails} The populated <code>Ptsv2paymentsOrderInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'String');
      }
      if (data.hasOwnProperty('dutyAmount')) {
        obj['dutyAmount'] = ApiClient.convertToType(data['dutyAmount'], 'String');
      }
      if (data.hasOwnProperty('gratuityAmount')) {
        obj['gratuityAmount'] = ApiClient.convertToType(data['gratuityAmount'], 'String');
      }
      if (data.hasOwnProperty('taxAmount')) {
        obj['taxAmount'] = ApiClient.convertToType(data['taxAmount'], 'String');
      }
      if (data.hasOwnProperty('nationalTaxIncluded')) {
        obj['nationalTaxIncluded'] = ApiClient.convertToType(data['nationalTaxIncluded'], 'String');
      }
      if (data.hasOwnProperty('taxAppliedAfterDiscount')) {
        obj['taxAppliedAfterDiscount'] = ApiClient.convertToType(data['taxAppliedAfterDiscount'], 'String');
      }
      if (data.hasOwnProperty('taxAppliedLevel')) {
        obj['taxAppliedLevel'] = ApiClient.convertToType(data['taxAppliedLevel'], 'String');
      }
      if (data.hasOwnProperty('taxTypeCode')) {
        obj['taxTypeCode'] = ApiClient.convertToType(data['taxTypeCode'], 'String');
      }
      if (data.hasOwnProperty('freightAmount')) {
        obj['freightAmount'] = ApiClient.convertToType(data['freightAmount'], 'String');
      }
      if (data.hasOwnProperty('foreignAmount')) {
        obj['foreignAmount'] = ApiClient.convertToType(data['foreignAmount'], 'String');
      }
      if (data.hasOwnProperty('foreignCurrency')) {
        obj['foreignCurrency'] = ApiClient.convertToType(data['foreignCurrency'], 'String');
      }
      if (data.hasOwnProperty('exchangeRate')) {
        obj['exchangeRate'] = ApiClient.convertToType(data['exchangeRate'], 'String');
      }
      if (data.hasOwnProperty('exchangeRateTimeStamp')) {
        obj['exchangeRateTimeStamp'] = ApiClient.convertToType(data['exchangeRateTimeStamp'], 'String');
      }
      if (data.hasOwnProperty('surcharge')) {
        obj['surcharge'] = Ptsv2paymentsOrderInformationAmountDetailsSurcharge.constructFromObject(data['surcharge']);
      }
      if (data.hasOwnProperty('settlementAmount')) {
        obj['settlementAmount'] = ApiClient.convertToType(data['settlementAmount'], 'String');
      }
      if (data.hasOwnProperty('settlementCurrency')) {
        obj['settlementCurrency'] = ApiClient.convertToType(data['settlementCurrency'], 'String');
      }
      if (data.hasOwnProperty('amexAdditionalAmounts')) {
        obj['amexAdditionalAmounts'] = ApiClient.convertToType(data['amexAdditionalAmounts'], [Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts]);
      }
      if (data.hasOwnProperty('taxDetails')) {
        obj['taxDetails'] = ApiClient.convertToType(data['taxDetails'], [Ptsv2paymentsOrderInformationAmountDetailsTaxDetails]);
      }
      if (data.hasOwnProperty('serviceFeeAmount')) {
        obj['serviceFeeAmount'] = ApiClient.convertToType(data['serviceFeeAmount'], 'String');
      }
      if (data.hasOwnProperty('originalAmount')) {
        obj['originalAmount'] = ApiClient.convertToType(data['originalAmount'], 'String');
      }
      if (data.hasOwnProperty('originalCurrency')) {
        obj['originalCurrency'] = ApiClient.convertToType(data['originalCurrency'], 'String');
      }
      if (data.hasOwnProperty('cashbackAmount')) {
        obj['cashbackAmount'] = ApiClient.convertToType(data['cashbackAmount'], 'String');
      }
      if (data.hasOwnProperty('currencyConversion')) {
        obj['currencyConversion'] = Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion.constructFromObject(data['currencyConversion']);
      }
    }
    return obj;
  }

  /**
   * Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  **Note** For CTV, FDCCompass, Paymentech processors, the maximum length for this field is 12.  **Important** Some processors have specific requirements and limitations, such as maximum amounts and maximum field lengths. For details, see: - \"Authorization Information for Specific Processors\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/). - \"Capture Information for Specific Processors\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/). - \"Credit Information for Specific Processors\" in the [Credit Card Services Using the SCMP API Guide](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/).  If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen. For details, see \"Zero Amount Authorizations,\" \"Credit Information for Specific Processors\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### Card Present Required to include either this field or `orderInformation.lineItems[].unitPrice` for the order.  #### Invoicing Required for creating a new invoice.  #### PIN Debit Amount you requested for the PIN debit purchase. This value is returned for partial authorizations. The issuing bank can approve a partial amount if the balance on the debit card is less than the requested transaction amount.  Required field for PIN Debit purchase and PIN Debit credit requests. Optional field for PIN Debit reversal requests.  #### GPX This field is optional for reversing an authorization or credit; however, for all other processors, these fields are required.  #### DCC with a Third-Party Provider Set this field to the converted amount that was returned by the DCC provider. You must include either this field or the 1st line item in the order and the specific line-order amount in your request. For details, see `grand_total_amount` field description in [Dynamic Currency Conversion For First Data Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/DCC_FirstData_SCMP/DCC_FirstData_SCMP_API.pdf).  #### FDMS South If you accept IDR or CLP currencies, see the entry for FDMS South in \"Authorization Information for Specific Processors\" of the [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  #### DCC for First Data Not used. 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Currency used for the order. Use the three-character [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  #### Used by **Authorization** Required field.  **Authorization Reversal** For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your payment authorization request.  #### PIN Debit Currency for the amount you requested for the PIN debit purchase. This value is returned for partial authorizations. The issuing bank can approve a partial amount if the balance on the debit card is less than the requested transaction amount. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf). Returned by PIN debit purchase.  For PIN debit reversal requests, you must use the same currency that was used for the PIN debit purchase or PIN debit credit that you are reversing. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf).  Required field for PIN Debit purchase and PIN Debit credit requests. Optional field for PIN Debit reversal requests.  #### GPX This field is optional for reversing an authorization or credit.  #### DCC for First Data Your local currency. For details, see the `currency` field description in [Dynamic Currency Conversion For First Data Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/DCC_FirstData_SCMP/DCC_FirstData_SCMP_API.pdf).  #### Tax Calculation Required for international tax and value added tax only. Optional for U.S. and Canadian taxes. Your local currency. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Total discount amount applied to the order. 
   * @member {String} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * Total charges for any import or export duties included in the order. 
   * @member {String} dutyAmount
   */
  exports.prototype['dutyAmount'] = undefined;
  /**
   * Gratuity or tip amount for restaurants when the card is present. Allowed only when `industryDatatype=restaurant`. When your customer uses a debit card or prepaid card, and you receive a partial authorization, the payment networks recommend that you do not submit a capture amount that is higher than the authorized amount. When the capture amount exceeds the partial amount that was approved, the issuer has chargeback rights for the excess amount.  #### Used by **Capture** Optional field.  #### CyberSource through VisaNet Restaurant data is supported only on CyberSource through VisaNet. 
   * @member {String} gratuityAmount
   */
  exports.prototype['gratuityAmount'] = undefined;
  /**
   * Total tax amount for all the items in the order. 
   * @member {String} taxAmount
   */
  exports.prototype['taxAmount'] = undefined;
  /**
   * Flag that indicates whether a national tax is included in the order total.  Possible values:   - **0**: national tax not included  - **1**: national tax included 
   * @member {String} nationalTaxIncluded
   */
  exports.prototype['nationalTaxIncluded'] = undefined;
  /**
   * Flag that indicates how the merchant manages discounts.  Possible values:   - **0**: no invoice level discount included  - **1**: tax calculated on the postdiscount invoice total  - **2**: tax calculated on the prediscount invoice total 
   * @member {String} taxAppliedAfterDiscount
   */
  exports.prototype['taxAppliedAfterDiscount'] = undefined;
  /**
   * Flag that indicates how you calculate tax.  Possible values:   - **0**: net prices with tax calculated at line item level  - **1**: net prices with tax calculated at invoice level  - **2**: gross prices with tax provided at line item level  - **3**: gross prices with tax provided at invoice level  - **4**: no tax applies on the invoice for the transaction 
   * @member {String} taxAppliedLevel
   */
  exports.prototype['taxAppliedLevel'] = undefined;
  /**
   * For tax amounts that can be categorized as one tax type.  This field contains the tax type code that corresponds to the entry in the _lineItems.taxAmount_ field.  Possible values:   - **056**: sales tax (U.S only)  - **TX~**: all taxes (Canada only)   Note ~ = space. 
   * @member {String} taxTypeCode
   */
  exports.prototype['taxTypeCode'] = undefined;
  /**
   * Total freight or shipping and handling charges for the order. When you include this field in your request, you must also include the **totalAmount** field.  For processor-specific information, see the freight_amount field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} freightAmount
   */
  exports.prototype['freightAmount'] = undefined;
  /**
   * Set this field to the converted amount that was returned by the DCC provider. For processor-specific information, see the `foreign_amount` field description in the [Credit Card Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/) 
   * @member {String} foreignAmount
   */
  exports.prototype['foreignAmount'] = undefined;
  /**
   * Set this field to the converted amount that was returned by the DCC provider. 
   * @member {String} foreignCurrency
   */
  exports.prototype['foreignCurrency'] = undefined;
  /**
   * Exchange rate returned by the DCC service. Includes a decimal point and a maximum of 4 decimal places.  For details, see `exchange_rate` request-level field description in the [Dynamic Currency Conversion For First Data Using the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/DCC_FirstData_SCMP/DCC_FirstData_SCMP_API.pdf) 
   * @member {String} exchangeRate
   */
  exports.prototype['exchangeRate'] = undefined;
  /**
   * Time stamp for the exchange rate. This value is returned by the DCC service.  Format: `YYYYMMDD~HH:MM`  where ~ denotes a space. 
   * @member {String} exchangeRateTimeStamp
   */
  exports.prototype['exchangeRateTimeStamp'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformationAmountDetailsSurcharge} surcharge
   */
  exports.prototype['surcharge'] = undefined;
  /**
   * This is a multicurrency field. It contains the transaction amount (field 4), converted to the Currency used to bill the cardholder’s account. 
   * @member {String} settlementAmount
   */
  exports.prototype['settlementAmount'] = undefined;
  /**
   * This is a multicurrency-only field. It contains a 3-digit numeric code that identifies the currency used by the issuer to bill the cardholder's account. 
   * @member {String} settlementCurrency
   */
  exports.prototype['settlementCurrency'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsOrderInformationAmountDetailsAmexAdditionalAmounts>} amexAdditionalAmounts
   */
  exports.prototype['amexAdditionalAmounts'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsOrderInformationAmountDetailsTaxDetails>} taxDetails
   */
  exports.prototype['taxDetails'] = undefined;
  /**
   * Service fee. Required for service fee transactions. 
   * @member {String} serviceFeeAmount
   */
  exports.prototype['serviceFeeAmount'] = undefined;
  /**
   * Amount in your original local pricing currency.  This value cannot be negative. You can include a decimal point (.) in this field to denote the currency exponent, but you cannot include any other special characters.  If needed, CyberSource truncates the amount to the correct number of decimal places. 
   * @member {String} originalAmount
   */
  exports.prototype['originalAmount'] = undefined;
  /**
   * Your local pricing currency code.  For the possible values, see the [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf) 
   * @member {String} originalCurrency
   */
  exports.prototype['originalCurrency'] = undefined;
  /**
   * Cashback amount in the acquirer’s currency. If a cashback amount is included in the request, it must be included in the `orderInformation.amountDetails.totalAmount` value.  This field is supported only on CyberSource through VisaNet.  #### Used by **Authorization** Optional. **Authorization Reversal** Optional.  #### PIN debit Required field for PIN debit purchase, PIN debit credit or PIN debit reversal. 
   * @member {String} cashbackAmount
   */
  exports.prototype['cashbackAmount'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformationAmountDetailsCurrencyConversion} currencyConversion
   */
  exports.prototype['currencyConversion'] = undefined;



  return exports;
}));


