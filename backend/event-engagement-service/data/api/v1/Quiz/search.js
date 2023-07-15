'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /api/v1/Quiz/search
 */
module.exports = {
    /**
     * summary: 
     * description: Search in quizes
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
                path: '/api/v1/Quiz/search',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
