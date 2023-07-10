
exports.gencode = function (options) {
    options = this.parse(options);

    return 'var is: ' + options.charstring
}
