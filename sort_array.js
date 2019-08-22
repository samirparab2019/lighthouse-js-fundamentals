var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]




let array4 = [ 4, 5, 6 ];
let array5 = [1, 2, 3, 4];

let array6 = array4.concat(array5);

console.log(array6.sort());


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

function merge (array1, array2) {
  let array3 = array1.concat(array2);
  return array3.sort();
}