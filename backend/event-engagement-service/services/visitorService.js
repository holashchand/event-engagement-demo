const { default: axios } = require("axios");
const { registryUrl } = require("../config/config");
const { getExhibitByOsid } = require("./exhibitService");
const { generateDid, getServiceAccountToken } = require("./utils");
const { _} = require("lodash");


const serviceUrl = `${registryUrl}/api/v1/Visitor`;

const createVisitor = async (payload, headers) => {
    const did = await generateDid("visitor");
    payload["did"] = `${did}`;
    const token = await getServiceAccountToken();
    return axios.post(serviceUrl, payload, {
        headers: {
        ...headers,
        "Authorization": `Bearer ${token}`
        }
    }).then(resp => resp.data);
};

const listVisitor = async (headers) => {
    const token = await getServiceAccountToken();
    return axios.get(serviceUrl, {
        headers: {
        ...headers,
        "Authorization": `Bearer ${token}`
        }
     }).then(resp => resp?.data);
};

const getVisitorByMobileNumber = async (mobileNumber) => {
    const token = await getServiceAccountToken();
    const payload = {
        "offset": 0,
        "limit": 1,
        "filters": {
          "mobileNumber": {
            "eq": mobileNumber
          }
        }
    }
    return axios.post(`${serviceUrl}/search`, payload, {
        "Authorization": `Bearer ${token}`
    }).then(results => results?.data[0]);
};

const markExhibitAsVisited = async (exhibitOsid, visitor, headers) => {
    const exhibit = await getExhibitByOsid(exhibitOsid)
    .catch(err => {
        console.log(err);
    });
    if(exhibit && !(exhibit?.osid in _.get(visitor, "exhibitsVisited", []))) {
        const payload = [..._.get(visitor, "exhibitsVisited", []), exhibitOsid];
        const response = await axios.put(`${serviceUrl}/${visitor?.osid}/exhibitsVisited`, payload).catch((err) => {
            console.log(err);
        });
        console.log(response);
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