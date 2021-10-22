
function memoize(func, ...obj) {
    let cache = {};
    cache[obj] = cache[obj] || {};
    console.log(cache);
    return function (...par) {
        if (cache[obj][par] != undefined) {
            return cache[obj][par];
        } else {
            let result = func(...par);
            cache[obj][par] = result;
            return result;
        }
    }
}

const numberCounterMemoizer = memoize(function(nums, index, obj){
    index = index || 0;
    obj = obj || {};
    let mass_nums = nums.toString().split('');
    if (mass_nums.length > index) {
        obj[mass_nums[index]] = ++obj[mass_nums[index]] || 1;
        return numberCounterMemoizer(nums, ++index, obj);
    }
    return obj;
}, 'numberCounterRecusrion');

console.log(numberCounterMemoizer);

let firstString = "mouse";
let secondString = "eousm";

function annagram(firstString, secondString){
    let counter = 0;
    for(let i = 0; i < firstString.length; i++) {
        for(let j = 0; j < secondString.length; j++) {
            if(firstString[i] === secondString[j]) {
                counter++;
            }else{
                continue;
            }
        }
    }
    if(counter == firstString.length && firstString.length == secondString.length){
        return true;
    }else{
        return false;
    }
}

const memoizeAn = memoize(function reqAnagramm(firstString, secondString, index, pos, counter, arr){
    index = index || 0;
    pos = pos || 0;
    counter = counter || 0;
    arr = arr || [];
    newStr1 = firstString.split('');
    newStr2 = secondString.split('');
    if(index < newStr1.length){
        if(newStr2.includes(newStr1[index])){
            arr.push(newStr1[index]);
        }else{
            return false;
        }
        reqAnagramm(firstString, secondString, ++index, pos, counter, arr);
    }
    
    return arr.length == newStr1.length;
}, 'memoize anagramm');

// let someNumber = 3243166532;
function countNum(someNumber){
    let stringNum = String(someNumber);
    let counter = 0;
    let obj = {};
    let arr = [];
    for(let i = 0; i < stringNum.length; i++) {
        if(arr.includes(stringNum[i])){
            continue;
        }else{
            arr.push(stringNum[i]);
        counter = 0;
        for(let j = 0; j <stringNum.length; j++) {
            if(stringNum[i] == stringNum[j]){
                counter++;
            }
        }
        obj[stringNum[i]] = counter;
        }
    }
    return obj;
}

const memoizereqoursionCountNum = memoize(function reqoursionCountNum(someNumber, index, obj){
    index = index || 0;
    obj = obj || {};
    let stringNum = String(someNumber);
    if(stringNum.length > index){
        obj[stringNum[index]] = ++obj[stringNum[index]] || 1;
        reqoursionCountNum(someNumber, ++index, obj);
    }
    return obj;
}, 'memoize count numbers');

// let newStr = 'This is string that has has no repeats repeats';
const memoizeUniqueWords = memoize(function reqoursionUniqueWords(newStr, index, obj){
    index = index || 0;
    obj = obj || {};
    let newString = newStr.replace(/\-/g, '').split(' ');
    if(newString.length > index){
        obj[newString[index]] = ++obj[newString[index]] || 1;
        return reqoursionUniqueWords(newStr, ++index, obj);
    }
    let arr = Object.values(obj);
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            counter += 1;
        }
    }
    return counter;
}, 'memoize unique words');

function uniqueWords(newStr) {
    let newWord = [];
    let unique = [];
    let counter = 0;
    for(let i = 0; i < newStr.length; i++){
        if(newStr[i] != ' '){
            newWord.push(newStr[i]);
        }else{
            let word = newWord.join("");
            unique.push(word);
            newWord = [];
            continue;
        }
    }
    if(newWord != 0){
        let word = newWord.join("");
        unique.push(word);
    }
    let compareArr = [];
    for(let j = 0; j < unique.length; j++){
        if(compareArr.includes(unique[j])){
            compareArr.pop(j);
            counter--;
            continue;
        }else{
            compareArr.push(unique[j]);
            counter++;
        }
    }
    return counter;
}

function fib(number) {
    let arrNew = [];
    let arr = [0, 1];
    for (let i = 0; i < number; i++) {
        arr[0] += arr[1];
        arrNew.push(arr[0]);
        arr[1] += arr[0];
        arrNew.push(arr[1]);
    }
    return arrNew;
}

const memoizeFib = memoize(function reqoursionFib(number, firstNum, secondNum, arr, result) {
    firstNum = firstNum || 0;
    secondNum = secondNum || 1;
    arr = [firstNum, secondNum] || [0, 1];
    result = result || [];
    if(number > 0){
        firstNum = firstNum + secondNum;
        res.push(firstNum);
        secondNum = secondNum + firstNum;
        res.push(secondNum);
        return reqoursionFib(--number, firstNum, secondNum, arr, res);
    }
    return result;
}, 'n numbers fibanachi');

// let str = 'this string has no repeats no repeats and is unique string';
function countWords(str){
    let counter = 0;
    let arr = [];
    let word = [];
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        if(str[i] != ' '){
            word.push(str[i]);
        }else{
            let newWord = word.join('');
            arr.push(newWord);
            word = [];
            continue;
        }
    }
    word = [];
    for(let n = 0; n < arr.length; n++) {
        if(word.includes(arr[n])){
            continue;
        }else{
            word.push(arr[n]);
        counter = 0;
        for(let j = 0; j <arr.length; j++) {
            if(arr[n] == arr[j]){
                counter++;
            }
        }
        obj[arr[n]] = counter;
        }
    }
    return obj;
}

const memoizeCountWords = memoize(function reqoursionCountWords(str, index, obj){
    index = index || 0;
    obj = obj || {};
    let newString = str.replace(/\-/g, '').split(' ');
    if(newString.length > index){
        obj[newString[index]] = ++obj[newString[index]] || 1;
        return reqoursionCountWords(str, ++index, obj);
    }
    return obj;
}, 'count enters of words');

// let num = 5;
function factorial(num){
    let count = 1;
    while(num > 0){
        count *= num;
        num--;
    }
    return count;
}

const memoizeFactorial = memoize(function reqoursionFactorial(num){
    if(num != 1){
        return num * reqoursionFactorial(num-1);
    }
    return 1;
}, 'memoized factorial');

// let width = 2;
// let height = 4;
function perimeterRect(width, height){
    let result = (width + height)*2;
    return result;
}

function squareRect(width, height){
    let result = width * height;
    return result;
}

// let first = 3;
// let second = 4;
// let third = 5;
function trianglePer(first, second, third){
    let result = 0;
    result = first + second + third;
    return result;
}

function triangleSquare(first, second){
    let result = (second * first)/2;
    return result;
}

// let rad = 5;
function perimetrCircle(rad){
    let p = Math.PI;
    let result = 2 * p * rad;
    return result;
}

function squareCircle(rad){
    let p = Math.PI;
    let result = p * (rad * rad);
    return result;
}

// let arr = [2, -3, 3, 1, 5, 0, 4, 8, 9, -9, -7, -5, 6, 12, 14, 2, 7];
function countMultiplesTwo(arr) {
    let multiples = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            multiples += arr[i];
        }
    }
    return multiples;
}

const memoizedCountMultiplesTwo = memoize(function recoursionCountMultiplesTwo(arr, index, multiples){
    multiples = multiples || 0;
    index = index || 0;

    if(arr[index] % 2 == 0){
        multiples += arr[index];
    }

    if(++index < arr.length){
        return recoursionCountMultiplesTwo(arr, index, multiples);
    }

    return multiples;
}, 'count in multiple array numbers/two');

function countMultiplesThree(arr){
    let multiples = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 == 0){
            multiples += arr[i];
        }
    }
    return multiples;
}

const memoizedCountMultiplesThree = memoize(function recoursionCountMultiplesThree(arr, index, multiples){
    multiples = multiples || 0;
    index = index || 0;

    if(arr[index] % 3 == 0){
        multiples += arr[index];
    }

    if(++index < arr.length){
        return recoursionCountMultiplesThree(arr, index, multiples);
    }

    return multiples;
}, 'count in multiple array numbers/three');

function notOvenAndPositive(arr){
    let notOandPos = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 != 0 && arr[i] > 0){
            notOandPos += arr[i];
        }
    }
    return notOandPos;
}

const memoizedCountNotOvenAndPos = memoize(function recoursionCountNotOvenAndPos(arr, index, multiples){
    multiples = multiples || 0;
    index = index || 0;

    if(arr[index] % 2 != 0 && arr[index] > 0){
        multiples += arr[index];
    }

    if(++index < arr.length){
        return recoursionCountNotOvenAndPos(arr, index, multiples);
    }

    return multiples;
}, 'count not oven and positive nums');

// let arr = [2, -3, 3, 1, 5, 0, 4, 8, 9, -9, -7, -5, 0, 0, 6, 12, 14, 2, 7];
function countZero(arr){
   let counter = 0;
   for (let i = 0; i < arr.length; i++) {
       if(arr[i] === 0){
           counter++;
       }
   }
   return counter;
}

const memoizedCountZero = memoize(function recoursionCountZero(arr, index, counter){
    counter = counter || 0;
    index = index || 0;

    if(arr[index] === 0){
        counter++;
    }

    if(++index < arr.length){
        return recoursionCountZero(arr, index, counter);
    }

    return counter;
}, 'count zero in multiple array');

function countPos(arr){
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0){
            counter++;
        }
    }
    return counter;
 }

const memoizedCountPositive = memoize(function recoursionCountPos(arr, index, counter){
    counter = counter || 0;
    index = index || 0;

    if(arr[index] >= 0){
        counter++;
    }

    if(++index < arr.length){
        return recoursionCountPos(arr, index, counter);
    }

    return counter;
}, 'count positive nums in multiple array');

 function countNeg(arr){
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            counter++;
        }
    }
    return counter;
 }

const memoizedCountNegative = memoize(function recoursionCountNeg(arr, index, counter){
    counter = counter || 0;
    index = index || 0;

    if(arr[index] < 0){
        counter++;
    }

    if(++index < arr.length){
        return recoursionCountNeg(arr, index, counter);
    }

    return counter;
}, 'count negative nums in multiple array');

 function countNaturals(arr){
    let counter = 0;
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if( arr[i]/arr[i] == 1 && (Math.sqrt(arr[i])*Math.sqrt(arr[i])) != arr[i] && arr[i] > 0 && arr[i] % 2 != 0 || arr[i] === 2){
            counter++;
            arrNew.push(arr[i]);
        }
    }
    return counter;
 }

const memoizedCountNaturals = memoize(function recoursionCountNaturals(arr, index, counter){
    counter = counter || 0;
    index = index || 0;

    if(arr[index]/arr[index] == 1 && (Math.sqrt(arr[index])*Math.sqrt(arr[index])) != arr[index] && arr[index] > 0 && arr[index] % 2 != 0 || arr[index] === 2){
        counter++;
    }

    if(++index < arr.length){
        return recoursionCountNaturals(arr, index, counter);
    }

    return counter;
}, 'count natural nums in multiple array');

// let num = 124;
function secondarySystem(num) {
    let arr = [];
    let n;
    let m;
    let str;
    while( num >= 1 ) {
        n = num;
        num = num/2;
        m = num;
        num = parseInt(num);
        m = parseInt(m);
        m *= 2;
        n -= m;
        arr.push(n);
        m = 0;
        n = 0;
    }

    arr.reverse();
    str = arr.join("");
    return str;
}

// let num = 124;
const memoizedSecondary = memoize(function reqoursionSecondarySystem(num , str, n, m, arr, isFlag) {
    arr = arr || [];
    n = n || 0;
    m = m || 0;
    str = str || 0;
    isFlag = isFlag || false;
    if( num >= 1 ) {
        n = num;
        num = num/2;
        m = num;
        num = parseInt(num);
        m = parseInt(m);
        m *= 2;
        n -= m;
        arr.push(n);
        m = 0;
        n = 0;
        reqoursionSecondarySystem(num , str, n, m, arr, true);
    }
    if(isFlag === false){
        arr.reverse();
        str = arr.join("");
    }
    return str;
}, 'turn num to secondary system');

// let str = '1111100';
function decimalSystem(str){
    let arr = str.split('');
    let counter = 1;
    let summ = 0;
    for(let i = (arr.length-1); i >= 0; i--){
        if(arr[i] != 0){
            arr[i] *= counter;
            summ += arr[i];
            counter *= 2;
        }else{
            arr[i] *= counter;
            counter *= 2;
            summ += arr[i];
        }
    }
    return summ;
}

const memoizedDemical = memoize(function reqoursionDecimalSystem(str, index, counter, summ, arr){
    arr = str.split('');
    counter = counter || 1;
    summ = summ || 0;
    if(index == 0){
        arr[index] *= counter;
        summ += arr[index];
        return summ;
    }
    index = index || (arr.length-1);
    if(index >= 0){
        arr[index] *= counter;
        summ += arr[index];
        counter *= 2;
        return reqoursionDecimalSystem(str, --index, counter, summ, arr);
    }
    return summ;
}, 'turn num to demical system');

// let multipleArr = [ [1, 2, 6, 4, 0, -7] , [9, 2, 0, 8, 5, -1, 3, 4] , [2, 0, 3, -6] , [-1, 1, 4, 7, -9, 0, 5] , ];
function countctwo(multipleArr){
    let counter = 0;
    for (let i = 0; i < multipleArr.length; i++) {
        for (let j = 0; j < multipleArr[i].length; j++) {
            if(multipleArr[i][j] % 2 == 0) {
                counter += multipleArr[i][j];
            }
        }
    }   
    return counter;
}

const memoizedCountTwo = memoize(function reqoursionCountTwo(multipleArr){
    let arr = [];
    let result = 0;

    function parseArray(multipleArr){
        for(let item in multipleArr){
            if(typeof multipleArr[item] === "object"){
                parseArray(multipleArr[item]);
            }else{
                arr.push(multipleArr[item]);
            }
        }
    }
    parseArray(multipleArr);
    for(let index in arr){
        if(arr[index] % 2 == 0){
            result += arr[index];
        }
    }

    return result;
}, 'count nums/two in multiple');

function countcthree(multipleArr){
    let counter = 0;
    for (let i = 0; i < multipleArr.length; i++) {
        for (let j = 0; j < multipleArr[i].length; j++) {
            if(multipleArr[i][j] % 3 == 0) {
                counter += multipleArr[i][j];
            }
        }
    }   
    return counter;
}

const memoizedCountThree = memoize(function reqoursionCountThree(multipleArr){
    let arr = [];
    let result = 0;

    function parseArray(multipleArr){
        for(let item in multipleArr){
            if(typeof multipleArr[item] === "object"){
                parseArray(multipleArr[item]);
            }else{
                arr.push(multipleArr[item]);
            }
        }
    }
    parseArray(multipleArr);
    for(let index in arr){
        if(arr[index] % 3 == 0){
            result += arr[index];
        }
    }

    return result;
}, 'count nums/three in multiple');

function countNotOvenAndPos(multipleArr){
    let counter = 0;
    for (let i = 0; i < multipleArr.length; i++) {
        for (let j = 0; j < multipleArr[i].length; j++) {
            if(multipleArr[i][j] % 2 != 0 && multipleArr[i][j] > 0) {
                counter += multipleArr[i][j];
            }
        }
    }   
    return counter;
}

const memoizedOvenAndPos = memoize(function reqoursionNotOvenAndPos(multipleArr){
    let arr = [];
    let result = 0;

    function parseArray(multipleArr){
        for(let item in multipleArr){
            if(typeof multipleArr[item] === "object"){
                parseArray(multipleArr[item]);
            }else{
                arr.push(multipleArr[item]);
            }
        }
    }
    parseArray(multipleArr);
    for(let index in arr){
        if(arr[index] % 2 != 0 && arr[index] > 0){
            result += arr[index];
        }
    }

    return result;
}, 'oven and pos');

function countZero(multipleArr){
    let counter = 0;
    for (let i = 0; i < multipleArr.length; i++) {
        for (let j = 0; j < multipleArr[i].length; j++) {
            if(multipleArr[i][j] === 0) {
                counter++;
            }
        }
    }   
    return counter;
}

const memoizedZero = memoize(function reqoursionCountZero(multipleArr){
    let arr = [];
    let result = 0;

    function parseArray(multipleArr){
        for(let item in multipleArr){
            if(typeof multipleArr[item] === "object"){
                parseArray(multipleArr[item]);
            }else{
                arr.push(multipleArr[item]);
            }
        }
    }
    parseArray(multipleArr);
    for(let index in arr){
        if(arr[index] === 0){
            result++;
        }
    }

    return result;
}, 'count zero in multiple');

function countPos(multipleArr){
    let counter = 0;
    for (let i = 0; i < multipleArr.length; i++) {
        for (let j = 0; j < multipleArr[i].length; j++) {
            if(multipleArr[i][j] >= 0) {
                counter++;
            }
        }
    }   
    return counter;
}

const memoizedPositive = memoize(function reqoursionCountPos(multipleArr){
    let arr = [];
    let result = 0;

    function parseArray(multipleArr){
        for(let item in multipleArr){
            if(typeof multipleArr[item] === "object"){
                parseArray(multipleArr[item]);
            }else{
                arr.push(multipleArr[item]);
            }
        }
    }
    parseArray(multipleArr);
    for(let index in arr){
        if(arr[index] >= 0){
            result++;
        }
    }
    return result;
}, 'count positives');

function countNeg(multipleArr){
    let counter = 0;
    for (let i = 0; i < multipleArr.length; i++) {
        for (let j = 0; j < multipleArr[i].length; j++) {
            if(multipleArr[i][j] < 0) {
                counter++;
            }
        }
    }   
    return counter;
}

const memoizedNegative = memoize(function reqoursionCountNeg(multipleArr){
    let arr = [];
    let result = 0;

    function parseArray(multipleArr){
        for(let item in multipleArr){
            if(typeof multipleArr[item] === "object"){
                parseArray(multipleArr[item]);
            }else{
                arr.push(multipleArr[item]);
            }
        }
    }
    parseArray(multipleArr);
    for(let index in arr){
        if(arr[index] < 0){
            result++;
        }
    }
    return result;
}, 'count negatives');

function countSimple(multipleArr){
    let counter = 0;
    let contrArr = [];
    for (let i = 0; i < multipleArr.length; i++) {
        for (let j = 0; j < multipleArr[i].length; j++) {
            if(multipleArr[i][j]/multipleArr[i][j] == 1 && (Math.sqrt(multipleArr[i][j])*Math.sqrt(multipleArr[i][j])) != multipleArr[i][j] && multipleArr[i][j] > 0 && multipleArr[i][j] % 2 != 0 || multipleArr[i][j] === 2) {
                counter++;
                contrArr.push(multipleArr[i][j]);
            }
        }
    }   
    return counter;
}

const memoizedSimple = memoize(function reqoursionCountSimple(multipleArr){
    let arr = [];
    let result = 0;

    function parseArray(multipleArr){
        for(let item in multipleArr){
            if(typeof multipleArr[item] === "object"){
                parseArray(multipleArr[item]);
            }else{
                arr.push(multipleArr[item]);
            }
        }
    }
    parseArray(multipleArr);
    for(let index in arr){
        if(arr[index]/arr[index] == 1 && (Math.sqrt(arr[index])*Math.sqrt(arr[index])) != arr[index] && arr[index] > 0 && arr[index] % 2 != 0 || arr[index] === 2){
            result++;
        }
    }

    return result;
}, 'count simple nums');

// let oneLevArr = [1, 4, -4, 3, 7, -5, 9, 6, -2, 2, 3, 8, 1, 0, 2, -6];
function middleOneLev(oneLevArr){
    let counter = 0;
    let summ = 0;
    for(let i = 0; i < oneLevArr.length; i++){
       summ += oneLevArr[i];
       counter++;  
    }
    result = summ / counter;
    return result;
}

const memoizedMiddleInOneLev = memoize(function reqoursionMiddleOneLev(oneLevArr, summ){
    let counter = 0;
    let result = 0;
    function reqSum(oneLevArr, index, summ){
        summ = summ || 0;
        index = index || 0;
        if(index < oneLevArr.length){
            summ += oneLevArr[index];
            return reqSum(oneLevArr, ++index, summ);
        }
        return summ;
    }
    let newSumm = reqSum(oneLevArr);
    
    for(let index in oneLevArr){
        counter++;
    }
    result = newSumm / counter;
    return result;
}, 'middle value of one level array');

function countElem(oneLevArr){
    for(let index in oneLevArr){
        counter++;
    }
    return counter;
}

function recoursionMiddleOneLev(oneLevArr, index, summ, counter, result){
    index = index || 0;
    summ = summ || 0;
    counter = counter || 0;
    result = result || 0;
    if(index < oneLevArr.length){ // 0 < 16 T
        summ += oneLevArr[index]; // summ = 1
        counter++; // counter = 1
       return recoursionMiddleOneLev(oneLevArr, ++index, summ, counter); // index = 1
    }
    console.log(summ);
    console.log(counter);
    result = summ / counter;
    return result;
}


function middleOneLevOven(oneLevArr){
    let counter = 0;
    let summ = 0;
    for(let i = 0; i < oneLevArr.length; i++){
        if(oneLevArr[i] % 2 == 0){
        summ += oneLevArr[i];
        counter++;
        }
    }
    result = summ / counter;
    return result;
}

const memoizedMiddleOneLevOven = memoize(function recoursionMiddleOneLevOven(oneLevArr, summ, index, counter, result){
    index = index || 0;
    summ = summ || 0;
    counter = counter || 0;
    result = result || 0;
    if(index < oneLevArr.length){
        if(oneLevArr[index] % 2 == 0){
            summ += oneLevArr[index];
            return recoursionMiddleOneLevOven(oneLevArr, summ, ++index, ++counter);
        }else{
            return recoursionMiddleOneLevOven(oneLevArr, summ, ++index, counter);
        }
    }

    result = summ / counter;
    return result;
}, 'middle value from oven nums in one level array');

function middleOneLevNotOven(oneLevArr){
    let counter = 0;
    let summ = 0;
    for(let i = 0; i < oneLevArr.length; i++){
        if(oneLevArr[i] % 2 != 0){
        summ += oneLevArr[i];
        counter++;
        }
    }
    result = summ / counter;
    return result;
}

const memoizedMiddleOneLevNotOven = memoize(function recoursionMiddleOneLevNotOven(oneLevArr, summ, index, counter, result){
    index = index || 0;
    summ = summ || 0;
    counter = counter || 0;
    result = result || 0;
    if(index < oneLevArr.length){
        if(oneLevArr[index] % 2 != 0){
            summ += oneLevArr[index];
            return recoursionMiddleOneLevNotOven(oneLevArr, summ, ++index, ++counter);
        }else{
            return recoursionMiddleOneLevNotOven(oneLevArr, summ, ++index, counter);
        }
    }

    result = summ / counter;
    return result;
}, 'middle value of not oven nums in one level array');


// let multipleArr = [ [1, 2, 6, 4, 0, -7] , [9, 2, 0, 8, 5, -1, 3, 4] , [2, 0, 3, -6] , [-1, 1, 4, 7, -9, 0, 5] , ];
function middleMultiLevelArr(multipleArr){
    let counter = 0;
    let summ = 0;
    for(let i = 0; i < multipleArr.length; i++){
        for (let j = 0; j < multipleArr[i].length; j++) {
            summ += multipleArr[i][j];
            counter++;
        }
    }
    result = summ / counter;
    return result;
}

function middleMultiLevelOven(multipleArr){
    let counter = 0;
    let summ = 0;
    for(let i = 0; i < multipleArr.length; i++){
        for (let j = 0; j < multipleArr[i].length; j++) {
            if(multipleArr[i][j] % 2 == 0){
                summ += multipleArr[i][j];
                counter++;
            }
        }
    }
    result = summ / counter;
    return result;
}

function middleMultiLevelNotOven(multipleArr){
    let counter = 0;
    let summ = 0;
    for(let i = 0; i < multipleArr.length; i++){
        for (let j = 0; j < multipleArr[i].length; j++) {
            if(multipleArr[i][j] % 2 != 0){
                summ += multipleArr[i][j];
                counter++;
            }
        }
    }
    result = summ / counter;
    return result;
}

// let min = -25;
// let max = 75;
function summOfRange(min, max){
    let summ = 0;
    for (let i = min; i <= max; i++) {
        summ += i;
    }
    return summ;
}

const memoizedSummOfRage = memoize(function reqoursionSummOfRange(min, max, summ){
    summ = summ || 0;
    if(min <= max){
        summ += min;
        return reqoursionSummOfRange(++min, max, summ);
    }
    return summ;
}, 'summ of nums in setted rage');

function summOfRangeCThree(min, max){
    let summ = 0;
    for (let i = min; i <= max; i++) {
        if(i % 3 == 0){
            summ += i;
        }
    }
    return summ;
}

const memoizedSummOfRageCthree = memoize(function reqoursionSummOfRangeCThree(min, max, summ){
    summ = summ || 0;
    if(min <= max){
        if(min % 3 == 0){
            summ += min;
            return reqoursionSummOfRangeCThree(++min, max, summ); 
        }
        return reqoursionSummOfRangeCThree(++min, max, summ);
    }
    return summ;
}, 'summ of nums/3 in setted rage');

function summOfRangeBiggerThanZ(min, max){
    let summ = 0;
    for (let i = min; i <= max; i++) {
        if(i > 0){
            summ += i;
        }
    }
    return summ;
}

const memoizedSummOfRageBiggerThanZero = memoize(function reqoursionSummOfRangeBiggerThanZ(min, max, summ){
    summ = summ || 0;
    if(min <= max){
        if(min > 0){
            summ += min;
            return reqoursionSummOfRangeBiggerThanZ(++min, max, summ); 
        }
        return reqoursionSummOfRangeBiggerThanZ(++min, max, summ);
    }
    return summ;
}, 'summ of nums bigger than zero in setted rage');

// let matrix = [
//     [1,2,3,4,5,6],
//     [1,2,3,4,5,6],
//     [1,2,3,4,5,6],
//     [1,2,3,4,5,6],
// ];

const memoizedTransponation = memoize(function transponationRecoursion(matrix, index, pos, arr){
    index = index || 0;
    pos = pos || 0;
    arr = arr || [];
    if(index < matrix.length){
       if(pos < matrix[index].length){
        if (Array.isArray(arr[pos])) {
                arr[pos][index] = matrix[index][pos];
            }
            else {
                arr[pos] = [matrix[index][pos]];
            }
           transponationRecoursion(matrix, index, ++pos, arr);
       }
        else{
            pos = 0;
            transponationRecoursion(matrix, ++index, pos, arr);
        }
    }    
    return arr;
}, 'transponation of matrix');

function transposeMatrixRecursive(matrix, arr, index, pos) {
    arr = arr || [];
    index = index || 0;
    pos = pos || 0;
    if (index < matrix.length) {
        if (pos < matrix[index].length) {
            if (Array.isArray(arr[pos])) {
                arr[pos][index] = matrix[index][pos];
            }
            else {
                arr[pos] = [matrix[index][pos]];
            }
            transposeMatrixRecursive(matrix, arr, index, ++pos);
        }
        else {
            pos = 0;
            transposeMatrixRecursive(matrix, arr, ++index, pos);
        }
    }
    return arr;
}

function transponationMatrix(matrix) {
    let newMatrix = [];
    for(let i = 0; i < matrix[0].length; i++) {
        newMatrix[i] = [];
        // newMatrix.push([]);
        for(let j = 0; j < matrix.length; j++) {
            newMatrix[i].push(matrix[j][i]);
        }
    }
    return newMatrix;
}

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

function sumMatrix(matrix1, matrix2) {
    let newMatrix = [];
    for (let i = 0; i < matrix1.length; i++) {
        newMatrix.push([]);
    }

    for(let i = 0; i < matrix1.length; i++) {
        for(let j = 0; j < matrix1[i].length; j++) {
            newMatrix[i].push(matrix1[i][j] + matrix2[i][j]);
        }
    }
    return newMatrix;
    // чтобы сразу транспонировать, перед пуш заменить newMatrix[i] на newMatrix[j];
}

const memoizedSummMatrix = memoize(function reqoursionSummMatrix(matrix1, matrix2, index, pos, arr){
    index = index || 0;
    pos = pos || 0;
    arr = arr || [];
    if(index < matrix1.length){
        if(pos < matrix1[index].length){
            if(Array.isArray(arr[index])){
                arr[index][pos] = matrix1[index][pos] + matrix2[index][pos];
            }else{
                arr[index] = [];
                arr[index][pos] = [];
                arr[index][pos] = matrix1[index][pos] + matrix2[index][pos];
            }
            reqoursionSummMatrix(matrix1, matrix2, index, ++pos, arr);
        }else{
            pos = 0;
            reqoursionSummMatrix(matrix1, matrix2, ++index, pos, arr);
        }
    }
    return arr;
}, 'summ of matrixs');

// let matrix = [
//     [1, 2, 3, 4, 5, 6],
//     [1, 2, 3, 0, 5, 6],
//     [1, 0, 3, 4, 5, 6],
//     [1, 2, 7, 4, 5, 6],
// ];

function deleteRow(matrix){
    for (let i = matrix.length-1; i >= 0; i--) {
        if(matrix[i].includes(0)){
            matrix.splice(i, 1);
        }
    }
    return matrix;
}

const memoizedDeleteRow = memoize(function reqoursionDeleteRow(matrix, index){
    index = index || 0;
    if(index < matrix.length){
        if(matrix[index].includes(0)){
            matrix.splice(index, 1);
            --index;
        }
        reqoursionDeleteRow(matrix, ++index);
    }  
    return matrix;
}, 'delete row from matrix');

function deleteCol(matrix){
    for (let i = 0; i < matrix.length; i++) {
        for (let j = matrix[i].length-1; j >= 0 ; j--) {
            if(matrix[i][j] === 0){
                matrix[i].splice(j, 1);
            }
        }
    }
    return matrix;    
}

const memoizedDeleteCol = memoize(function reqoursionDeleteCol(matrix, index) {
    index = index || 0
    function deleteСolumn(j) {
        for (let index in matrix) {
            matrix[index].splice(j, 1);
        }
    }

    if (index++ < matrix.length) {
        for (let j in matrix[index]) {
            if (matrix[index][j] == 0) {
                deleteСolumn(j);
                --index;
                break;
            }
        }

        reqoursionDeleteCol(matrix, index);
    }
    return matrix;
}, 'delete col from matrix');

