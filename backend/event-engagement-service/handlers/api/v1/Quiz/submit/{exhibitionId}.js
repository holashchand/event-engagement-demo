'use strict';
const { submitQuiz } = require('../../../../../services/quizService.js');
const { getCurrentUser } = require('../../../../../services/utils.js');

/**
 * Operations on /api/v1/Quiz/submit/{exhibitionId}
 */
module.exports = {
    post: async function (req, res, next) {
        const exhibitOsid = req.params.exhibitionId;
        const visitor = await getCurrentUser(req);
        const badgeWon = await submitQuiz(exhibitOsid, visitor, {...req.body});
        let message;
        if (badgeWon) {
            message = "Congrats! You have won a badge"
        } else {
            message = "You haven't won a badge";
        }
        res.status(200).send({ badgeWon, message });
    }
};
