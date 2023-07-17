const { default: axios } = require("axios");
const { CREDENTIAL_URL, CREDENTIAL_SCHEMA_URL, IDENTITY_URL } = require("../config/config");
const fs = require('fs');
const path = require('path');
const serviceUrl = `${CREDENTIAL_URL}/credentials`;
const schemaServiceUrl = `${CREDENTIAL_SCHEMA_URL}/credential-schema`;
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
            "work": `${_.get(exhibit, "name")}}`
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

const generateDid = async (entityName) => {
    console.log("generating a did for ", entityName);
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
    const did = await axios.post(`${IDENTITY_URL}/did/generate`, payload)
    .then(result => {
        return result?.data[0]?.id;
    });
    console.log("did: ", did);
    return did || "default";
}

module.exports = {
    createCredential,
    findCredentialsByVisitorDid,
    verifiedVisitorCredentials,
    generateDid,
}