const { default: axios } = require("axios");
const { REGISTRY_URL } = require("../config/config");
const { findCredentialsByVisitorDid } = require("./credentialService");
const { signCredential, generateDid } = require("./identityService");
const { updateVisitorProperty } = require("./visitorService");

const serviceUrl = `${REGISTRY_URL}/api/v1/Presentation`;

let vc;
const setup = async () => {
    vc = await import('@digitalbazaar/vc');
}

const updateLatestPresentation = async (visitor) => {
    if(!vc) await setup();
    const vcs = await findCredentialsByVisitorDid(visitor?.did);
    if (vcs?.length < 1) throw new Error("You have not won a quiz");
    const verifiableCredential = vcs; // either array or single object

    // optional `id` and `holder`
    const id = await generateDid("badge:presentation");
    const holder = visitor?.did;

    const presentation = vc.createPresentation({
        verifiableCredential, id, holder
    });

    const signedPresentation = await signCredential(visitor?.did, presentation);

    await axios.post(`${serviceUrl}`, {
        id,
        ...signedPresentation,
    });

    await updateVisitorProperty(visitor?.osid, "latestPresentation", id);

    console.log(JSON.stringify(presentation, null, 2));
    return presentation;

}

const findPresentationById = async (id) => {
    const payload = {
        "offset": 0,
        "limit": 1,
        "filters": {
          "id": {
            "eq": id
          }
        }
    }
    return axios.post(`${serviceUrl}/search`, payload)
    .then(results => results?.data?.length > 0 && results?.data[0]);
}


module.exports = {
    findPresentationById,
    updateLatestPresentation
}