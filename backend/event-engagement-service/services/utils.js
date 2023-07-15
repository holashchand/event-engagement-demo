const { default: axios } = require("axios");
const qs = require('qs');
const { SERVICE_ACCOUNT_CLIENT_SECRET, KEYCLOAK_URL, identityUrl, registryUrl} = require("../config/config");
// const { getVisitorByMobileNumber } = require("./visitorService");
const { _ } = require("lodash");
const _axios = require("axios").default;
const jwt = require("jsonwebtoken");

const result = (promise, res) => {
    return promise.then(result => {
        res.status(result.status).set(result.headers).send(result.data);
    }).catch(({ response: { status, headers, data} }) => {
        res.status(status).set(headers).send(data);
    })
}

const redirectRequest = {
    post: (url, body, headers, res, customHeaders) => result(_axios.post(url, body,
        { headers: {...headers, ...customHeaders} }), res),
    put: (url, req, res, customHeaders) => result(_axios.put(url, req.body,
        { headers: {...req.headers, ...customHeaders} }), res),
    get: (url, req, res, customHeaders) => result(_axios.get(url,
        { headers: {...req.headers, ...customHeaders} }), res),
    delete: (url, req, res, customHeaders) => result(_axios.delete(url,
        { headers: {...req.headers, ...customHeaders} }), res),
}

const generateDid = async (entityName, res) => {
    const payload = {
        "content": 
            [
                {
                    "alsoKnownAs": [],
                    "services": [
                        {
                            "id": "IdentityHub",
                            "type": "IdentityHub",
                            "serviceEndpoint": {
                                "@context": "schema.identity.foundation/hub",
                                "@type": "UserServiceEndpoint",
                                "instance": [
                                    "did:test:hub.id"
                                ]
                            }
                        }
                    ],
                    "method": `upai:${entityName}`
                }
            ]
        
    }
    const did = await axios.post(`${identityUrl}/did/generate`, payload)
    .then(result => {
        return result.data[0].id;
    })
    .catch(({ response: { status, headers, data} }) => {
        res && res.status(status).set(headers).send(data);
    })
    return did || "default";
}

const getServiceAccountToken = async () => {
    const response = await axios({
            method: 'post',
            url: `${KEYCLOAK_URL}/realms/sunbird-rc/protocol/openid-connect/token`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
                'grant_type': 'client_credentials',
                'client_id': 'event-engagement-service',
                'client_secret': SERVICE_ACCOUNT_CLIENT_SECRET
            })
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    return response.access_token;
}

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
    return axios.post(`${registryUrl}/api/v1/Visitor/search`, payload, {
        "Authorization": `Bearer ${token}`
    }).then(results => results?.data[0]);
};

const getCurrentUser = async (req) => {
    // TODO: find mobile number from token
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const results = jwt.decode(token);
    let mobileNumber = _.get(results, "preferred_username");
    if (!mobileNumber) throw new Error("mobile number not valid")
    return getVisitorByMobileNumber(mobileNumber);
}

module.exports = {
    redirectRequest,
    generateDid,
    getServiceAccountToken,
    getCurrentUser,
}