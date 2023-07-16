'use strict';

const { getExhibitByQrId } = require("../../../../../services/exhibitService");

module.exports = {
    get: async (req, res, next) => {
        const qrId = req?.params?.qrId;
        getExhibitByQrId(qrId)
        .then((results) => {
            res.send(results);
        }).catch((err) => {
            next(err);
        });
    }
}