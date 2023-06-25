/* Buat grade
*Grade A : score antara 100 - 85
*Grade B : score antara 84-70
*Grade C : score antara 69-55
*Grade D : score antara 54-40
*Grade E : score antara 39-0
*/

var score = 30 ;
if ( score >= 85 && score <= 100) {
    console.log("Nilai" + score + "mendapatkan grade A");
} else if ( score >= 70 && score <=84) {
    console.log("Nilai " + score + "mendapatkan grade B");
} else if ( score >= 55 && score <=69) {
    console.log("Nilai " + score + "mendapatkan grade C");
} else if ( score >= 40 && score <=54) {
    console.log("Nilai " + score + "mendapatkan grade D");
} else if ( score >= 0 && score <=39) {
    console.log("Nilai " + score + " mendapatkan grade E");
}