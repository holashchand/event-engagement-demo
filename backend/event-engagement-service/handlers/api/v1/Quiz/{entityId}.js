'use strict';
var dataProvider = require('../../../../data/api/v1/Quiz/{entityId}.js');
const { getQuizByOsid } = require('../../../../services/quizService.js');
/**
 * Operations on /api/v1/Quiz/{entityId}
 */
module.exports = {
    get: async function (req, res, next) {
        const quizOsid = req.params.entityId;
        const quiz = await getQuizByOsid(quizOsid);
        res.status(200).send(quiz);
    },
    put: function (req, res, next) {
        // update quiz
    }
};
