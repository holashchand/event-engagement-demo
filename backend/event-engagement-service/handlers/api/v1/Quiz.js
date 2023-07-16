'use strict';
const { listQuiz } = require('../../../services/quizService.js');
/**
 * Operations on /api/v1/Quiz
 */
module.exports = {
    get: function (req, res, next) {
        listQuiz(req?.headers)
        .then(quizes => {
            res.send(quizes);
        })
        .catch((err) => {
            next(err, req, res, next);
        });
    }
};
