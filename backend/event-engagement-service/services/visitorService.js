const { default: axios } = require("axios");
const { REGISTRY_URL } = require("../config/config");
const { getExhibitByOsid } = require("./exhibitService");
const { _} = require("lodash");
const { generateDid } = require("./credentialService");


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
    const payload = {
        "offset": 0,
        "limit": 1,
        "filters": {
          "mobileNumber": {
            "eq": mobileNumber
          }
        }
    }
    return axios.post(`${serviceUrl}/search`, payload)
    .then(results => results?.data[0]);
};

const markExhibitAsVisited = async (exhibitOsid, visitor, headers) => {
    const exhibit = await getExhibitByOsid(exhibitOsid);
    if(exhibit && !(_.get(visitor, "exhibitsVisited", []).some(exb => exb === exhibit?.osid))) {
        const payload = [..._.get(visitor, "exhibitsVisited", []), exhibitOsid];
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