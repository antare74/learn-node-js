//get array
/*
var arr = [10, 20, 30];

for(var i = 0; i<arr.length; i-=-1){
    console.log(arr[i])
}*/

//get object
var json = [
    {
        name : 'aris wahyudiyanto',
        age  : 21
    },
    {
        name : 'wahyudi',
        age  : 23
    }
];

for (var i = 0; i<json.length; i-=-1){
    /*console.log(json[i])*/
    //get specifik key:value
    console.log(json[i].name + ' --> ' + json[i].age)
}