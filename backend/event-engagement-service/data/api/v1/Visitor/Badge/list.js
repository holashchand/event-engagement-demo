'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /api/v1/Visitor/Badge/list
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
                path: '/api/v1/Visitor/Badge/list',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
