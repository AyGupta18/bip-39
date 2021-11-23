const bip39 = require("bip39");

exports.generateMnemonic = (req, res) => {
  const mnemonic = bip39.generateMnemonic();

  res.send({ mnemonic });
};

exports.validateMnemonic = (req, res) => {
  const { mnemonic } = req.body;
  const isValid = bip39.validateMnemonic(mnemonic);

  res.send({ isValid });
};
