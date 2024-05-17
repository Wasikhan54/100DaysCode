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



// function countChar(str,char){
//     str = str.toLowerCase();
//     char = char.toLowerCase();
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i] === char){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countChar('development',"e"));

// const  alphaCount =(word, str) =>{
//     word = word.toLowerCase();
//     str  = str.toLowerCase();

//     total= word.split("").reduce((a ,b)=>{
//         if(b === str){
//             a++;
//         }
//         return a;

//     },0)
//     return total;
// }
// console.log(alphaCount('WASIHAN' , 'a'))


// Day 5


// const trianglecheck=(a,b,c)=>{
//     if (a===b && b===c) return"equilateral";
//     if (a===b || b===c ||a ===c) return"isoscles";
//     return 'scalene'
// }
// console.log(trianglecheck(3,3,3))
// console.log(trianglecheck(3,4,5))
// console.log(trianglecheck(3,3,5))

// Day 6


// const arr = ["wasi","fahim","taha","khan","emaaz", 1 ,3 ,5 ,66]
// console.log(arr.slice(5,8))

// var text = 0.23113;
// var newtext = Math.ceil(Math.random()*6);

// console.log(newtext))



     function tellTime() {
         var now = new Date();
         var theHr = now.getHours();
         var theMin = now.getMinutes();
         alert("Current time: "+ theHr + ":" + theMin);
         
     }tellTime()
     function greetUser() {
 alert("Hello, there.");
 }
 greetUser("wasihan")

        