'use strict';
var dataProvider = require('../../../../../data/api/v1/Visitor/visit/{exhibitOsid}.js');
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
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
