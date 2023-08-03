var qr = require("qr-image");
const fs = require("fs");

function generateQRCode(req, res) {
    return new Promise((resolve, reject) => {
        try {

            const url = req.body.url;

            if (url !== "") {
                const qrCode = qr.image(url, {type: 'png'});
                // qrCode.pipe(fs.createWriteStream('my_qr.png'));
                res.type('png');
                qrCode.pipe(res);
            }
            // qrCode.on('end', () => {
            //     resolve(`QR code generated for URL: ${url}`); 
            // })

            // qrCode.on('error', (err) => {
            //     reject(err);
            // })
             
        } catch (err) {
            reject(err);
        }
    });
}

module.exports = { generateQRCode }