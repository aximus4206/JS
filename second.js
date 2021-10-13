
let user = {

    Name: '',
    lastName: '',
    Age: 26,
    Sex: 'man',
    userFullName() {
        return `${this.Name} ${this.lastName}`
    },
    showAge() {
        return `${this.Age}`;
    },

}

function showAge() {
return this.Age;
}

function userFullName() {
    return `${this.Name} ${this.lastName}`
}

function showFullName(Name, lastName) {
    this.Name = Name;
    this.lastName = lastName;
    console.log(this);
    return this.userFullName();
}

// console.log(showFullName());

// console.log(showFullName.bind(user, 'User', 'Admin')());
// console.log(showFullName.call(user, 'User', 'Admin'));

Object.prototype.myCall = function myOwnCall(func, objContext, ...args) {
    const uniqueProperty = Date.now().toString();
    objContext[uniqueProperty] = func;
    const result = objContext[uniqueProperty](...args);
    delete objContext[uniqueProperty];
    return console.log(result);
}

// function myOwnCall(func, objContext, ...args) {
//     const uniqueProperty = Date.now().toString();
//     objContext[uniqueProperty] = func;
//     const result = objContext[uniqueProperty](...args);
//     delete objContext[uniqueProperty];
//     return console.log(result);
// }



Object.prototype.myBind = function myOwnBind(func, objContext, ...restArgs) {
    return function(...args) {
      const uniqueProperty = Date.now().toString();
      objContext[uniqueProperty] = func;
      const result = objContext[uniqueProperty](...restArgs, ...args);
      delete objContext[uniqueProperty];
      return console.log(result);
    }
}


// function myOwnBind(func, objContext, ...restArgs) {
//     return function(...args) {
//       const uniqueProperty = Date.now().toString();
//       objContext[uniqueProperty] = func;
//       const result = objContext[uniqueProperty](...restArgs, ...args);
//       delete objContext[uniqueProperty];
//       return console.log(result);
//     }
// }

// myOwnBind(showFullName, user, 'User', 'Admin')();
// myOwnBind(showFullName, user)('User', 'Admin');

function checkContext(func, context) {
    return func._this !== context;
}
// console.log(checkContext(showFullName, user));

function myOwnForEach(arr, callbackFunc, thisContext) {

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        callbackFunc.call(thisContext, arr[i], i, arr);
    }

}


let arr = [1, 3, 8, 5, 0, 11, 4, -1, 9, 0, -7, 13, 15, 2];

// myOwnForEach(arr, function(num, i, arr) {
//     console.log('Number: ' + num + ', index: ' + i + ',', arr)
// });


function myOwnMap(arr, callbackFunc, thisContext) {

    let length = arr.length;
    let resultArr = [];
    for (let i = 0; i < length; i++) {
        resultArr.push(callbackFunc.call(thisContext, arr[i], i, arr));
    }
    return resultArr;

}

// console.log(myOwnMap(arr, function(num, index, arr) {
//     return (num + 10);
// }));

function myOwnFilter(arr, callbackFunc, thisContext) {

    let length = arr.length;
    let resultArr = [];
    for (let i = 0; i < length; i++) {
      if(callbackFunc.call(thisContext, arr[i], i, arr)) {
        resultArr.push(arr[i]);
      }
    }
    return resultArr;


}

// console.log(myOwnFilter(arr, function(num) {
//     return (num > 0 && num < 10);
// }));

