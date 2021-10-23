
// let user = {

//     Name: '',
//     lastName: '',
//     Age: 26,
//     Sex: 'man',
//     userFullName() {
//         return `${this.Name} ${this.lastName}`
//     },
//     showAge() {
//         return `${this.Age}`;
//     },

// };

// function showAge() {
//     return this.Age;
// }

// function userFullName() {
//     return `${this.Name} ${this.lastName}`;
// }

// function showFullName(Name, lastName) {
//     this.Name = Name;
//     this.lastName = lastName;
//     console.log(this);
//     return this.userFullName();
// }

Object.defineProperty(Object.prototype, 'myOwnBind', {
    value: function (objContext, ...restArgs) {
        let object = {
          ...objContext,

        };
       let uniqueProperty = Symbol();
       object[uniqueProperty] = this;
       return function (...args) {
          let result = object[uniqueProperty](...restArgs, ...args);
          delete object[uniqueProperty];
          return result;
       };
    }

});

Object.defineProperty(Object.prototype, 'myOwnCall', {
    value: function (objContext, ...restArgs) {
       let uniqueProperty = Symbol();
       objContext[uniqueProperty] = this;
       let result = objContext[uniqueProperty](...restArgs);
       delete objContext[uniqueProperty];
       return result;
    }
});

// let arr = [1, 3, 8, 5, 0, 11, 4, -1, 9, 0, -7, 13, 15, 2];


Object.defineProperty(Array.prototype, 'myOwnPush', {
    value: function (...args) {
       for (let i = 0; i < args.length; i++) {
          this[this.length] = args[i];
        }
        return this;
    }
});


Object.defineProperty(Array.prototype, 'myOwnForEach', {
    value: function (funClbck, index) {
       index = index || 0;
 
       if (index < this.length) {
            funClbck(this[index], this);
            this.itsMyForEach(funClbck, ++index);
       };
    }

});



Object.defineProperty(Array.prototype, 'myOwnMap', {
    value: function (funClbck) {
       let arr = [];
 
       for (let i = 0; i < this.length; i++){
          arr.myOwnPush(funClbck(this[i], i, this));

        }
       return arr;
    }
});


Object.defineProperty(Array.prototype, 'myOwnFilter', {
    value: function (funClbck) {
       let arr = [];
 
       for (let i = 0; i < this.length; i++) {
          if (funClbck(this[i])) {
            arr.myOwnPush(this[i]);
          }
        }
 
       return arr;
    }
});

Object.defineProperty(Array.prototype, 'myOwnReduce', {
    value: function (funClbck, result) {
       let index = 0;
       if (result === undefined) {
          index = 1;
          result = this[0];
       }
       for (let i = index; i < this.length; i++) {
        result = funClbck(result, this[i], i, this);
       }
       return result;
    }
});

let fibIterator = {
    firstNum: 0,
    secondNum: 1,
    countNums: 5,
    [Symbol.iterator]() {
       let currentNum = this.firstNum;
       let nextNum = this.secondNum;
       let countNums = this.countNums;
       let arr = [currentNum, nextNum];
       return {
          next() {
             arr.myOwnPush(arr[currentNum] + arr[nextNum++])
             currentNum++;
             if(arr.length <= countNums && currentNum < countNums){
                return { done: false, value: arr } 
             }else{
                return { done: true, value: undefined };
             }
            }
        };
    }
};
let fibIter = fibIterator[Symbol.iterator]();




function* fibGenerator(countNums, firstNum, secondNum){

    firstNum = firstNum || 0;
    secondNum = secondNum || 1;
    if (countNums == 0){
       return firstNum;

    }
    yield firstNum;
    yield* fibGenerator((countNums - 1), secondNum, firstNum + secondNum);

};
let generatorFib = fibGenerator(5, 0, 1);


// console.log(generatorFib.next().value);
// console.log(generatorFib.next().value);
// console.log(generatorFib.next().value);
// console.log(generatorFib.next().value);
// console.log(generatorFib.next().value);



