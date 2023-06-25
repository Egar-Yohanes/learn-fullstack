/* Tentukan faktor dari sebuah bilangan
    Angka 10 terdiri dari faktor 1 2 5 10

    contoh:
    var n = 10

    result:
    1
    2
    5
    10
    */

    let n = 10;

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
        }
    }
