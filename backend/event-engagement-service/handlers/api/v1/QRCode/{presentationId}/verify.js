'use strict';
const { verifyQrCodeForPresentationDid } = require('../../../../../services/qrCodeService.js');
/**
 * Operations on /api/v1/QRCode/{presentationId}/verify
 */
module.exports = {
    get: function (req, res, next) {
        const presentationId = req?.params?.presentationId;
        verifyQrCodeForPresentationDid(presentationId)
        .then(presentation => {
            res.send(presentation);
        }).catch(err => {
            next(err, req, res, next);
        })
        
    }
};
