const express = require("express");
const bip39Controller = require("../controllers/bip39Controller");

const router = express.Router();

router.get("/mnemonic-phrase", bip39Controller.generateMnemonic);

router.post("/validate-mnemonic", bip39Controller.validateMnemonic);

module.exports = router;
