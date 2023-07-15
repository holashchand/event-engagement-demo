const { default: axios } = require("axios");
const { credentialUrl, credentialSchemaUrl } = require("../config/config");
const { generateDid } = require("./utils");
const fs = require('fs');
const path = require('path');
const serviceUrl = `${credentialUrl}/credentials`;
const schemaServiceUrl = `${credentialSchemaUrl}/credential-schema`;
const { _ } = require("lodash");

const findCredentialsByVisitorDid = async (did) => {
    const payload = {
        subject: {
            id: `${did}`
        }
    };
    return axios.post(`${serviceUrl}/search`, payload)
    .then(results => results.data)
    .catch(() => []);
};

const getOrCreateCredentialSchema = async () => {
    const schemas = await axios.get(`${schemaServiceUrl}?tags=BadgeSchema3&page=1&limit=1`)
    .then(resp => resp?.data);
    if(schemas && schemas.length == 1) {
        return schemas[0];
    }
    const did = await generateDid("schema:badge");
    var jsonPath = path.join(__dirname, '..', 'config', 'CredentialSchema.json');
    var rawdata = fs.readFileSync(jsonPath, 'utf8');
    const schemaRequest = {};
    schemaRequest.schema = JSON.parse(rawdata);
    schemaRequest.schema.author = did;
    schemaRequest.tags = ['BadgeSchema3'];
    schemaRequest.status = 'DRAFT';
    return axios.post(schemaServiceUrl, schemaRequest, {
        headers: {
        "Content-Type": "application/json"
        }
    }).then(resp => resp?.data);
}

const createCredential = async (exhibit, visitor) => {
    const schema = await getOrCreateCredentialSchema();
    const credentials = {
        "@context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://www.w3.org/2018/credentials/examples/v1"
        ],
        "id": "did:visitor:upai:4c9f2aec-a5b8-431f-98bc-00861e964c30",
        "type": [
            "VerifiableCredential"
        ],
        "expirationDate": "2100-02-08T11:56:27.259Z",
        "issuer": _.get(exhibit, "did"),
        "credentialSubject": {
            "id": _.get(visitor, "did"),
            "name": _.get(visitor, "name"),
            "mobileNumber": _.get(visitor, "mobileNumber"),
            "work": `${_.get(exhibit, "name")}-${_.get(exhibit, "quizConfig.title")}`
        }
    };
    const payload = {
        credential: credentials,
        credentialSchemaId: _.get(schema, "schema.id", ""),
        credentialSchemaVersion: _.get(schema, "schema.version", ""),
        tags: [_.get(visitor, "osid", "")]
    }
    return axios.post(`${serviceUrl}/issue`, payload, {
        headers: {
        "Content-Type": "application/json"
        }
    }).then(resp => resp?.data);

}

const verifyCredential = async (credentialId) => {
    return axios.get(`${serviceUrl}/${credentialId}/verify`)
    .then(result => {
        return result?.data?.checks?.every(d => {
            return d?.active === "OK" && d?.revoked === "OK" && d?.expired === "OK"
            && d?.proof === "OK";
        });
    })
    .catch((err) => {
        console.log(err);
        return false;
    });
}

const verifiedVisitorCredentials = async (visitorDid) => {
    const list = await findCredentialsByVisitorDid(visitorDid);
    const results = await Promise.all(list.map(d => verifyCredential(_.get(d, "id", ""))));
    const count = results?.filter(d => d)?.length || 0;
    return count;
}

module.exports = {
    createCredential,
    findCredentialsByVisitorDid,
    verifiedVisitorCredentials,
}