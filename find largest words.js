/*Return the length of the longest word in the provided sentence.

Your response should be a number. For these algorithms you are allowed to use the split() method.

findLongestWord("The quick brown fox jumped over the lazy dog")should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog")should return 6.
findLongestWord("May the force be with you") should return 5.
*/
function findLongestWord(sentence){
    var sen = sentence
    var senArray = sen.split(' ')
    var longestWord = 0;
    for(var i = 0; i < senArray.length; i++){
        var wordLength = senArray[i].length
        if(wordLength > longestWord){
            longestWord=wordLength
        }
    }
    // return longestWord
    console.log(longestWord);
}
findLongestWord("The quick brown fox jumpedpedpepd over the lazy dog")
findLongestWord("The quick brown fox jumped over the lazy dog")
// var newSen = '';
// var word = 'rotteRDam blAAk';
// var firstLitter = word[0].toUpperCase()
// var restWord = word.slice(1).toLowerCase()
// var newWord = firstLitter + restWord

// newSen += newWord + ' ';

// console.log(newSen);
