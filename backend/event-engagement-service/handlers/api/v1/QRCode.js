'use strict';
const { getQrCodeForVisitor } = require('../../../services/qrCodeService.js');
const { getCurrentUser } = require('../../../services/utils.js');
/**
 * Operations on /api/v1/QRCode/
 */
module.exports = {
    get: async function (req, res, next) {
        const visitor = await getCurrentUser(req);
        getQrCodeForVisitor(visitor, (err, url) => {
            if(err) {
                next(err, req, res, next);
            } else {
                res.status(200).send(url);
            }
        });
    }
};
