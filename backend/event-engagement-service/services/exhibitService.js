const { default: axios } = require("axios");
const { registryUrl } = require("../config/config");
const { generateDid } = require("./utils");

const serviceUrl = `${registryUrl}/api/v1/Exhibit`;

const checkAnswers = (submitions, questions) => {
    const answers = questions?.map(details  => {
        const { osid, question, correctAnswer } = details;
        const answer = submitions?.answers?.find(d => d.questionOsid == osid)?.answer;
        return {
            questionOsid: osid,
            question,
            correctAnswer,
            answered: `${answer}`,
            isCorrect: answer === correctAnswer
        };
    });
    const score = answers?.filter(d => d.isCorrect).length;
    return {
        answers,
        score,
        totalScore: 5,
        badgeWon: score >= 4
    }
};

const getExhibitByOsid = async (exhibitOsid) => {
    return axios.get(`${serviceUrl}/${exhibitOsid}`, {
        'Content-Type': "application/json",
        'Accept': "*/*",
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
    return axios.get(serviceUrl, {
        headers: {
        ...headers,
        }
     }).then(resp => resp?.data)
     .catch(err => {
        if (err?.response?.status === 404) return [];
        throw err;
     });
};

const createExhibit = async (payload, headers) => {
    const did = await generateDid("exhibit");
    payload["did"] = `${did}`;
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
    const payload = {
        "offset": 0,
        "limit": 1,
        "filters": {
          "qrId": {
            "eq": qrId
          }
        }
    }
    const exhibit = await axios.post(`${serviceUrl}/search`, payload)
    .then(results => results?.data[0]);
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