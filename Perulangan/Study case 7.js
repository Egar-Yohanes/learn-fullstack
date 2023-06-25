/*
print sebuah kotak yang berisi kosong

contoh:
var number = 5;
\result :
#####
#   #
#   #
#   #
#####
*/

let number = 5;

for (let row = 0; row < number; row++) {
    let line = "";
    for (let col = 0; col < number; col++) {
        if (row === 0 || row === number - 1 || col === 0 || col === number - 1) {
            line += "#";
        } else {
            line += " ";
        }
    }
    console.log(line);
}
