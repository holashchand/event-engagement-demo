'use strict';
const { createVisitor, listVisitor } = require('../../../services/visitorService.js');
/**
 * Operations on /api/v1/Visitor
 */
module.exports = {
    get: async function (req, res, next) {
        listVisitor(res?.headers).then(results => {
            res.status(200).send(results);
        }).catch((err) => {
            res.status(400).send(err?.message);
        })
    },
    post: async function (req, res, next) {
        createVisitor(req.body, req.headers).then(results => {
            res.status(200).send(results);
        }).catch((err) => {
            res.status(400).send(err?.message);
        })
    }
};
