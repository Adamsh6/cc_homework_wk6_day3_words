const IsogramFinder = function (word) {
  this.wordArray = word.toLowerCase().split('')

}

IsogramFinder.prototype.isARepeatedLetter = function(primeIndex) {
  const primeLetter = this.wordArray[primeIndex]
  slicedWord = this.wordArray
  slicedWord.splice(primeIndex, 1)
  result = slicedWord.includes(primeLetter)
  return result
}

IsogramFinder.prototype.isIsogram = function () {
  result = this.wordArray.every((letter, index) => {
    // console.log(!(this.isARepeatedLetter(index)));
    return !(this.isARepeatedLetter(index))

  })
  return result
}

module.exports = IsogramFinder;
