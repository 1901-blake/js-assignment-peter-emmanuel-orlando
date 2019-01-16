/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) 
{
    var obj = someObj;
    var result = '';
    for (const key in obj)
    {
        result += ('--START-----------------\n');
        result += ('key: ' + key + '\n');
        result += ('obj[key]: ' + obj[key] + '\n');
        result += ('--END-----------------\n');
    }
    return result;    
}

console.log(objectProperties({boog:"ghfgdfsfdg", krelg:6, haascis:true}));