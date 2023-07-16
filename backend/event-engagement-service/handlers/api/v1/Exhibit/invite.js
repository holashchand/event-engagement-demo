'use strict';

const { createExhibit } = require("../../../../services/exhibitService");

/**
 * Operations on /api/v1/Exhibit/invite
 */
module.exports = {
    post: function (req, res, next) {
        createExhibit(req?.body).then(results => {
            res.send(results);
        }).catch(err => {
            next(err);
        });
    }
};
