const { default: axios } = require("axios");
const { REGISTRY_URL } = require("../config/config");
const { _ } = require("lodash");
const { generateDid } = require("./credentialService");
const { findExhibitByKeyValue } = require("./exhibitService");


const serviceUrl = `${REGISTRY_URL}/api/v1/Visitor`;

const createVisitor = async (payload) => {
    const did = await generateDid("visitor");
    payload["did"] = `${did}`;
    return axios.post(serviceUrl, payload).then(resp => resp.data);
};

const listVisitor = async (headers) => {
    return axios.get(serviceUrl).then(resp => resp?.data);
};

const getVisitorByMobileNumber = async (mobileNumber) => {
    return findVisitorByKeyValue("mobileNumber", mobileNumber);;
};

const findVisitorByKeyValue = async (key, value) => {
    const payload = {
        "offset": 0,
        "limit": 1,
        "filters": {
          [key]: {
            "eq": value
          }
        }
    }
    return axios.post(`${serviceUrl}/search`, payload)
    .then(results => results?.data[0]);
};

const markExhibitAsVisited = async (exhibitQrCodeId, visitor, headers) => {
    const exhibit = await findExhibitByKeyValue("qrId", exhibitQrCodeId);
    if(exhibit && !(_.get(visitor, "exhibitsVisited", []).some(exb => exb === exhibit?.osid))) {
        const payload = [..._.get(visitor, "exhibitsVisited", []), _.get(exhibit, "osid")];
        await axios.put(`${serviceUrl}/${visitor?.osid}/exhibitsVisited`, payload);
    }
};

module.exports = {
    createVisitor,
    getVisitorByOsid: async () => {},
    updateVisitor: async () => {},
    deleteVisitor: async () => {},
    listVisitor,
    getVisitorByMobileNumber,
    markExhibitAsVisited,
}