function uniqueDuplicates(array) {
    return array.filter(function (val, index) {
        return array.indexOf(val) !== array.lastIndexOf(val) &&  index <= array.indexOf(val);
    })
}

module.exports = uniqueDuplicates;
