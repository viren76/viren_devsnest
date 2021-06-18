function array_Clone(ar){
    var arr2=[...ar];
   return arr2
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));