/* 
Print sebuah tangga
contoh :
var x =3;
result :
1
12
123
*/

// var bawah = 3;
// var samping = 4;
// var penampung = '';
// for (var i = 0; i <bawah; i++) {
//     for (var j = 0; j <samping; j++) {
//         console.log(penampung +i)}
//     }



var x = 5;
var temp = "";
for  (var i = 0; i < x; i++) {
    for (var j = 0; j <= i; j++) {
        temp += j+1;
}
console.log(temp)   
temp = '';
}