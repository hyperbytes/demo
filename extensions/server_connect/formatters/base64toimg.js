// JavaScript Document
const { toSystemPath } = require('../../../lib/core/path');
const fs = require('fs')
exports.base64toimg = function (strg) {
    return base64toimg(strg)


};
function base64toimg(strg) {
    //let buff = Buffer.from(strg, "binary");
    let path = toSystemPath('/public/assets/test') + '/myqrcode.png';
    array = new BigInt64Array(0);
    buffer = Buffer.from(array.buffer)
    fs.createWriteStream(path).write(strg);
    // fs.writeFileSync(path, strg);
}