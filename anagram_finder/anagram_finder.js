const AnagramFinder = function (word) {
  this.word = word.toLowerCase();
  this.wordLetters = word.toLowerCase().split('');
}

// AnagramFinder.prototype.hasLetter = function(){
//   testWordArray.find((testWordLetter) => {
//     return letter == testWordLetter;
//   })
// }

AnagramFinder.prototype.isAnAnagram = function(testWord){
  if(testWord.toLowerCase() === this.word){
    return false
  }
  const testWordArray = testWord.toLowerCase().split('');

  let result = this.wordLetters.every((letter) => {

    let result = testWordArray.find((testWordLetter) => {
      return letter == testWordLetter;
    })

    if(result === undefined){
      return false
    } else {
      testWordArray.splice(testWordArray.indexOf(result), 1)
      return true
    }
  })

  if(testWordArray.length > 0){
    result = false
  }
  return result
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  const anagrams = otherWords.filter((word) => {
    return this.isAnAnagram(word)
  })
  return anagrams
}

module.exports = AnagramFinder;
