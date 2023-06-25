/* Buatlah sebuah function untuk mengecek apakah larakter 'x" sama dengan 'o'

contoh:
countXO('xoxoxoxxoo')

Result;
true
*/

function countX0(str){
let countX = 0;
let countO = 0;
for(let i = 0; i<str.length; i++) {
    if (str[i]==="x") {
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
return(str);
}

countX0('xxxooo');