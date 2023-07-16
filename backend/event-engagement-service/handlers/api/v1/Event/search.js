'use strict';
var dataProvider = require('../../../../data/api/v1/Event/search.js');
const { searchEvent } = require('../../../../services/eventService.js');
/**
 * Operations on /api/v1/Event/search
 */
module.exports = {
    post: function (req, res, next) {
        searchEvent(req?.body).then(results => {
            res.send(results);
        }).catch(err => {
            next(err);
        });
    }
};
