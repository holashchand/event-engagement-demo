const { default: axios } = require("axios");
const { checkAnswers, getExhibitByOsid } = require("./exhibitService");
const { createCredential, generateDid } = require("./credentialService");
const { REGISTRY_URL } = require("../config/config");
const { _ } = require("lodash");

const serviceUrl = `${REGISTRY_URL}/api/v1/Quiz`;

const createOrUpdate = async (exhibit, visitor, results) => {
    let quiz = await findQuizForVisitorMobileNumberAndExhibitOsid(visitor?.mobileNumber, exhibit?.osid);
    const quizExists = !!quiz;
    if (!quizExists) {
        quiz = {};
        const did = await generateDid("quiz");
        quiz.did = did;
        quiz.exhibitDetails = {
            osid: _.get(exhibit, "osid", ""),
            name: _.get(exhibit, "exhibitDetails.name", ""),
            organization: _.get(exhibit, "exhibitDetails.organization", "",)
        }
        quiz.title = _.get(exhibit, "quizConfig.title", _.get(exhibit, "exhibitDetails.name", "default"));
        quiz.visitorName = _.get(visitor, "name");
        quiz.visitorMobileNumber = _.get(visitor, "mobileNumber");
        quiz.attemptCount = 1;
    } else {
        quiz.attemptCount += 1;
    }
    quiz.date = new Date().toISOString();
    quiz = {...quiz, results};
    let url = `${serviceUrl}`;
    let method = 'post';
    if (quizExists) {
        url = `${serviceUrl}/${quizOsid}`;
        method = 'put';
    }
    await axios.request({
        url,
        method,
        headers: {
            'Content-Type': "application/json",
            'Accept': "*/*",
        },
        data: quiz
    });
};

const getQuizByOsid = async (quizOsid) => {
    return axios.get(`${serviceUrl}/${quizOsid}`, {
        'Content-Type': "application/json",
        'Accept': "*/*",
    }).then(results => results.data);
};

const findQuizForVisitorMobileNumberAndExhibitOsid = async (mobileNumber, exhibitOsid) => {
    const payload = {
        offset: 0,
        limit: 1,
        filters: {
          visitorMobileNumber: {
            eq: `${mobileNumber}`
          },
          'exhibitDetails.osid': {
            eq: exhibitOsid
          }
        }
    };
    return axios.post(`${serviceUrl}/search`, payload)
    .then(results => results?.data[0]);
};

const listQuizForVisitorMobileNumber = async (mobileNumber) => {
    const payload = {
        offset: 0,
        limit: 1000,
        filters: {
          visitorMobileNumber: {
            eq: `${mobileNumber}`
          }
        }
    };
    return axios.post(`${serviceUrl}/search`, payload)
    .then(results => results.data);
};

const submitQuiz = async (exhibitOsid, visitor, submissions) => {
    const exhibit = await getExhibitByOsid(exhibitOsid);
    const result = checkAnswers(submissions, exhibit?.quizConfig?.questions);
    await createOrUpdate(exhibit, visitor, result);
    if (result?.badgeWon) {
        await createCredential(exhibit, visitor);
    }
    return result?.badgeWon;
};

const listQuiz = async (headers) => {
    return axios.get(serviceUrl).then(resp => resp?.data);
};

module.exports = {
    createQuiz: () => {},
    createOrUpdate,
    getQuizByOsid,
    deleteQuiz: async () => {},
    listQuiz,
    listQuizForVisitorMobileNumber,
    submitQuiz,
    searchQuiz: async () => {}
}