'use strict';
const { createVisitor, listVisitor } = require('../../../services/visitorService.js');
/**
 * Operations on /api/v1/Visitor
 */
module.exports = {
    get: async function (req, res, next) {
        listVisitor(req?.headers).then(results => {
            res.status(200).send(results);
        }).catch((err) => {
            next(err, req, res, next);
        })
    },
    post: async function (req, res, next) {
        createVisitor(req.body, req.headers).then(results => {
            console.log("created visitor", results);
            res.status(200).send(results);
        }).catch((err) => {
            console.log("got error while creating a visitor", err);
            next(err, req, res, next);
        })
    }
};
