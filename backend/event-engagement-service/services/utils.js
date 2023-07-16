const { default: axios } = require("axios");
const qs = require('qs');
const { IDENTITY_URL, REGISTRY_URL} = require("../config/config");
const { _ } = require("lodash");
const _axios = require("axios").default;
const jwt = require("jsonwebtoken");
const { getKeycloak } = require("../config/keycloak-config");
const { getExhibitByMobileNumber } = require("./exhibitService");

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
    return axios.post(`${REGISTRY_URL}/api/v1/Visitor/search`, payload).then(results => results?.data[0]);
};

const parseTokenFromRequest = (req) => {
    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    return authHeader?.split(' ')[1];
}

const getCurrentUser = async (req) => {
    const keycloak = getKeycloak();
    const token = parseTokenFromRequest(req);
    const results = await keycloak.grantManager.userInfo(token);
    let mobileNumber = _.get(results, "preferred_username");
    if (!mobileNumber) throw new Error("mobile number not valid");
    let entity = _.get(results, "entity[0]");
    if (!entity) throw new Error("Entity name not found");
    if(entity === "Visitor") {
        return getVisitorByMobileNumber(mobileNumber);
    } else if(entity === "Exhibit") {
        return getExhibitByMobileNumber(mobileNumber);
    }
    throw new Error("Entity not allowed");
}

module.exports = {
    getCurrentUser,
}