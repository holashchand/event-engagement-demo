'use strict';
var Mockgen = require('../../../../mockgen.js');
/**
 * Operations on /api/v1/Visitor/visit/{exhibitOsid}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: exhibitOsid
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
                path: '/api/v1/Visitor/visit/{exhibitOsid}',
                operation: 'put',
                response: '200'
            }, callback);
        }
    }
};
