// A palindrome is a word, phrase, number, or other sequence of characters which reads 
// the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome.

// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome("racecar")    ==> true
// isPalindrome("ab")   ==> false


function isPalindrome(letters) {

    var characters  = letters.split(''),
        firstLetter = characters.shift(),
        lastLetter  = characters.pop();
                
    if (firstLetter !== lastLetter) {
        return false;
    }

    if (characters.length < 2) {
        return true;
    }

    return isPalindrome(characters.join(''));

}

console.log(isPalindrome("anna"));
console.log(isPalindrome("walter"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("ab"));