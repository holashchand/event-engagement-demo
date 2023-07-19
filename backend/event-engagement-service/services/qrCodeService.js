const QRCode = require('qrcode');
const { VISITOR_QR_BASE_URL } = require('../config/config');
const { findPresentationById } = require('./presentationService');


const getQrCodeForVisitor = async (visitor, callback) => {
    const presentationDid = visitor?.latestPresentation;
    if (!presentationDid) throw new Error("Play quiz to win a Badge!")
    const data = `${VISITOR_QR_BASE_URL}/verification/${presentationDid}`
    QRCode.toDataURL(data,{type:'terminal'}, (err, url) => {
        callback && callback(err, url);
    });
}



const verifyQrCodeForPresentationDid = async (presentationId) => {
    return findPresentationById(presentationId);
}

module.exports = {
    getQrCodeForVisitor,
    verifyQrCodeForPresentationDid,
}