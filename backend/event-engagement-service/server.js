'use strict';

var Http = require('http');
var Express = require('express');
var BodyParser = require('body-parser');
var Swaggerize = require('swaggerize-express');
var Path = require('path');
const constants = require('./config/config');

var App = Express();

var Server = Http.createServer(App);

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

App.use(Swaggerize({
    api: Path.resolve('./config/swagger.yml'),
    handlers: Path.resolve('./handlers')
}));

App.use(function(err, req, res, next) {
    console.error("Error occurred for ")
    console.error("URL: ", req.url)
    if (config.LOG_LEVEL === "DEBUG") {
        console.error("BODY: ", req.body)
        console.error("HEADERS: ", req.headers)
    }
    console.error(err)
    res.status(500).send({
        "id": "sunbird-rc.registry." + req.method,
        "ver": "1.0",
        "ets": 1689408594416,
        "params": {
            "resmsgid": "",
            "msgid": "",
            "err": "",
            "status": "UNSUCCESSFUL",
            "errmsg": err.message
        },
        "responseCode": "OK",
        "result": {}
    })
});

Server.listen(8000, function () {
    console.log("Server URL: ", constants.credentialSchemaUrl);
    App.swagger.api.host = this.address().address + ':' + this.address().port;
    /* eslint-disable no-console */
    console.log('App running on %s:%d', this.address().address, this.address().port);
    /* eslint-disable no-console */
});
