'use strict';
const { getQuizByOsid } = require('../../../../services/quizService.js');
const { _ } = require("lodash");
/**
 * Operations on /api/v1/Quiz/{entityId}
 */
module.exports = {
    get: async function (req, res, next) {
        const quizOsid = req.params.entityId;
        getQuizByOsid(quizOsid)
        .then(quiz => {
            if(_.get(quiz, "answers", []).length > 0) {
                quiz.answers = quiz.answers
                .map(answer => {
                    const { correctAnswer, ...rest} = answer || {};
                    return rest;
                });
            }
            res.send(quiz);
        }).catch(err => next(err));
    },
    put: function (req, res, next) {
        // update quiz
    }
};
