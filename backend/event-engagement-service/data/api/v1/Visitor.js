'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /api/v1/Visitor
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
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
                path: '/api/v1/Visitor',
                operation: 'get',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Create new Visitor
     * parameters: body
     * produces: 
     * responses: 200
     * operationId: 
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/api/v1/Visitor',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
