/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n)
{
  let result = 0;
  for( let i = 0; i <= n; i++)
  {
    result += i;
  }
  return result;
}
