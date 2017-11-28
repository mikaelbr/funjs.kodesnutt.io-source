// Reduce

function reduce (arr, fn, initial) {
  const hasInitial = typeof initial === 'undefined';
  let result = typeof initial === 'undefined' ? arr[0] : initial;
  const arrLength = arr.length;
  const startPoint = hasInitial ? 1 : 0;

  for ( let i = startPoint; i < arrLength; i++ ) {
    result = fn(result, arr[i], i);
  }

  return result;
}

function add (a, b) {
  return a + b;
}
const arr = [1, 2, 3, 4];
const sum1 = arr.reduce(add, 5);
console.log(sum1); //=> 15

const sum2 = reduce(arr, add, 5);
console.log(sum2); //=> 15

//=== Filter

function filter (arr, predicate) {
  return reduce(arr, function filterFunction (newArray, item, index) {
    return !predicate(item, index) ? newArray : newArray.concat(item);
  }, []);
}

function isEven (n) {
  return n % 2 === 0;
}

console.log([1, 2, 3, 4, 5].filter(isEven)); //=> [2, 4]
console.log(filter([1, 2, 3, 4, 5], isEven)); //=> [2, 4]


//=== Map

function map (arr, mapper) {
  return reduce(arr, function mapFunction (newArray, item, index) {
    return newArray.concat(mapper(item, index, arr));
  }, []);
}

function double (n) {
  return n * 2;
}
console.log([4, 5].map(double)); //=> [8, 10]
console.log(map([4, 5], double));
