/* function

**
Buatlah sebuah function untuk cek jumlah faktor dari sebuah   angka 
**
contohJUmlahFaktor(12);
*
*
result;
6
*/
function cariFaktor(N) {
    var faktor = [];
  
    for (var i = 1; i <= N; i++) {
      if (N % i === 0) {
        faktor.push(i);
      }
    }
  
    return faktor;
  }
  
  var bilangan = 12;
  var faktorBilangan = cariFaktor(bilangan);
  console.log(faktorBilangan);
  
  