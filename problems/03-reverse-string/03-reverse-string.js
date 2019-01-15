/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) 
{
    let prev = (someStr + "").split('');
    let result = [...prev];
    
    for( let i = 0,  l = prev.length; i < l  ; i++)
    {
        result[Math.abs(i - l) - 1] = prev[i];
    }
    return result.join('');
}

console.log(reverseStr(4321));
console.log(reverseStr( "4321" ));
console.log(reverseStr( "PETER EMMANUEL ORLANDO" ));
