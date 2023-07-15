'use strict';
var dataProvider = require('../../../data/api/v1/Exhibit.js');
const { listExhibit } = require('../../../services/exhibitService.js');
/**
 * Operations on /api/v1/Exhibit
 */
module.exports = {
    get: function (req, res, next) {
        listExhibit(res?.headers).then(results => {
            res.status(200).send(results);
        }).catch((err) => {
            res.send(400).send(err?.message);
        })
    },
    post: function (req, res, next) {
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
