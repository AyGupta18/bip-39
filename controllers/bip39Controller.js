const bip39 = require("bip39");

exports.generateMnemonic = (req, res) => {
  const mnemonic = bip39.generateMnemonic();

  res.send({ mnemonic });
};
