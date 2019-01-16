/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) 
{
    if(typeof(sumNum) != typeof 1) throw TypeError('only accepts numbers');
    if(sumNum === 1) 
        return 1;
    else
        return sumNum * factorial(sumNum-1);
}

console.log(factorial(4));

