/*
print sebuah kotak
contoh :
var x = 3;
result:
###
###
###
*/
var number = 3;
var temp = "";
for  (var i = 0; i < number; i++) {
    for (var j = 0; j < number; j++) {
        temp += "*";
}
console.log(temp)   
temp = '';
}