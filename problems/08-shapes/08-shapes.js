/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character)
{
  var s = (''+shape).toUpperCase();
  if(shape === 'DIAMOND') printDiamond(height, character);
  else if(shape === 'TRIANGLE') printTriangle(height, character);
  else if(shape === 'SQUARE') printSquare(height, character);
}

function printTriangle(height, character)
{
  let result = '';

  for (let i = 0; i < height; i++)
  {
    for (let k = 0; k < height; k++)
    {
      if(k <= i) 
        result += character;
      else
        result += ' ';
    }
    result += '\n';    
  }
  return result;
}


function printSquare(height, character)
{
  let result = '';

  for (let i = 0; i < height; i++)
  {
    for (let k = 0; k < height; k++)
    {
      result += character;
    }
    result += '\n';    
  }
  return result;
}

function printDiamond(height, character)
{
  let result = '';
  for (let i = 0; i < height; i++)
  {
    let filled = (i * 2) + 1;
    console.log(filled);
    if(filled > height) 
      filled -= (filled%height);
    console.log(filled%height);

    let empty = (height - filled)/2;
    
    for(let m = 0; m < empty; m++)
      result += ' ';
    for(let n = 0; n < filled; n++)
      result += character;
    result += '\n';    
  }
  return result;
}




console.log(printDiamond( 5, '#'));