const QRCode = require('qrcode');
const { verifiedVisitorCredentials } = require('./credentialService');
const { VISITOR_QR_BASE_URL } = require('../config/config');


const getQrCodeForVisitorDid = async (visitor, callback) => {
    const visitorDid = visitor?.did;
    const data = `${VISITOR_QR_BASE_URL}/api/v1/QRCode/${visitorDid}/verify`
    QRCode.toDataURL(data,{type:'terminal'}, (err, url) => {
        callback && callback(err, url);
    });
}

const verifyQrCodeForVisitorDid = async (userDid) => {
    return await verifiedVisitorCredentials(userDid);
}

module.exports = {
    getQrCodeForVisitorDid,
    verifyQrCodeForVisitorDid,
}