function splitToArray(str){
    var tempArray = str.split(" ");
    return tempArray;
}
function jumlahKata(kalimat){
    var result = splitToArray(kalimat);
    var arrayLength = result.length;
    return arrayLength;
}
console.log(jumlahKata("Hello Selamat Pagi"));

