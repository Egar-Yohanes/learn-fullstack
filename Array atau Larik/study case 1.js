/* Study case 1
Hitung mean dari sebuah data statistik
contoh:
let stats = [1.7 , 0.2, 5.1, 7.3, 3.5];

result;
Mean = 3.56
*/

let stats = [1.7, 0.2, 5.1, 7.3, 3.5];
let total = 0;

for (let i=0; i < stats.length; i++) {
    total += stats[i];
}
console.log(total);
