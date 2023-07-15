const { default: axios } = require("axios");
const { registryUrl } = require("../config/config");
const { getServiceAccountToken } = require("./utils");

const serviceUrl = `${registryUrl}/api/v1/Exhibit`;

const checkAnswers = (submitions, questions) => {
    const answers = questions?.map(details  => {
        const { osid, question, correctAnswer } = details;
        const answer = submitions?.find(d => d.questionOsid == osid)?.answer;
        return {
            questionOsid: osid,
            question,
            correctAnswer,
            answered: `${answer}`,
            isCorrect: answer === correctAnswer
        };
    });
    const score = answers.filter(d => d.isCorrect).length;
    return {
        answers,
        score,
        totalScore: 5,
        badgeWon: score >= 4
    }
};

const getExhibitByOsid = async (exhibitOsid) => {
    const token = await getServiceAccountToken();
    return axios.get(`${serviceUrl}/${exhibitOsid}`, {
        'Content-Type': "application/json",
        'Accept': "*/*",
        "Authorization": `Bearer ${token}`
    }).then(results => results.data);
};

const getExhibitQuestionsByOsid = async (exhibitOsid) => {
    return getExhibitByOsid(exhibitOsid)
    .then(d => d?.quizConfig?.questions)
    .then(d => d?.map((details) => {
        const { correctAnswer, ...rest } = details;
        return rest;
    }));
};

const listExhibit = async (headers) => {
    const token = await getServiceAccountToken();
    return axios.get(serviceUrl, {
        headers: {
        ...headers,
        "Authorization": `Bearer ${token}`
        }
     }).then(resp => resp?.data);
};

const createExhibit = async (payload, headers) => {
    const did = await generateDid("exhibit", res);
    body["did"] = `${did}`;
    const token = await getServiceAccountToken();
    return axios.post(serviceUrl, payload, {
        headers: {
        ...headers,
        "Authorization": `Bearer ${token}`
        }
    }).then(resp => resp.data);
};

const updateExhibit = (exhibit) => {
    // TODO: update exhibit
}

const deleteExhibit = (exhibitOsid) => {
    // TODO: delete exhibit
}

const getExhibitByQrId = async (qrId) => {
    const token = await getServiceAccountToken();
    const payload = {
        "offset": 0,
        "limit": 1,
        "filters": {
          "qrId": {
            "eq": qrId
          }
        }
    }
    const exhibit = await axios.post(`${serviceUrl}/search`, payload, {
        "Authorization": `Bearer ${token}`
    }).then(results => results?.data[0]);
    return exhibit;
}


module.exports = {
    createExhibit,
    getExhibitByOsid,
    getExhibitByQrId,
    getExhibitQuestionsByOsid,
    updateExhibit,
    deleteExhibit,
    listExhibit,
    checkAnswers,
}