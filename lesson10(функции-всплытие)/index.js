
//var a = 17   // === var a;   a = 17
var a
// console.log(a)
a = 17
// console.log(a)

if(a){
    var a = 1
    // console.log(a)   // => 1
}
// console.log(a)        // => 1



var greeting = 'hello'

function sayHi () {
    greeting = 'hi'
    // console.log(greeting)
    if(false){
        var greeting
    }
}
sayHi()
// console.log(greeting)

// array function

var arr = []
for(var i = 0; i < 10; i++){
    arr[i] = function (){
       return i
    }
}
console.log(arr[0]())























