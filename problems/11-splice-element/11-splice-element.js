/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, someElement, index) 
{
  //spliceElement inserts the element at index, with the rest of the array appended
  let arr = [...someArr];
  let result = [...(arr.slice(0, index)), someElement, ...(arr.slice(index, arr.length-1)) ];
  return result;
}


console.log(spliceElement([0, 1, 2, 3, 4, 5], 'e', 3));