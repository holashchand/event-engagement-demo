'use strict';
var dataProvider = require('../../../../data/api/v1/Visitor/details.js');
const { getCurrentUser } = require('../../../../services/utils.js');
/**
 * Operations on /api/v1/Visitor/details
 */
module.exports = {
    get: async function (req, res, next) {
        getCurrentUser(req)
        .then(visitor => {
            res.status(200).send(visitor);
        })
        .catch(err => {
            next(err, req, res, next);
        });
        
    }
};
