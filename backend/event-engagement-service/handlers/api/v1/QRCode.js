'use strict';
const { getQrCodeForVisitorDid } = require('../../../services/qrCodeService.js');
const { getCurrentUser } = require('../../../services/utils.js');
/**
 * Operations on /api/v1/QRCode/
 */
module.exports = {
    get: async function (req, res, next) {
        const visitor = await getCurrentUser(req);
        getQrCodeForVisitorDid(visitor, (err, url) => {
            if(err) {
                next(err);
            } else {
                res.status(200).send(url);
            }
        });
    }
};
