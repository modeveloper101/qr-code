var qr = require("qr-image");
const fs = require("fs");

function generateQRCode(req, res) {
  return new Promise((resolve, reject) => {
    try {
      const url = req.body.url;

      if (url !== "") {
        const qrCode = qr.image(url, { type: "png" });
        //TODO: Save QR code to file system

        res.type("png");
        qrCode.pipe(res);
      }
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = { generateQRCode };
