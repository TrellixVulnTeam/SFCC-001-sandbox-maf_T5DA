'use strict';

/**
 * @module hooks/customer.retrieve
 */

/**
 * @type {dw/system/Logger}
 */
var LOGGER = require('dw/system/Logger').getLogger('int_b2ccrmsync', 'hooks.customer.retrieve');

/**
 * @type {Array}
 */
var PROFILE_REQUIRED_KEYS = ['Id', 'B2C_Customer_ID__c', 'B2C_CustomerList_ID__c', 'B2C_Customer_No__c', 'Email', 'Lastname'];

/**
 * This returns true if the integration with the Salesforce Platform is enabled or false otherwise
 *
 * @return {Boolean}
 */
function isIntegrationEnabled() {
    var Site = require('dw/system/Site').getCurrent();
    var isSyncEnabled = Site.getCustomPreferenceValue('b2ccrm_syncIsEnabled');
    var isSyncCustomersEnabled = Site.getCustomPreferenceValue('b2ccrm_syncCustomersEnabled');
    return isSyncEnabled && isSyncCustomersEnabled;
}

/**
 * Retrieve the profile within the Salesforce core platform based on the given {profileDetails}
 *
 * @param {dw/customer/Profile|Object} profileDetails The profile details to use while retrieving the customer from the Salesforce Core platform.
 * Either an SFCC profile, or an object with a key/value pair of required parameters to search in the Salesforce Core platform
 * @param {Boolean} saveContactIdOnProfile If this is {true} and the customer is successfully retrieved from the Salesforce Core platform, the contact Id is saved on the currently authenticated profile
 *
 * @return {Object} The response object from the Salesforce Core platform in case the customer has been successfully retrieved, or undefined otherwise
 */
function customerRetrieve(profileDetails, saveContactIdOnProfile) {
    if (!isIntegrationEnabled() || !profileDetails) {
        return;
    }

    saveContactIdOnProfile = saveContactIdOnProfile || false;
    var areDetailsAnInstanceOfProfile = profileDetails instanceof dw.customer.Profile;

    try {
        var requestBody = undefined;
        var profileModel = new (require('../models/customer'))(areDetailsAnInstanceOfProfile ? profileDetails : undefined, 'retrieve');
        if (areDetailsAnInstanceOfProfile) {
            requestBody = profileModel.getRetrieveRequestBody();
        } else {
            if (!PROFILE_REQUIRED_KEYS.some(function (key) {
                return profileDetails[key];
            })) {
                return;
            }

            requestBody = profileModel.getRetrieveRequestBody(profileDetails);
        }

        var ServiceMgr = require('../services/ServiceMgr');
        LOGGER.info('Retriving the customer profile to Salesforce core. Here is the request body: {0}', requestBody);
        var result = ServiceMgr.callRestService('customer', 'retrieve', requestBody);

        // Error while calling the service
        // The service did not returned a 20x response
        if (result.status !== 'OK') {
            LOGGER.error('Error occurred while retrieving customer profile: {0}({1}): {2}', result.status, result.msg, result.errorMessage);
            return;
        }

        // The flow always return multiple values, but we only get the first one
        var resultObject = result.object[0];

        // The service returned a 20x response, but with an error in the response body
        if (resultObject.isSuccess === false) {
            LOGGER.error('Error occurred while retrieving customer profile: {0}', JSON.stringify(resultObject.errors));
            return;
        }

        // The service returned a 20x response, but with no match on the given request body
        if (!resultObject.outputValues || !resultObject.outputValues.ContactListResolved) {
            LOGGER.error('No Salesforce Core record is matching the given request.');
            return;
        }

        // The retrieve operation succeed, return the result
        LOGGER.info('Successfully retrieved the customer profile. Here is the response body: {0}', JSON.stringify(resultObject));

        // In case the {saveContactIdOnProfile} flag is true and there is a customer authenticated
        // Then save the retrieved contact Id on the currently authenticated customer profile
        if (saveContactIdOnProfile && areDetailsAnInstanceOfProfile) {
            var accountId = resultObject.outputValues.ContactListResolved[0].AccountId;
            var contactId = resultObject.outputValues.ContactListResolved[0].Id;
            profileModel.updateSyncResponseText(require('dw/util/StringUtils').format('Successfully retrieved from Salesforce Core platform. Contact ID updated from "{0}" to "{1}"', profileDetails.custom.b2ccrm_contactId, contactId));
            profileModel.updateExternalId(accountId, contactId);
        }

        // Return the retrieve customer profile record from the Salesforce Core platform
        return resultObject.outputValues.ContactListResolved[0];
    } catch (e) {
        LOGGER.error('Error occurred while retrieving customer profile: {0}', e.message);
    }
}

module.exports.retrieve = customerRetrieve;
