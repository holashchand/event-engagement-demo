'use strict';
const { listQuiz } = require('../../../services/quizService.js');
/**
 * Operations on /api/v1/Quiz
 */
module.exports = {
    get: async function (req, res, next) {
        const quizes = await listQuiz(req?.headers);
        return quizes;
    }
};
