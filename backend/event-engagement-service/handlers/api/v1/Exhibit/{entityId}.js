'use strict';
const { _ } = require("lodash");
var dataProvider = require('../../../../data/api/v1/Exhibit/{entityId}.js');
const { getExhibitByOsid } = require('../../../../services/exhibitService.js');
/**
 * Operations on /api/v1/Exhibit/{entityId}
 */
module.exports = {
    get: function (req, res, next) {
        const osid = req.params.entityId
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
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
