'use strict';
var Mockgen = require('../../../../../mockgen.js');
/**
 * Operations on /api/v1/Exhibit/{entityId}/{property}/{propertyId}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: entityId, property, propertyId
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/v1/Exhibit/{entityId}/{property}/{propertyId}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description:  new update
     * parameters: entityId, property, propertyId, body
     * produces: 
     * responses: 200
     * operationId: 
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/v1/Exhibit/{entityId}/{property}/{propertyId}',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
