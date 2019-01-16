/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) 
{
    let result = someNum - 2*Math.floor(someNum/2);
    return !result;
}

for (let i = 0; i < 7; i++) 
{
    console.log(` is ${i} even: ${isEven(i)}`);
}