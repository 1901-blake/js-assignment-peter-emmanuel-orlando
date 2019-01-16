/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr)
{
    let len = someStr.length;
    let splitStr = (someStr+'').split('');
    for(let i = 0; i < len; i++)
    {
        //              index               mirror index
        if (splitStr[i] !== splitStr[(len - 1) - i])
        {
            return false;
        }
    }
    return true
}

console.log(isPalindrome("abab"))//false
console.log(isPalindrome("abababa"))//true
console.log(isPalindrome("aaba"))//false
console.log(isPalindrome("abba"))//true
