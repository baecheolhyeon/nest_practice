"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var criminals_service_1 = require("./criminals.service");
var router = express_1.Router();
router.get("/", criminals_service_1.readAllcriminals);
router.get("/:name", criminals_service_1.readCriminals);
router.post("/criminal", criminals_service_1.writeCriminals);
exports.default = router;
//# sourceMappingURL=criminals.route.js.map