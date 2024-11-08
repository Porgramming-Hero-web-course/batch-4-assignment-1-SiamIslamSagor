{
  /* -------------------------------------------- */

  function countWordOccurrences(sentence: string, word: string): number {
    let repeatCount = 0;
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const wordsArr = lowerCaseSentence.split(" ");
    wordsArr.forEach(currentWord => {
      if (currentWord.includes(lowerCaseWord)) {
        repeatCount += 1;
      }
    });
    return repeatCount;
  }

  /* -------------------------------------------- */
}
