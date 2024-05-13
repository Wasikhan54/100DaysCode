// CODEE DAY 1

// const longestWord = (str) => {
// if(str.trim().length == 0){
    // return false;
// }
// words = str.split(' ');
// return words.reduce((acum,curWord) => (curWord.length > acum.length ?curWord:acum),"")
// words = words.sort((a,b) => b.length - a.length);

// console.log(words)
// return words[0]
// }
// console.log(longestWord("this is a xxxxxx Samm aderson"))




// // CODEE DAY 2

// function hashtagGenerate(str){
// if(str.length >280 || str.trim()=== 0 ){
//     return false;
// }
// str  = str.split(' ');
// str =  str.map((curElem) => 
//     curElem.replace(curElem[0], curElem[0].toUpperCase()));



// ===================  second option



// curElem.charAt(0).toUpperCase() + curElem.slice(1));


// str= ` #${str.join("")}`;
// console.log(str)
// }
// hashtagGenerate("muhammad wasi khan")


 // CODEE DAY 3



 function alphCount(){

    

 }
 alphCount('development')
function countChar(str,char){
    str = str.toLowerCase();
    char = char.toLowerCase();
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] === char){
            count++;
        }
    }
    return count;
}

console.log(countChar('development',"e"));



