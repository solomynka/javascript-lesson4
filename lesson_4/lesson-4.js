
let array = [1,6,99,-7,4,55,-88,9,-1,0,666,23,56,-32,-5,14,123,96,99,-99];

function compareArray(a,b){
	return a-b;
}
array.sort(compareArray);
console.log(array);

console.log(array.reverse());

let positiveArr = array.filter(function(number) {
  return number >= 0;
});
console.log(positiveArr);

let negativeArr = array.filter(function(n){
	return n<0;
});
console.log(negativeArr);