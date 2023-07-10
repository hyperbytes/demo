// JavaScript Document
exports.difference = function (word1, word2, precoded) {

    return difference(word1, word2, precoded);
};

function difference(word1, word2, precoded) {

    let ct = 0;

    if (precoded != true) {

        word1 = soundex(word1, false);
        word2 = soundex(word2, false);

    }

    for (let i = 0, l = word1.length; i < l; i++) {
        if (word1[i] == word2[i]) {
            ct++
        };


    }

    return ct;
}
function soundex(name, extend) {
    let slen = extend ? 4 : 3;
    let s = [];
    let si = 1;
    let c;

    //              ABCDEFGHIJKLMNOPQRSTUVWXYZ
    let mappings = "01230120022455012623010202";

    s[0] = name[0].toUpperCase();

    for (let i = 1, l = name.length; i < l; i++) {
        c = (name[i].toUpperCase()).charCodeAt(0) - 65;

        if (c >= 0 && c <= 25) {
            if (mappings[c] != '0') {
                if (mappings[c] != s[si - 1]) {
                    s[si] = mappings[c];
                    si++;
                }

                if (si > slen) {
                    break;
                }
            }
        }
    }

    if (si <= slen) {
        while (si <= slen) {
            s[si] = '0';
            si++;
        }
    }

    return s.join("");
}