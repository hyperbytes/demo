// JavaScript Document


exports.getIcalx = function (icspath) {
    const fs = require('fs-extra');
    const ical2json = require("ical2json");
    //  const { toSystemPath2 } = require('../../../lib/core/path');

    let path = '../../../download2.ics';

    const http = require('https'); // or 'https' for https:// URLs
    const file = fs.createWriteStream(path);
    const request = http.get(icspath, function (response) {
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log("Download Completed");
        });
    })

}
