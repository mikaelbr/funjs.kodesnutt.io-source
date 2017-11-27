//=== Expressions

let add = function add (a, b) {
  return a + b;
};
console.log(typeof add); //=> function
console.log(add(1, 2)); //=> 3
console.log(add(2, 5)); //=> 7


//=== First class

console.log(typeof add);//=> function
console.log(add.name); //=> add

console.log(add.length); //=> 0
console.log(add(2, 5)); //=> 7

add.customProperty = 'foobar';
console.log(add);

//=== Higher order return

function createAdd (num) {
  return function (a) {
    return num + a;
  };
}

let add2 = createAdd(2);
console.log(add2(3)); //=> 5
let add5 = createAdd(5);
console.log(add5(3)); //=> 8

//=== Higher order arguments

function add (a, b) {
  return a + b;
}

function sub (a, b) {
  return a - b;
}

function createOperator (num, operator) {
  return function (a) {
    return operator(num, a);
  };
}

let add2 = createOperator(2, add);
console.log(add2(3)); //=> 5
let sub5 = createOperator(5, sub);
console.log(sub5(3)); //=> 2
