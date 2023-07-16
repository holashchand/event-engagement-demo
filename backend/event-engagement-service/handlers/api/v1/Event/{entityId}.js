'use strict';
var dataProvider = require('../../../../data/api/v1/Event/{entityId}.js');
const { getEventByOsid, updateEvent } = require('../../../../services/eventService.js');
/**
 * Operations on /api/v1/Event/{entityId}
 */
module.exports = {
    get: function (req, res, next) {
        const entityId = req?.params?.entityId;
        getEventByOsid(entityId).then(results => {
            res.send(results);
        }).catch(err => {
            next(err, req, res, next);
        });
    },
    put: function (req, res, next) {
        const entityId = req?.params?.entityId;
        updateEvent(entityId, req?.body).then(results => {
            res.send(results);
        }).catch(err => {
            next(err, req, res, next);
        });
    }
};
