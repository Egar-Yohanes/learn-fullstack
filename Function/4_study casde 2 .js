/**
 * Study Case 4
 * Buatlah sebuah function untuk menghitung rata2
 * 
 * contoh:
 * countAverag([1,2,3,4,5])
 * 
 * Result:
 * Average = 3.00
 */


function countAverage(numbers){
  var total = 0;
  for(var i = 0; i < numbers.length; i++){
      total += numbers[i]
  }
  return (total/numbers.length).toFixed(2)