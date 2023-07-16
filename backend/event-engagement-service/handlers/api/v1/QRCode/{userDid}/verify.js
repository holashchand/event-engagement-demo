'use strict';
const { verifyQrCodeForVisitorDid } = require('../../../../../services/qrCodeService.js');
/**
 * Operations on /api/v1/QRCode/{userDid}/verify
 */
module.exports = {
    get: function (req, res, next) {
        const userDid = req?.params?.userDid;
        verifyQrCodeForVisitorDid(userDid)
        .then(count => {
            res.send({ badgesWon: count });
        }).catch(err => {
            next(err, req, res, next);
        })
        
    }
};
