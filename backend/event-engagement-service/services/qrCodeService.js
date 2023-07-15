const QRCode = require('qrcode');
const { findCredentialsByVisitorDid } = require('./credentialService');
const { VISITOR_QR_BASE_URL } = require('../constants');


const getQrCodeForVisitorDid = async (visitor, callback) => {
    const visitorDid = visitor?.did;
    const data = `${VISITOR_QR_BASE_URL}/api/v1/QRCode/${visitorDid}/verify`
    QRCode.toDataURL(data,{type:'terminal'}, (err, url) => {
        callback && callback(err, url);
    });
}

const verifyQrCodeForVisitorDid = async (userDid) => {
    const list = await findCredentialsByVisitorDid(userDid);
    // find all credentails of a user
    // verify them
    // return valid count
}

module.exports = {
    getQrCodeForVisitorDid,
    verifyQrCodeForVisitorDid,
}