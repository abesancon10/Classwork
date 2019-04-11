//Finding the average of a number

var average = function(numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum / numArr.length;
};

const myAverageNumber = average([1, 2, 3, 4, 5]);
console.log(myAveageNumber);
