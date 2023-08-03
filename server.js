const express = require("express");
const { generateQRCode } = require("./qrCodeGenerator");
const { saveQRCode } = require("./saveQRCode");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.post("/generateQRCode", (req, res) => {
  generateQRCode(req, res)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(500).send("Error generating QR Code" + error);
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
