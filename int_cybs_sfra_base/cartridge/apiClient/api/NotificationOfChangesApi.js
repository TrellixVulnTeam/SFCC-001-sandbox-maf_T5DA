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
    define(['ApiClient', 'model/ReportingV3NotificationofChangesGet200Response', 'model/Reportingv3ReportDownloadsGet400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReportingV3NotificationofChangesGet200Response'), require('../model/Reportingv3ReportDownloadsGet400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.NotificationOfChangesApi = factory(root.CyberSource.ApiClient, root.CyberSource.ReportingV3NotificationofChangesGet200Response, root.CyberSource.Reportingv3ReportDownloadsGet400Response);
  }
}(this, function(ApiClient, ReportingV3NotificationofChangesGet200Response, Reportingv3ReportDownloadsGet400Response) {
  'use strict';

  /**
   * NotificationOfChanges service.
   * @module api/NotificationOfChangesApi
   * @version 0.0.1
   */

  /**
   * Constructs a new NotificationOfChangesApi. 
   * @alias module:api/NotificationOfChangesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the getNotificationOfChangeReport operation.
     * @callback module:api/NotificationOfChangesApi~getNotificationOfChangeReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportingV3NotificationofChangesGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Notification of Changes
     * Download the Notification of Change report. This report shows eCheck-related fields updated as a result of a response to an eCheck settlement transaction. 
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {module:api/NotificationOfChangesApi~getNotificationOfChangeReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportingV3NotificationofChangesGet200Response}
     */
    this.getNotificationOfChangeReport = function(startTime, endTime, callback) {
      var postBody = null;

      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling getNotificationOfChangeReport");
      }

      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling getNotificationOfChangeReport");
      }


      var pathParams = {
      };
      var queryParams = {
        'startTime': startTime,
        'endTime': endTime
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json', 'text/csv', 'application/xml'];
      var returnType = ReportingV3NotificationofChangesGet200Response;

      return this.apiClient.callApi(
        '/reporting/v3/notification-of-changes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
