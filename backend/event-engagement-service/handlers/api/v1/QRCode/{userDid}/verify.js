'use strict';
const { verifyQrCodeForVisitorDid } = require('../../../../../services/qrCodeService.js');
/**
 * Operations on /api/v1/QRCode/{userDid}/verify
 */
module.exports = {
    get: async function (req, res, next) {
        const userDid = req?.params?.userDid;
        const count = await verifyQrCodeForVisitorDid(userDid)
        res.status(200).send({ badgesWon: count });
    }
};
