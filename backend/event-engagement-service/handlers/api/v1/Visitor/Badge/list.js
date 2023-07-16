'use strict';
const { findCredentialsByVisitorDid } = require('../../../../../services/credentialService.js');
const { getCurrentUser } = require('../../../../../services/utils.js');
/**
 * Operations on /api/v1/Visitor/Badge/list
 */
module.exports = {
    get: async function (req, res, next) {
        try {
            const visitor = await getCurrentUser(req);
            const credentails = await findCredentialsByVisitorDid(visitor?.did);
            res.status(200).send(credentails);
        } catch(err) {
            next(err, req, res, next);
        }
    }
};
