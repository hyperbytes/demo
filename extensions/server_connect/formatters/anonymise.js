// JavaScript Document
exports.anonymise = function (xstr) {

    return xnumtostr(xstr);
};

function xnumtostr(xstr) {
    ystr = xstr.toString(16);
    xstr = xstr.toString();
    let retstr = '';
    let g = xstr.length;
    for (var i = 0; i < g; i++) {
        retstr = retstr + encrypter(xstr[i], 10);

    }
    return ystr.toUpperCase() + retstr;
}

function encrypter(char, shift) {
    const alphabet = [
        '0', '1', '2',
        '3', '4', '5', '6', '7', '8',
        '9', 'Z', 'Q', 'G', 'K', 'R', 'N',
        'X', 'W', 'O', 'P', 'V', 'L',
        'M', 'F', 'I', 'J', 'B', 'E',
        'S', 'T', 'U', 'D', 'H', 'H',
        'Y', 'A'
    ];
    let include = alphabet.includes(char.toUpperCase());

    if (include) {
        let position =
            alphabet.indexOf(char.toUpperCase());

        let newPosition = (position + shift) % alphabet.length;
        return alphabet[newPosition];
    }
    else
        return char;
}
