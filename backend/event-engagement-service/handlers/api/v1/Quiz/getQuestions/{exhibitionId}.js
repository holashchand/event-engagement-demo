'use strict';
const { getExhibitQuestionsByOsid } = require('../../../../../services/exhibitService.js');
/**
 * Operations on /api/v1/Quiz/getQuestions/{exhibitionId}
 */
module.exports = {
    get: async function (req, res, next) {
        const exhibitOsid = req.params.exhibitionId;
        getExhibitQuestionsByOsid(exhibitOsid)
        .then(questions => {
            res.status(200).send(questions);
        }).catch(err => {
            next(err, req, res, next);
        })
        
    }
};
