exports.hex2int = function (strInt) {
    return parseInt(strInt, 16) || NaN;


};

exports.int2hex = function (strHex) {

    return strHex.toString(16);
};