'use strict';

const { getExhibitByQrId } = require("../../../../../services/exhibitService");

module.exports = {
    get: async (req, res, next) => {
        const qrId = req?.params.qrId;
        getExhibitByQrId(qrId)
        .then((results) => {
            res.status(200).send(results);
        }).catch((err) => {
            res.status(400).send(err?.message);
        });
    }
}