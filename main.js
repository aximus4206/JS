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
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(annagram(firstString, secondString));

// let someNumber = 3243166532;
// function countNum(someNumber){
//     let stringNum = String(someNumber);
//     let counter = 0;
//     let obj = {};
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
//         obj[stringNum[i]] = counter;
//         }
//     }
//     return obj;
// }
// console.log(countNum(someNumber));

// function reqoursionCountNum(someNumber, index, obj){
//     index = index || 0;
//     obj = obj || {};
//     let stringNum = String(someNumber);
//     if(stringNum.length > index){
//         obj[stringNum[index]] = ++obj[stringNum[index]] || 1;
//         reqoursionCountNum(someNumber, ++index, obj);
//     }
//     return obj;
// }
// console.log(reqoursionCountNum(someNumber));


// let newStr = 'This is string that has has no repeats repeats';
// function reqoursionUniqueWords(newStr, index, obj){
//     index = index || 0;
//     obj = obj || {};
//     let newString = newStr.replace(/\-/g, '').split(' ');
//     if(newString.length > index){
//         obj[newString[index]] = ++obj[newString[index]] || 1;
//         return reqoursionUniqueWords(newStr, ++index, obj);
//     }
//     let arr = Object.values(obj);
//     let counter = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             counter += 1;
//         }
//     }
//     return counter;
// }
// console.log(reqoursionUniqueWords(newStr));

// function uniqueWords(newStr) {
//     let newWord = [];
//     let unique = [];
//     let counter = 0;
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
//     return counter;
// }
// console.log(uniqueWords(newStr));

// function fib(n) {
//     let arrN = [];
//     let arr = [0, 1];
//     for (let i = 0; i < n; i++) {
//         arr[0] += arr[1];
//         arrN.push(arr[0]);
//         arr[1] += arr[0];
//         arrN.push(arr[1]);
//     }
//     return arrN;
// }
// console.log(fib(20));

// function reqoursionFib(n, a, b, arr, res) {
//     a = a || 0;
//     b = b || 1;
//     arr = [a, b] || [0, 1];
//     res = res || [];
//     if(n > 0){
//         a = a + b;
//         res.push(a);
//         b = b + a;
//         res.push(b);
//         return reqoursionFib(--n, a, b, arr, res);
//     }
//     return res;
// }
// console.log(reqoursionFib(20));

// let str = 'this string has no repeats no repeats and is unique string';
// function countWords(str){
//     let counter = 0;
//     let arr = [];
//     let word = [];
//     let obj = {};
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] != ' '){
//             word.push(str[i]);
//         }else{
//             let newWord = word.join('');
//             arr.push(newWord);
//             word = [];
//             continue;
//         }
//     }
//     word = [];
//     for(let n = 0; n < arr.length; n++) {
//         if(word.includes(arr[n])){
//             continue;
//         }else{
//             word.push(arr[n]);
//         counter = 0;
//         for(let j = 0; j <arr.length; j++) {
//             if(arr[n] == arr[j]){
//                 counter++;
//             }
//         }
//         obj[arr[n]] = counter;
//         }
//     }
//     return obj;
// }
// console.log(countWords(str));

// function reqoursionCountWords(str, index, obj){
//     index = index || 0;
//     obj = obj || {};
//     let newString = str.replace(/\-/g, '').split(' ');
//     if(newString.length > index){
//         obj[newString[index]] = ++obj[newString[index]] || 1;
//         return reqoursionCountWords(str, ++index, obj);
//     }
//     return obj;
// }
// console.log(reqoursionCountWords(str));

// let num = 5;
// function factorial(num){
//     let count = 1;
//     while(num > 0){
//         count *= num;
//         num--;
//     }
//     return count;
// }
// console.log(factorial(num));

// function reqoursionFactorial(num){
//     if(num != 1){
//         return num * reqoursionFactorial(num-1);
//     }
//     return 1;
// }
// console.log(reqoursionFactorial(num));

// let width = 2;
// let height = 4;
// function perimetrPar(width, height){
//     let result = (width + height)*2;
//     return result;
// }
// console.log(perimetrPar(width, height));

// function squarePar(width, height){
//     let result = width * height;
//     return result;
// }
// console.log(squarePar(width, height));

// let first = 3;
// let second = 4;
// let third = 5;
// function trianglePer(first, second, third){
//     let result = 0;
//     result = first + second + third;
//     return result;
// }
// console.log(trianglePer(first, second, third));

// function triangleSquare(first, second){
//     let result = (second * first)/2;
//     return result;
// }
// console.log(triangleSquare(first, second));

// let rad = 4;
// function perimetrCircle(rad){
//     let p = 3.14;
//     let result = 2 * p * rad;
//     return result;
// }
// console.log(perimetrCircle(rad));

// function squareCircle(rad){
//     let p = 3.14;
//     let result = p * (rad * rad);
//     return result;
// }
// console.log(squareCircle(rad));

// let arr = [2, -3, 3, 1, 5, 0, 4, 8, 9, -9, -7, -5, 6, 12, 14, 2, 7];
// function countMultiplesTwo(arr) {
//     let multiples = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             multiples += arr[i];
//         }
//     }
//     return multiples;
// }
// console.log(countMultiplesTwo(arr));

// function recoursionCountMultiplesTwo(arr, index, multiples){
//     multiples = multiples || 0;
//     index = index || 0;

//     if(arr[index] % 2 == 0){
//         multiples += arr[index];
//     }

//     if(++index < arr.length){
//         return recoursionCountMultiplesTwo(arr, index, multiples);
//     }

//     return multiples;
// }
// console.log(recoursionCountMultiplesTwo(arr));

// function countMultiplesThree(arr){
//     let multiples = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 3 == 0){
//             multiples += arr[i];
//         }
//     }
//     return multiples;
// }
// console.log(countMultiplesThree(arr));

// function recoursionCountMultiplesThree(arr, index, multiples){
//     multiples = multiples || 0;
//     index = index || 0;

//     if(arr[index] % 3 == 0){
//         multiples += arr[index];
//     }

//     if(++index < arr.length){
//         return recoursionCountMultiplesThree(arr, index, multiples);
//     }

//     return multiples;
// }
// console.log(recoursionCountMultiplesThree(arr));

// function notOvenAndPositive(arr){
//     let notOandPos = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 != 0 && arr[i] > 0){
//             notOandPos += arr[i];
//         }
//     }
//     return notOandPos;
// }
// console.log(notOvenAndPositive(arr));

// function recoursionCountNotOvenAndPos(arr, index, multiples){
//     multiples = multiples || 0;
//     index = index || 0;

//     if(arr[index] % 2 != 0 && arr[index] > 0){
//         multiples += arr[index];
//     }

//     if(++index < arr.length){
//         return recoursionCountNotOvenAndPos(arr, index, multiples);
//     }

//     return multiples;
// }
// console.log(recoursionCountNotOvenAndPos(arr));

let arr = [2, -3, 3, 1, 5, 0, 4, 8, 9, -9, -7, -5, 0, 0, 6, 12, 14, 2, 7];
// function countZero(arr){
//    let counter = 0;
//    for (let i = 0; i < arr.length; i++) {
//        if(arr[i] === 0){
//            counter++;
//        }
//    }
//    return counter;
// }
// console.log(countZero(arr));

// function recoursionCountZero(arr, index, counter){
//     counter = counter || 0;
//     index = index || 0;

//     if(arr[index] === 0){
//         counter++;
//     }

//     if(++index < arr.length){
//         return recoursionCountZero(arr, index, counter);
//     }

//     return counter;
// }
// console.log(recoursionCountZero(arr));

// function countPos(arr){
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] >= 0){
//             counter++;
//         }
//     }
//     return counter;
//  }
//  console.log(countPos(arr));

// function recoursionCountPos(arr, index, counter){
//     counter = counter || 0;
//     index = index || 0;

//     if(arr[index] >= 0){
//         counter++;
//     }

//     if(++index < arr.length){
//         return recoursionCountPos(arr, index, counter);
//     }

//     return counter;
// }
// console.log(recoursionCountPos(arr));

//  function countNeg(arr){
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < 0){
//             counter++;
//         }
//     }
//     return counter;
//  }
//  console.log(countNeg(arr));

// function recoursionCountNeg(arr, index, counter){
//     counter = counter || 0;
//     index = index || 0;

//     if(arr[index] < 0){
//         counter++;
//     }

//     if(++index < arr.length){
//         return recoursionCountNeg(arr, index, counter);
//     }

//     return counter;
// }
// console.log(recoursionCountNeg(arr));

//  function countNaturals(arr){
//     let counter = 0;
//     let arrNew = [];
//     for (let i = 0; i < arr.length; i++) {
//         if( arr[i]/arr[i] == 1 && (Math.sqrt(arr[i])*Math.sqrt(arr[i])) != arr[i] && arr[i] > 0 && arr[i] % 2 != 0 || arr[i] === 2){
//             counter++;
//             arrNew.push(arr[i]);
//         }
//     }
//     return counter;
//  }
//  console.log(countNaturals(arr));

// function recoursionCountNeg(arr, index, counter){
//     counter = counter || 0;
//     index = index || 0;

//     if(arr[index]/arr[index] == 1 && (Math.sqrt(arr[index])*Math.sqrt(arr[index])) != arr[index] && arr[index] > 0 && arr[index] % 2 != 0 || arr[index] === 2){
//         counter++;
//     }

//     if(++index < arr.length){
//         return recoursionCountNeg(arr, index, counter);
//     }

//     return counter;
// }
// console.log(recoursionCountNeg(arr));

// let num = 124;
// function secondarySystem(num) {
//     let arr = [];
//     let n;
//     let m;
//     let str;
//     while( num >= 1 ) {
//         n = num;
//         num = num/2;
//         m = num;
//         num = parseInt(num);
//         m = parseInt(m);
//         m *= 2;
//         n -= m;
//         arr.push(n);
//         m = 0;
//         n = 0;
//     }

//     arr.reverse();
//     str = arr.join("");
//     return str;
// }
// console.log(secondarySystem(num));

// let num = 124;
// function reqoursionSecondarySystem(num , str, n, m, arr, isFlag) {
//     arr = arr || [];
//     n = n || 0;
//     m = m || 0;
//     str = str || 0;
//     isFlag = isFlag || false;
//     if( num >= 1 ) {
//         n = num;
//         num = num/2;
//         m = num;
//         num = parseInt(num);
//         m = parseInt(m);
//         m *= 2;
//         n -= m;
//         arr.push(n);
//         m = 0;
//         n = 0;
//         reqoursionSecondarySystem(num , str, n, m, arr, true);
//     }
//     if(isFlag === false){
//         arr.reverse();
//         str = arr.join("");
//     }
    

//     return str;
// }
// console.log(reqoursionSecondarySystem(num));

// let str = '1111100';
// function decimalSystem(str){
//     let arr = str.split('');
//     let counter = 1;
//     let summ = 0;
//     for(let i = (arr.length-1); i >= 0; i--){
//         if(arr[i] != 0){
//             arr[i] *= counter;
//             summ += arr[i];
//             counter *= 2;
//         }else{
//             arr[i] *= counter;
//             counter *= 2;
//             summ += arr[i];
//         }
//     }
//     return summ;
// }
// console.log(decimalSystem(str));

// let multipleArr = [ [1, 2, 6, 4, 0, -7] , [9, 2, 0, 8, 5, -1, 3, 4] , [2, 0, 3, -6] , [-1, 1, 4, 7, -9, 0, 5] , ];
// function countctwo(multipleArr){
//     let counter = 0;
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if(multipleArr[i][j] % 2 == 0) {
//                 counter += multipleArr[i][j];
//             }
//         }
//     }   
//     return counter;
// }
// console.log(countctwo(multipleArr));


// function countcthree(multipleArr){
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if(multipleArr[i][j] % 3 == 0) {
//                 counter += multipleArr[i][j];
//             }
//         }
//     }   
//     return counter;
// }
// console.log(countcthree(multipleArr));

// function countNotOvenAndPos(multipleArr){
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if(multipleArr[i][j] % 2 != 0 && multipleArr[i][j] > 0) {
//                 counter += multipleArr[i][j];
//             }
//         }
//     }   
//     return counter;
// }
// console.log(countNotOvenAndPos(multipleArr));

// function countZero(multipleArr){
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if(multipleArr[i][j] === 0) {
//                 counter++;
//             }
//         }
//     }   
//     return counter;
// }
// console.log(countZero(multipleArr));

// function countPos(multipleArr){
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if(multipleArr[i][j] >= 0) {
//                 counter++;
//             }
//         }
//     }   
//     return counter;
// }
// console.log(countPos(multipleArr));


// function countNeg(multipleArr){
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if(multipleArr[i][j] < 0) {
//                 counter++;
//             }
//         }
//     }   
//     return counter;
// }
// console.log(countNeg(multipleArr));


// function countSimple(multipleArr){
    // let contrArr = [];
//     for (let i = 0; i < multipleArr.length; i++) {
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if(multipleArr[i][j]/multipleArr[i][j] == 1 && (Math.sqrt(multipleArr[i][j])*Math.sqrt(multipleArr[i][j])) != multipleArr[i][j] && multipleArr[i][j] > 0 && multipleArr[i][j] % 2 != 0 || multipleArr[i][j] === 2) {
//                 counter++;
//                 contrArr.push(multipleArr[i][j]);
//             }
//         }
//     }   
//     // return counter;
// }
// console.log(countSimple(multipleArr));

// let oneLevArr = [1, 4, -4, 3, 7, -5, 9, 6, -2, 2, 3, 8, 1, 0, 2, -6];
// function middleOneLev(oneLevArr){
//     let counter = 0;
//     let summ = 0;
//     for(let i = 0; i < oneLevArr.length; i++){
//        summ += oneLevArr[i];
//        counter++;  
//     }
//     result = summ / counter;
//     return result;
// }
// console.log(middleOneLev(oneLevArr));


// function middleOneLevOven(oneLevArr){
//     let counter = 0;
//     let summ = 0;
//     for(let i = 0; i < oneLevArr.length; i++){
//         if(oneLevArr[i] % 2 == 0){
//         summ += oneLevArr[i];
//         counter++;
//         }
//     }
//     result = summ / counter;
//     return result;
// }
// console.log(middleOneLevOven(oneLevArr));

// function middleOneLevNotOven(oneLevArr){
//     let counter = 0;
//     let summ = 0;
//     for(let i = 0; i < oneLevArr.length; i++){
//         if(oneLevArr[i] % 2 != 0){
//         summ += oneLevArr[i];
//         counter++;
//         }
//     }
//     result = summ / counter;
//     return result;
// }
// console.log(middleOneLevNotOven(oneLevArr));

// let multipleArr = [ [1, 2, 6, 4, 0, -7] , [9, 2, 0, 8, 5, -1, 3, 4] , [2, 0, 3, -6] , [-1, 1, 4, 7, -9, 0, 5] , ];
// function middleMultiLevelArr(multipleArr){
//     let counter = 0;
//     let summ = 0;
//     for(let i = 0; i < multipleArr.length; i++){
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             summ += multipleArr[i][j];
//             counter++;
//         }
//     }
//     result = summ / counter;
//     return result;
// }
// console.log(middleMultiLevelArr(multipleArr));

// function middleMultiLevelOven(multipleArr){
//     let counter = 0;
//     let summ = 0;
//     for(let i = 0; i < multipleArr.length; i++){
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if(multipleArr[i][j] % 2 == 0){
//                 summ += multipleArr[i][j];
//                 counter++;
//             }
//         }
//     }
//     result = summ / counter;
//     return result;
// }
// console.log(middleMultiLevelOven(multipleArr));

// function middleMultiLevelNotOven(multipleArr){
//     let counter = 0;
//     let summ = 0;
//     for(let i = 0; i < multipleArr.length; i++){
//         for (let j = 0; j < multipleArr[i].length; j++) {
//             if(multipleArr[i][j] % 2 != 0){
//                 summ += multipleArr[i][j];
//                 counter++;
//             }
//         }
//     }
//     result = summ / counter;
//     return result;
// }
// console.log(middleMultiLevelNotOven(multipleArr));

// let min = -25;
// let max = 75;
// function summOfRange(min, max){
//     let summ = 0;
//     for (let i = min; i <= max; i++) {
//         summ += i;
//     }
//     return summ;
// }
// console.log(summOfRange(min, max));

// function summOfRangeCThree(min, max){
//     let summ = 0;
//     for (let i = min; i <= max; i++) {
//         if(i % 3 == 0){
//             summ += i;
//         }
//     }
//     return summ;
// }
// console.log(summOfRangeCThree(min, max));

// function summOfRangeBiggerThanZ(min, max){
//     let summ = 0;
//     for (let i = min; i <= max; i++) {
//         if(i > 0){
//             summ += i;
//         }
//     }
//     return summ;
// }
// console.log(summOfRangeBiggerThanZ(min, max));


// let matrix = [
//         [1,2,3,4,5,6],
//         [1,2,3,4,5,6],
//         [1,2,3,4,5,6],
//         [1,2,3,4,5,6],
//     ];
//     function transponationMatrix(matrix) {
//         let newMatrix = [];
//         for(let i = 0; i < matrix[0].length; i++) {
//             newMatrix[i] = [];
//             // newMatrix.push([]);
//             for(let j = 0; j < matrix.length; j++) {
//                 newMatrix[i].push(matrix[j][i]);
//             }
//         }
//         return newMatrix;
//     }
//     console.log(transponationMatrix(matrix));

// let matrix1 = [
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
// ];

// let matrix2 = [
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
// ];

// function sumMatrix(matrix1, matrix2) {
//     let newMatrix = [];
//     for (let i = 0; i < matrix1.length; i++) {
//         newMatrix.push([]);
//     }

//     for(let i = 0; i < matrix1.length; i++) {
//         for(let j = 0; j < matrix1[i].length; j++) {
//             newMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
//         }
//     }
//     return newMatrix;
//     // чтобы сразу транспонировать, перед пуш заменить newMatrix[i] на newMatrix[j];
// }
// console.log(sumMatrix(matrix1, matrix2));


// let matrix = [
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 0, 5, 6],
//     [1, 0, 3, 4, 5, 6],
//     [1, 2, 7, 4, 5, 6],
// ];

// function deleteRow(matrix){
//     let len = matrix.length;
//     for (let i = matrix.length-1; i >= 0; i--) {
//         if(matrix[i].includes(0)){
//             matrix.splice(i, 1);
//         }
//     }
//     return matrix;
// }
// console.log(deleteRow(matrix));

// function deleteCol(matrix){
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = matrix[i].length-1; j >= 0 ; j--) {
//             if(matrix[i][j] === 0){
//                 matrix[i].splice(j, 1);
//             }
//         }
//     }
//     return matrix;    
// }
// console.log(deleteCol(matrix));

