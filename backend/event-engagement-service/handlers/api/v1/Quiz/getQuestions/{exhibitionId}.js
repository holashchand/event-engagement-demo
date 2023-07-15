'use strict';
const { getExhibitQuestionsByOsid } = require('../../../../../services/exhibitService.js');
/**
 * Operations on /api/v1/Quiz/getQuestions/{exhibitionId}
 */
module.exports = {
    get: function (req, res, next) {
        const exhibitOsid = req.params.osid;
        const questions = getExhibitQuestionsByOsid(exhibitOsid);
        res.status(200).send(questions);
    }
};
