/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) 
{
    if(typeof(someStr) !== typeof('a')) throw TypeError('Invalid input type, only strings are acceptable arguments');
    let lastIndex = (''+someStr).length -1;
    if(startIndex < 0 || endIndex > lastIndex) throw RangeError("start index or end index out of bounds");
    
    let strArr = ("" + someStr).split('');

    let result = [];
    for(let i = startIndex; i <= endIndex; i++ )
    {
        result.push(strArr[i]);
    }

    return result.join('');
}


console.log(substring("0123456789", 5, 3));