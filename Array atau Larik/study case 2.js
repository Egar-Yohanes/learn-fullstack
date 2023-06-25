/*cek apakah jumlah x dan o adalah sama

contoh:
let checkboard = "xxx000x0x0"


result= true

contoh 2 :
let checkboard = "xoxox"

result:
false

*/

let checkboard = "xxxoooxoxo";
let countX = 0;
let countO = 0;
for(let i = 0; i<checkboard.length; i++) {
    if (checkboard[i]==="x") {
        countX++;
    } else {
        countO++;
    }
} 
if (countX === countO) {
    console.log(true);
} else {
    console.log(false);
}