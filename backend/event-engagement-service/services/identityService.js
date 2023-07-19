const { default: axios } = require("axios")
const { IDENTITY_URL } = require("../config/config")

const signCredential = async (did, payload) => {
    return axios.post(`${IDENTITY_URL}/utils/sign`, {
        DID: did,
        payload: payload
    }).then(resp => resp?.data);
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
    signCredential,
    generateDid
}