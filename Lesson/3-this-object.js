var myObj = {
    name : 'Aris wahyudiyanto',
    age  : 21,
    print: function () {
        //this means all about in var myObj
        console.log(this.name + ' is ' + this.age + ' years old ')
        console.log(this === myObj)
    }
}

function myFunction(){
    console.log('Im My Function')
    console.log(this === global)
}

myObj.print();
console.log('------------------')
myFunction();