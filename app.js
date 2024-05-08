// CODEE DAY 1

const longestWord = (str) => {
if(str.trim().length == 0){
    return false;
}
words = str.split(' ');
return words.reduce((acum,curWord) => (curWord.length > acum.length ?curWord:acum),"")
// words = words.sort((a,b) => b.length - a.length);

// console.log(words)
// return words[0]
}
console.log(longestWord("this is a xxxxxx Samm aderson"))