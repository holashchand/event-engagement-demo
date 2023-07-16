'use strict';
const { searchExhibit } = require('../../../../services/exhibitService.js');
/**
 * Operations on /api/v1/Exhibit/search
 */
module.exports = {
    post: function (req, res, next) {
        searchExhibit(req?.body).then(results => {
            res.send(results);
        }).catch(err => {
            next(err);
        });
    }
};
