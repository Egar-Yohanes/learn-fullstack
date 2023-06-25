/*Buatlah sebuah function untuk cek apakah bilangan prima atau tidak
*contoh bilanganprima(19)
result : bukan bilangan prima
*/


function cekBilanganPrima(angka) {
    if (angka <= 1) {
      return "bukan bilangan prima";
    }
  
    for (var i = 2; i <= Math.sqrt(angka); i++) {
      if (angka % i === 0) {
        return "bukan bilangan prima";
      }
    }
  
    return "bilangan prima";
  }
  
  console.log(cekBilanganPrima(19));
  