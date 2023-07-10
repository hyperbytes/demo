// JavaScript Document
exports.includes = function (str, trigger, offset) {
    if (str == null) return [];

    return String(str).includes(trigger, offset);
}


