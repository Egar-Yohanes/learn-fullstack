function checkPalindrome(word) {
    if (word !== undefined) {
      let tempStr = "";
      for (let i = word.length - 1; i >= 0; i--) {
        tempStr += word[i];
      }
      if (word === tempStr) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Masukkan sebuah kata";
    }
  }
  
  // TEst Case
  console.log(checkPalindrome("katak")); // true
  console.log(checkPalindrome("baso")); // false
  console.log(checkPalindrome()); // Masukan