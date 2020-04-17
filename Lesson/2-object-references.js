// Object references
var myObj = {
    name : 'Aris Wahdyudiyanto',
    age  :  21
}
// Change value in obj2.age will change parrent value too
var obj2 = myObj;
obj2.age = 19;
console.log(myObj);