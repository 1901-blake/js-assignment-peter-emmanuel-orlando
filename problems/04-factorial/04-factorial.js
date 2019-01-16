/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) 
{
    var result = 0;
    while (sumNum > 0)
    {
        result += sumNum;
        sumNum--;  
    }
    return result
}

console.log(factorial(4));

