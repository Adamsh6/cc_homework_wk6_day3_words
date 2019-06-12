const UpperCaser = function (words) {
  this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
  const upWords = this.words.map((word) => {
    return word.toUpperCase();
  })
  return upWords
}

module.exports = UpperCaser;
