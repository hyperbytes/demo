// JavaScript Document
exports.soundex = function (name, extend) {

    return soundex(name, extend);
};

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