"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeCriminals = exports.readCriminals = exports.readAllcriminals = void 0;
var criminals_model_1 = require("./criminals.model");
var member = [];
var readAllcriminals = function (req, res) {
    try {
        var criminals = criminals_model_1.Criminals;
        res.status(200).send({
            success: true,
            data: { criminals: criminals },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: "failed",
        });
    }
};
exports.readAllcriminals = readAllcriminals;
var readCriminals = function (req, res) {
    try {
        var params_1 = req.params;
        criminals_model_1.Criminals.forEach(function (criminals) {
            if (criminals.name === params_1.name) {
                member.push(criminals);
            }
        });
        res.status(200).send({
            success: true,
            data: {
                member: member,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: "failed",
        });
    }
};
exports.readCriminals = readCriminals;
var writeCriminals = function (req, res) {
    try {
        var body = req.body;
        criminals_model_1.Criminals.push(body);
        res.status(200).send({
            success: true,
            data: { body: body },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: "failed",
        });
    }
};
exports.writeCriminals = writeCriminals;
//# sourceMappingURL=criminals.service.js.map