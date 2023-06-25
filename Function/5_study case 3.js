/*Buatlah fungsi untuk memecah sebuah kalimat menjadi per kata
*/

function pecahKalimat(str) {
    var arrResult = [];
    var temp = '';
  
    for (var i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
        temp += str[i];
      } else {
        arrResult.push(temp);
        temp = '';
      }
  
      if (i === str.length - 1) {
        arrResult.push(temp);
        temp = '';
      }
    }
  
    return arrResult;
  }
  
  console.log(pecahKalimat("Hello Selamat Pagi"));
  