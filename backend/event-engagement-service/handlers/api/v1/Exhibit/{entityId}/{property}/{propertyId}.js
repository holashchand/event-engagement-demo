'use strict';
var dataProvider = require('../../../../../../data/api/v1/Exhibit/{entityId}/{property}/{propertyId}.js');
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
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err, req, res, next);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: 
     * description:  new update
     * parameters: entityId, property, propertyId, body
     * produces: 
     * responses: 200
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err, req, res, next);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
