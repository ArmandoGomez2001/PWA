// var test = (a,b) => {
//     return a + b
// }

// array = [1,2,3,4,5, 'foo', 'bar', 2.3, true]

// obj = {
//     firstname: 'Armando',
//     lastname: 'Gomez',
//     age: 22,
//     alive: true
// }
// console.log(array[0])
// console.log(obj['firstname'])
// console.log(obj.firstname)

// 
// for(var i in array){
//     console.log(array[i])
// }

// for (var key of Object.keys(obj)){
//     console.log(key + ": " + obj.value)
// }

// for (var key in obj){
//     console.log(key + ":" + obj.key)

// }
// 

// var i = 0;

// while(i < 10){
//     console.log(i)
//     i++
// }
// do{
//     console.log(i)

// }whvar i = 0;

// while(i < 10){
//     console.log(i)
//     i++
// }
// do{
//     console.log(i)

// }while(i > 10)ile(i > 10)

// var x = 400
// if (x > 90){
//     console.log("Si es mayor")
// }else{
//     console.log("No es mayor")
// }

// var animal = 'dog'

// if(animal == 'dog'){
//     console.log("It is a pretty dog");
// }else{
//     console.log("It is not a pretty dog");
// }

// var cat = (animal === 'dog')  ? console.log("It is a pretty dog") : console.log("It is not a pretty dog")

// switch (animal) {
//     case 'dog':
//         console.log("Case one")
//         break;
//     case 'cat':
//         console.log("Case two");
//         break;
//     default:
//         console.log('otherwise')
//         break;
// }
// var x = 400
// if (x > 90){
//     console.log("Si es mayor")
// }else{
//     console.log("No es mayor")
// }

// var animal = 'dog'

// if(animal == 'dog'){
//     console.log("It is a pretty dog");
// }else{
//     console.log("It is not a pretty dog");
// }

// var cat = (animal === 'dog')  ? console.log("It is a pretty dog") : console.log("It is not a pretty dog")
// var prism = (l) => {
//     return function(w) {
//         return function (h){
//             return l * w * h
//         }
//     }
// }

// console.log(prism(72)(12)(12))

//funcion de invocacion inmediata
// var message = "hello"
// const foo = (function(msg){
//     console.log("I am the IIFE function" + msg);
//     return msg;
// }(message));

// console.log(foo)


// function prism(l,w,h){
//     return l * w * h
// }

// console.log(prism(1,2,3))

// var sumTwo = function sum(a,b){
//     return a + b
// }

// sumTwo(1,3)

// var foo = function() {
//     console.log("bar")
// }

// foo();


// var say = function say(times) {
//     if (times > 0) {
//         console.log("hello")
//         say(times - 1)
//     }
// }

// var saySay = say
// say = "Oops."
// saySay(100)

// ...msg = (...) es la funcion de convertir una variable en array
// function saySomething(something, ...msg) {
//     msg.forEach(arg => {
//         console.log(something + "say: " + msg)
//     })
// }

// saySomething("Foo", "Say", "JS", "Armando")
