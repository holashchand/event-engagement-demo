'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /api/v1/Visitor/{entityId}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: entityId
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
                path: '/api/v1/Visitor/{entityId}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Visitor new update
     * parameters: entityId, body
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
                path: '/api/v1/Visitor/{entityId}',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
