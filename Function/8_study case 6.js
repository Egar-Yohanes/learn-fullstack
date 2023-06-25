/**
 * Study Case 6
 * 
 * Tentukan apakah sebuah kata atau kalimat adalah Palindrome.
 * Palindrome adalah sebuah istilah untuk kata jika dibalik tetap menghasilkan kata yang sama
 * Contoh:
 * apa
 * katak
 * kodok
 * ovo
 * kasur rusak
 * 
 * Test Case:
 * checkPalindrome("katak") // true
 * checkPalindrome("baso") // false
 * checkPalindrome() // Masukan sebuah kata.
 */
// function checkPalindrome(word) {
//     word = ""
//     if (word.reverse()) {
//         console.log("true")
//     } else { console.log("false")}
// }

// checkPalindrome(baso);

function checkPalindrome(word) {
    if (!word) {
      return "Masukkan sebuah kata.";
    }
  
    // Menghapus spasi dan mengubah semua huruf menjadi lowercase
    word = word.toLowerCase().replace(/\s/g, "");
  
    // Membalik kata
    var reversedWord = word.split("").reverse().join("");
  
    // Membandingkan kata asli dengan kata yang dibalik
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }

  console.log(checkPalindrome("")); // true

    