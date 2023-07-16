'use strict';
const { listEvent, createEvent } = require('../../../services/eventService.js');
/**
 * Operations on /api/v1/Event
 */
module.exports = {
    get: function (req, res, next) {
        listEvent().then(results => {
            res.send(results);
        }).catch(err => {
            next(err, req, res, next);
        });
    },
    post: function (req, res, next) {
        createEvent(req?.body).then(results => {
            res.send(results);
        }).catch(err => {
            next(err, req, res, next);
        });
    }
};
