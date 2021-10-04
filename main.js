// let firstString = "mouse";
// let secondString = "eousm";
// let counter = 0;
// function annagram(firstString, secondString){
//     for(let i = 0; i < firstString.length; i++) {
//         for(let j = 0; j < secondString.length; j++) {
//             if(firstString[i] === secondString[j]) {
//                 counter++;
//             }else{
//                 continue;
//             }
//         }
//     }
//     if(counter == firstString.length && firstString.length == secondString.length){
//         console.log("This is an anagram!")
//     }else{
//         console.log("Some letters did not mached!");
//     }
// }

// annagram(firstString, secondString);

// let someNumber = 3243166532;

// function countNum(someNumber){
//     let stringNum = String(someNumber);
//     let counter = 0;
//     let arr = [];
//     for(let i = 0; i < stringNum.length; i++) {
//         if(arr.includes(stringNum[i])){
//             continue;
//         }else{
//             arr.push(stringNum[i]);
//         counter = 0;
//         for(let j = 0; j <stringNum.length; j++) {
//             if(stringNum[i] == stringNum[j]){
//                 counter++;
//             }
//         }
//         console.log(stringNum[i] + ' : ' + counter);
//         }
//     }
// }

// countNum(someNumber);


// let newStr = 'This is string that has has no repeats repeats';
// let newWord = [];
// let unique = [];
// let counter = 0;
// function uniqueWords(newStr) {
//     for(let i = 0; i < newStr.length; i++){
//         if(newStr[i] != ' '){
//             newWord.push(newStr[i]);
//         }else{
//             let word = newWord.join("");
//             if(unique.includes(word)){
//                 newWord = [];
//                 word = 0;
//                 continue;
//             }else{
//                 unique.push(word);
//                 newWord = [];
//                 word = 0;
//             }
//         }
//     }
//     console.log(unique);
//     console.log(counter);
// }

// uniqueWords(newStr);

// let newStr = 'This is string that has has no repeats repeats';
// let newWord = [];
// let unique = [];
// let counter = 0;
// function uniqueWords(newStr) {
//     for(let i = 0; i < newStr.length; i++){
//         if(newStr[i] != ' '){
//             newWord.push(newStr[i]);
//         }else{
//             let word = newWord.join("");
//             unique.push(word);
//             newWord = [];
//             continue;
//         }
//     }
//     if(newWord != 0){
//         let word = newWord.join("");
//         unique.push(word);
//     }
//     console.log(unique);

//     let compareArr = [];
//     for(let j = 0; j < unique.length; j++){
//         if(compareArr.includes(unique[j])){
//             compareArr.pop(j);
//             counter--;
//             continue;
//         }else{
//             compareArr.push(unique[j]);
//             counter++;
//         }
//     }
//     console.log(compareArr);
//     console.log(counter);
// }

// uniqueWords(newStr);

