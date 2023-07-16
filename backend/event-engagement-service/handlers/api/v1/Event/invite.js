'use strict';
var dataProvider = require('../../../../data/api/v1/Event/invite.js');
const { createEvent } = require('../../../../services/eventService.js');
/**
 * Operations on /api/v1/Event/invite
 */
module.exports = {
    post: function (req, res, next) {
        createEvent(req?.body).then(results => {
            res.send(results);
        }).catch(err => {
            next(err, req, res, next);
        });
    }
};
