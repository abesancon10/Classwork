//Write a function that outputs the duplicates of an array
const myarr1 = [2, 5, 6, 3, 5];
const myarr2 = [1, 3, 4, 1, 3, 4];
const myarr3 = [2, 4, 5];

var findDup = function(arr) {
  
    for (var i = 0; i < arr.length; i++) {
        console.log('First Loop: i: ',i,arr[i]);
    for (var j = 0; j < 1; j++) {
        console.log('Second Loop: j: ',j,arr[j]);
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
};
//not very good for large applications
//better to create an object 

var firstDup = function(arr){
    var dups = {};
    for (var j = 0; j < 1; j++) {
        var val = arr[i]

        if (dups[val] = dups[val] + 1;

}