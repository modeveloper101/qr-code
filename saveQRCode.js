const fs = require("fs");


function saveQRCode() {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFile("qr.txt", "image should be here", (err) => {
                if (err) throw err;
                resolve("file created");
            })
        } catch(error) {
            reject(error);
        }
    })
}

module.exports = { saveQRCode }
