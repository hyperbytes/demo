// JavaScript Document
const { v4: uuidv4 } = require('uuid');

exports.GetUUID = function (options) {
    return uuidv4();
}

