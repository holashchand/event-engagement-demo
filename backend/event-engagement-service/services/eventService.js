
const { REGISTRY_URL } = require("../config/config");
const { _} = require("lodash");
const { generateDid } = require("./credentialService");


const serviceUrl = `${REGISTRY_URL}/api/v1/Event`;

const createEvent = async (payload) => {
    const did = await generateDid("event");
    payload["did"] = `${did}`;
    return axios.post(serviceUrl, payload).then(resp => resp.data);
};

const updateEvent = async (osid, payload) => {
    const event = await getEventByOsid(osid);
    const finalEvent = {...event, ...payload};
    if (!finalEvent?.did) {
        const did = await generateDid("event");
        finalEvent["did"] = `${did}`;
    }
    return axios.put(serviceUrl, finalEvent).then(resp => resp.data);
};

const getEventByOsid = async (eventOsid) => {
    return axios.get(`${serviceUrl}/${eventOsid}`, {
        'Content-Type': "application/json",
        'Accept': "*/*",
    }).then(results => results.data);
};

const listEvent = async (headers) => {
    return axios.get(serviceUrl).then(resp => resp?.data);
};

const searchEvent = async (payload) => {
    return await axios.post(`${serviceUrl}/search`, payload)
    .then(results => results?.data);
}


module.exports = {
    createEvent,
    getEventByOsid,
    updateEvent,
    deleteEvent: () => {},
    listEvent,
    searchEvent,
}