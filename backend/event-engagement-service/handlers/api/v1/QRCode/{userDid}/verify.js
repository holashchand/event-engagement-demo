'use strict';
const { verifyQrCodeForVisitorDid } = require('../../../../../services/qrCodeService.js');
/**
 * Operations on /api/v1/QRCode/{userDid}/verify
 */
module.exports = {
    get: async function (req, res, next) {
        const userDid = req?.params?.userDid;
        await verifyQrCodeForVisitorDid(userDid)
        .then((results) => {
            res.status(200).send(results);
        }).catch((err) => {
            res.status(400).send(err?.message);
        });
    }
};
