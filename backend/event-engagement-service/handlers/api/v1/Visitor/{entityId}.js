'use strict';
const { result } = require('lodash');
var dataProvider = require('../../../../data/api/v1/Visitor/{entityId}.js');
const { getVisitorByOsid } = require('../../../../services/visitorService.js');
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
     */
    get: function (req, res, next) {
        const osid = req?.params?.entityId;
        getVisitorByOsid(osid)
        .then(result => {
            res.send(result);
        }).catch(err => next(err));
    },
    /**
     * summary: 
     * description: Visitor new update
     * parameters: entityId, body
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
