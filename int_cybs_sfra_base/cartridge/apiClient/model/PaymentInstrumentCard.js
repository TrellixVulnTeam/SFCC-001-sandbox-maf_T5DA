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

    root.CyberSource.PaymentInstrumentCard = factory(root.CyberSource.ApiClient);
  }
})(void 0, function (ApiClient) {
  'use strict';
  /**
   * The PaymentInstrumentCard model module.
   * @module model/PaymentInstrumentCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentInstrumentCard</code>.
   * @alias module:model/PaymentInstrumentCard
   * @class
   * @param type {String} Type of credit card. Possible values:   * **visa** -- Visa (001)   * **mastercard** -- Mastercard (002) - Eurocard—European regional brand of Mastercard   * **american express** -- American Express (003)   * **discover** -- Discover (004)   * **diners club** -- Diners Club (005)   * **carte blanche** -- Carte Blanche (006)   * **jcb** -- JCB (007)   * **optima** -- Optima (008)   * **twinpay credit** -- Twinpay Credit (011)   * **twinpay debit** -- Twinpay Debit (012)   * **walmart** -- Walmart (013)   * **enroute** -- EnRoute (014)   * **lowes consumer** -- Lowes consumer (015)   * **home depot consumer** -- Home Depot consumer (016)   * **mbna** -- MBNA (017)   * **dicks sportswear** -- Dicks Sportswear (018)   * **casual corner** -- Casual Corner (019)   * **sears** -- Sears (020)   * **jal** -- JAL (021)   * **disney** -- Disney (023)   * **maestro uk domestic** -- Maestro (024) - UK Domestic   * **sams club consumer** -- Sams Club consumer (025)   * **sams club business** -- Sams Club business (026)   * **bill me later** -- Bill me later (028)   * **bebe** -- Bebe (029)   * **restoration hardware** -- Restoration Hardware (030)   * **delta online** -- Delta (031) — use this value only for Ingenico ePayments. For other processors, use 001 for all Visa card types.   * **solo** -- Solo (032)   * **visa electron** -- Visa Electron (033)   * **dankort** -- Dankort (034)   * **laser** -- Laser (035)   * **carte bleue** -- Carte Bleue (036) — formerly Cartes Bancaires   * **carta si** -- Carta Si (037)   * **pinless debit** -- pinless debit (038)   * **encoded account** -- encoded account (039)   * **uatp** -- UATP (040)   * **household** -- Household (041)   * **maestro international** -- Maestro (042) - International   * **ge money uk** -- GE Money UK (043)   * **korean cards** -- Korean cards (044)   * **style** -- Style (045)   * **jcrew** -- JCrew (046)   * **payease china processing ewallet** -- PayEase China processing eWallet (047)   * **payease china processing bank transfer** -- PayEase China processing bank transfer (048)   * **meijer private label** -- Meijer Private Label (049)   * **hipercard** -- Hipercard (050) — supported only by the Comercio Latino processor.   * **aura** -- Aura (051) — supported only by the Comercio Latino processor.   * **redecard** -- Redecard (052)   * **elo** -- Elo (054) — supported only by the Comercio Latino processor.   * **capital one private label** -- Capital One Private Label (055)   * **synchrony private label** -- Synchrony Private Label (056)   * **costco private label** -- Costco Private Label (057)   * **mada** -- mada (060)   * **china union pay** -- China Union Pay (062)   * **falabella private label** -- Falabella private label (063) 
   */

  var exports = function exports(type) {
    var _this = this;

    _this['type'] = type;
  };
  /**
   * Constructs a <code>PaymentInstrumentCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentInstrumentCard} obj Optional instance to populate.
   * @return {module:model/PaymentInstrumentCard} The populated <code>PaymentInstrumentCard</code> instance.
   */


  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expirationMonth')) {
        obj['expirationMonth'] = ApiClient.convertToType(data['expirationMonth'], 'String');
      }

      if (data.hasOwnProperty('expirationYear')) {
        obj['expirationYear'] = ApiClient.convertToType(data['expirationYear'], 'String');
      }

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }

      if (data.hasOwnProperty('issueNumber')) {
        obj['issueNumber'] = ApiClient.convertToType(data['issueNumber'], 'String');
      }

      if (data.hasOwnProperty('startMonth')) {
        obj['startMonth'] = ApiClient.convertToType(data['startMonth'], 'String');
      }

      if (data.hasOwnProperty('startYear')) {
        obj['startYear'] = ApiClient.convertToType(data['startYear'], 'String');
      }

      if (data.hasOwnProperty('useAs')) {
        obj['useAs'] = ApiClient.convertToType(data['useAs'], 'String');
      }
    }

    return obj;
  };
  /**
   * Two-digit month in which the credit card expires. Format: `MM` Possible values: `01` through `12`  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. For more information about relaxed requirements, see the TMS REST API Developer Guide.  Important: It is your responsibility to determine whether a field is required for the transaction you are requesting. 
   * @member {String} expirationMonth
   */


  exports.prototype['expirationMonth'] = undefined;
  /**
   * Four-digit year in which the credit card expires. Format: `YYYY`. Possible values: `1900` through `2099`.  **FDC Nashville Global and FDMS South** You can send in 2 digits or 4 digits. When you send in 2 digits, they must be the last 2 digits of the year.  This field is optional if your CyberSource account is configured for relaxed requirements for address data and expiration date. For details, see [Relaxed Requirements for Address Data and Expiration Date.](https://www.cybersource.com/developers/integration_methods/relax_avs/). **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.' 
   * @member {String} expirationYear
   */

  exports.prototype['expirationYear'] = undefined;
  /**
   * Type of credit card. Possible values:   * **visa** -- Visa (001)   * **mastercard** -- Mastercard (002) - Eurocard—European regional brand of Mastercard   * **american express** -- American Express (003)   * **discover** -- Discover (004)   * **diners club** -- Diners Club (005)   * **carte blanche** -- Carte Blanche (006)   * **jcb** -- JCB (007)   * **optima** -- Optima (008)   * **twinpay credit** -- Twinpay Credit (011)   * **twinpay debit** -- Twinpay Debit (012)   * **walmart** -- Walmart (013)   * **enroute** -- EnRoute (014)   * **lowes consumer** -- Lowes consumer (015)   * **home depot consumer** -- Home Depot consumer (016)   * **mbna** -- MBNA (017)   * **dicks sportswear** -- Dicks Sportswear (018)   * **casual corner** -- Casual Corner (019)   * **sears** -- Sears (020)   * **jal** -- JAL (021)   * **disney** -- Disney (023)   * **maestro uk domestic** -- Maestro (024) - UK Domestic   * **sams club consumer** -- Sams Club consumer (025)   * **sams club business** -- Sams Club business (026)   * **bill me later** -- Bill me later (028)   * **bebe** -- Bebe (029)   * **restoration hardware** -- Restoration Hardware (030)   * **delta online** -- Delta (031) — use this value only for Ingenico ePayments. For other processors, use 001 for all Visa card types.   * **solo** -- Solo (032)   * **visa electron** -- Visa Electron (033)   * **dankort** -- Dankort (034)   * **laser** -- Laser (035)   * **carte bleue** -- Carte Bleue (036) — formerly Cartes Bancaires   * **carta si** -- Carta Si (037)   * **pinless debit** -- pinless debit (038)   * **encoded account** -- encoded account (039)   * **uatp** -- UATP (040)   * **household** -- Household (041)   * **maestro international** -- Maestro (042) - International   * **ge money uk** -- GE Money UK (043)   * **korean cards** -- Korean cards (044)   * **style** -- Style (045)   * **jcrew** -- JCrew (046)   * **payease china processing ewallet** -- PayEase China processing eWallet (047)   * **payease china processing bank transfer** -- PayEase China processing bank transfer (048)   * **meijer private label** -- Meijer Private Label (049)   * **hipercard** -- Hipercard (050) — supported only by the Comercio Latino processor.   * **aura** -- Aura (051) — supported only by the Comercio Latino processor.   * **redecard** -- Redecard (052)   * **elo** -- Elo (054) — supported only by the Comercio Latino processor.   * **capital one private label** -- Capital One Private Label (055)   * **synchrony private label** -- Synchrony Private Label (056)   * **costco private label** -- Costco Private Label (057)   * **mada** -- mada (060)   * **china union pay** -- China Union Pay (062)   * **falabella private label** -- Falabella private label (063) 
   * @member {String} type
   */

  exports.prototype['type'] = undefined;
  /**
   * Number of times a Maestro (UK Domestic) card has been issued to the account holder.
   * @member {String} issueNumber
   */

  exports.prototype['issueNumber'] = undefined;
  /**
   * Month of the start of the Maestro (UK Domestic) card validity period. Format: `MM`. Possible values: `01` through `12`. 
   * @member {String} startMonth
   */

  exports.prototype['startMonth'] = undefined;
  /**
   * Year of the start of the Maestro (UK Domestic) card validity period.  Format: `YYYY`. Possible values: `1900` through `2099`. 
   * @member {String} startYear
   */

  exports.prototype['startYear'] = undefined;
  /**
   * Card Use As Field. Supported value of `pinless debit` only. Only for use with Pinless Debit tokens.
   * @member {String} useAs
   */

  exports.prototype['useAs'] = undefined;
  return exports;
});