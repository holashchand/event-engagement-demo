const { default: axios } = require("axios");
const { registryUrl } = require("../constants");
const { getExhibitByOsid } = require("./exhibitService");
const { generateDid, getServiceAccountToken } = require("./utils");


const serviceUrl = `${registryUrl}/api/v1/Visitor`;

const createVisitor = async (payload, headers) => {
    const did = await generateDid("visitor", res);
    body["did"] = `${did}`;
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
    if(exhibit && !(exhibit?.osid in visitor?.exhibitVisted)) {
        const payload = {
            exhibitVisted: [...exhibitVisted, exhibitOsid]
        }
        await axios.put(`${serviceUrl}/${visitor?.osid}/exhibitsVisited`, payload, {
            headers: { ...headers }
        });
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