"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var criminals_route_1 = require("./criminals/criminals.route");
var app = express();
var port = 8000;
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        app.use(criminals_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        app.use(function (req, res, next) {
            console.log(req.rawHeaders);
            next();
        });
        app.use(express.json());
        app.get("/:id", function (req, res, next) {
            console.log(req.params.id + "는 멋진사람입니다");
            next();
        });
        this.setRoute();
        app.use(function (req, res, next) {
            res.send({ error: "404 error not found" });
        });
    };
    Server.prototype.listen = function () {
        this.setMiddleware();
        app.listen(port, function () {
            console.log("Example app listening at http://localhost:{port}");
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map