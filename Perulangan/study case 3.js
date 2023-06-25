/* Pecah kalimat menjadi per kata
contoh: var pantun = "makan siang bareng temen kerja"
Result:
makan
siang
bareng
temen 
kerja
*/

// let sentence = "This is a sentence";
// let words = sentence.split("");

// console.log(words);

// var pantun = "makan siang bareng temen kerja";
// for (var i = 0; i < 5; i++) {
//     console.log(pantun.split(""));
// }


var pantun = "makan siang bareng tmeen kerja";
var temp = "";

for (var i = 0; i < pantun.length; i++) {
    if (pantun[i] !== " ") {
        temp += pantun[i];
    } else {
        console.log(temp);
        temp = "";
    }
    if (i === pantun.length - 1) {
        console.log(temp);
    }
}