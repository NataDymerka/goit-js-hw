function findLongestWord(string) {
    const words = string.split(' ');
    let longestlWord = words[0];
    for (let i = 1; i < words.length; i += 1) {
        if (words[i].length > longestlWord.length) {
            longestlWord = words[i];
        }
    }
    return longestlWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
