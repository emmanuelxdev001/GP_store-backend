"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sellerController_1 = require("../Controller/sellerController");
const router = (0, express_1.Router)();
router.route("/create-seller").post(sellerController_1.createSeller);
router.route("/create-dispatcher").post(sellerController_1.createDispatcher);
router.route("/sign-in").post(sellerController_1.signIn);
exports.default = router;
