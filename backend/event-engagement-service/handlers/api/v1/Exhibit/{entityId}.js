'use strict';
const { _ } = require("lodash");
const { getExhibitByOsid, updateExhibit } = require('../../../../services/exhibitService.js');
/**
 * Operations on /api/v1/Exhibit/{entityId}
 */
module.exports = {
    get: function (req, res, next) {
        const osid = req?.params?.entityId
        getExhibitByOsid(osid)
        .then(results => {
            if(_.get(results, "quizConfig.questions", []).length > 0) {
                results.quizConfig.questions = results.quizConfig.questions
                .map(d => {
                    const { correctAnswer, ...rest} = d;
                    return rest;
                });
            }
            res.send(results);
        })
        .catch(err => {
            next(err);
        })
    },
    put: function (req, res, next) {
        const entityId = req?.params?.entityId;
        updateExhibit(entityId, req?.body).then(results => {
            res.send(results);
        }).catch(err => {
            next(err);
        });
    }
};
