'use strict';
var dataProvider = require('../../../data/api/v1/Exhibit.js');
const { listExhibit, createExhibit } = require('../../../services/exhibitService.js');
/**
 * Operations on /api/v1/Exhibit
 */
module.exports = {
    get: function (req, res, next) {
        listExhibit(req?.headers).then(results => {
            res.status(200).send(results);
        }).catch((err) => {
            next(err)
        })
    },
    post: function (req, res, next) {
        createExhibit(req.body, req.headers).then(results => {
            res.status(200).send(results);
        }).catch((err) => {
            next(err)
        })
    }
};
