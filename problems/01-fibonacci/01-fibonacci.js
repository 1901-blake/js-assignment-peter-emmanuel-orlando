/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n)
{
  if(n <= 0) return -1;
  if(n <= 2) return 1;
  return fib(n - 1) + fib( n - 2);
}

for(let i = 0; i < 10; i++)
{
  console.log("fib of " + i + " is " + fib(i) + "\n");
}
