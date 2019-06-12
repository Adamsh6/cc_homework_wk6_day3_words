const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  const result = this.alphabet.every((letter) => {
    return this.phrase.toLowerCase().includes(letter)
  })
  return result
}

module.exports = PangramFinder;
