/* Print sebuah string menjadi huruf besar dan kecil*/
var kata = "nasi kotak";
var temp ="";
for (var i = 0; i < kata.length; i++) {
    if (i % 2 === 0) {
        temp += kata[i].toUpperCase();
        // console.log(str[i].toUpperCase());
    } else { 
        temp += kata[i].toLowerCase();
        // console.log(str[i].toLowerCase()); }
    }
}
console.log(temp);