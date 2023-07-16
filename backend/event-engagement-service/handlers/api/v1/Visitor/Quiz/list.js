'use strict';

const { listQuizForVisitorMobileNumber } = require("../../../../../services/quizService");
const { getCurrentUser } = require("../../../../../services/utils");

/**
 * Operations on /api/v1/Visitor/Quiz/list
 */
module.exports = {
    get: async function (req, res, next) {
        try {
            const visitor = await getCurrentUser(req);
            const quizes = await listQuizForVisitorMobileNumber(visitor?.mobileNumber);
            res.status(200).send(quizes);
        } catch (err) {
            next(err, req, res, next);
        }
        
    }
};
