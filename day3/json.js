var obj1 = {name: "Person1", age:5};
var obj2 = {age:5, name:"Person1"};
var k1 = JSON.stringify ((Object.keys(obj1)).sort())
var k2 = JSON.stringify ((Object.keys(obj2)).sort())
var v1 = JSON.stringify ((Object.values(obj1)).sort())
var v2 = JSON.stringify ((Object.values(obj2)).sort())
if( k1===k2 && v1===v2){
    console.log("The JSON Objects have the same properties")
}
else{
    console.log("The JSON Objects don't have the same properties")
}