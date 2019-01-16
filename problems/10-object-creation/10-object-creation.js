/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

var objLit = {name:"jude", age:'65'};

function objConstrFunc(name, age)
{
    this.name = name;
    this.age = age;
}
var objFunc = objConstrFunc("jude", 65);

class es6Class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var es6ClassObj = new es6Class("jude", 65);
