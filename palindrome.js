function isPalindrome(str) {
    return str.split('')
        .reverse()
        .join('') === str
     
  }
  
  console.log( isPalindrome("radar") )
  console.log( isPalindrome("malam") )
  console.log( isPalindrome("kasur ini rusak") )
  console.log( isPalindrome("ibu ratna antar ubi") )
  console.log( isPalindrome("malas") )
  console.log( isPalindrome("makan nasi goreng") )
  console.log( isPalindrome("balonku ada lima") )