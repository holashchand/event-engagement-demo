'use strict';
const { default: axios } = require('axios');
const { registryUrl } = require('../../../../../constants.js');
var dataProvider = require('../../../../../data/api/v1/Visitor/visit/{exhibitOsid}.js');
const { redirectRequest, getCurrentUser } = require('../../../../../services/utils.js');
const { markExhibitAsVisited } = require('../../../../../services/visitorService.js');
/**
 * Operations on /api/v1/Visitor/visit/{exhibitOsid}
 */
module.exports = {
    put: function (req, res, next) {
        const exhibitOsid = req.params.exhibitOsid;
        const visitor = getCurrentUser(req);
        markExhibitAsVisited(exhibitOsid, visitor, req.headers)
        .then(() => {
            res.status(200).send("Success");
        })
        .catch(() => {
            res.status(400).send("Unable to mark exhibit as visited");
        })
    }
};
