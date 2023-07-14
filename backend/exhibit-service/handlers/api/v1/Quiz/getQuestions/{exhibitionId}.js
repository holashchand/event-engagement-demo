'use strict';
var dataProvider = require('../../../../../data/api/v1/Quiz/getQuestions/{exhibitionId}.js');
/**
 * Operations on /api/v1/Quiz/getQuestions/{exhibitionId}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: exhibitionId
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
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
