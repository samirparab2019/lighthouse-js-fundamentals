function range(start, end, step){
  let a = [];
  if( start === null || end === null || step === null || end < start || step < 0 ){
    a = [];
  } else {
    for(var i = start; i <= end; i = i + step){
      a.push(i);
    }
  }
  return a;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(40, 20, -2));









function lastIndexOf (lastIndex, number) {
  let i = 0;
  for (let i = lastIndex.length - 1; i >= 0; i--) {
    if (lastIndex[i] === number) 
    return i;
  }
  return -1;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);


function concat (array1, array2) {
  let array = [];
  array = array1.concat(array2);
  return array;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);


