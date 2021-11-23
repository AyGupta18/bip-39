const express = require("express");
const bip39Router = require("./routes/bip39Routes");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/bip39", bip39Router);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
