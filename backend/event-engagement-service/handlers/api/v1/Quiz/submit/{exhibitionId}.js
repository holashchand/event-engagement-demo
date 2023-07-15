'use strict';
const { submitQuiz } = require('../../../../../services/quizService.js');

/**
 * Operations on /api/v1/Quiz/submit/{exhibitionId}
 */
module.exports = {
    post: async function (req, res, next) {
        const exhibitOsid = req.params.exhibitOsid;
        const badgeWon = await submitQuiz(exhibitOsid, {...req.body});
        let message;
        if (result.badgeWon) {
            message = "Congrats! You have won a badge"
        } else {
            message = "You haven't won a badge";
        }
        res.send(200).send({ badgeWon, message });
    }
};
