// a) Print odd numbers in an array

// let odd = function (...N){
//         for (let i = 0; i< N.length ; i++){
//             if (N[i] % 2 !==0){
//         console.log(N[i])
//         }
//         }
//         }
//         odd(1,2,3,4,5,6,7,8,9,10)

// -----------------------------------------------------------------------------------------------------------------------

// b) Convert all the strings to title caps in a string array 

// let name = function (...value){
//     for(let i=0;i<value.length;i++){
//         console.log((value[i].charAt(0).toUpperCase()+value[i].slice(1)))
//     }
// }
// name("john","david","bob","charlie","alice")
    
// -------------------------------------------------------------------------------------------

// c) Sum of all numbers in an array

// let sum = function (...numbers) {
//     total = 0;
//     for (let i =0;i<numbers.length;i++){
//         total = total + numbers[i]
//     } 
//     console.log(total)
// }
// sum(1,2,3,4,5,6,7,8,9,10)

// -----------------------------------------------------------------------------------------

// d) Return all the prime numbers in an array

// let numbers = function (...numbers){
// for(let i = 0 ; i<numbers.length ; i++){
//     let count = 0
// for(let j=1;j<=numbers[i];j++){
//     if (numbers[i] % j  === 0){
//         count = count + 1
//     }}
//     if(count === 2){
//         console.log(numbers[i])
//     }}}
//     numbers(1,2,3,4,5,6,7,8,9,10,11)

// ------------------------------------------------------------------------------------

// e) Return all palindromes in an array

// let palindrome = function (...name){
//         for( let i=0 ; i<name.length ; i++){
//             if (name[i] == name[i].split("").reverse().join("")){
//                 console.log(name[i])
//             }
           
//         }}
//         palindrome("madam","god","level","cat","malayalam","father","navan")

// ----------------------------------------------------------------------------------------

// f) Return median of two sorted arrays of the same size

// let median = function (N,M) {
// let O =[N,M]
// let result = O.flat()
// let total = (result[result.length/2]+result[(result.length/2)-1])
// console.log( total/2)
// }
// median([1,2,3,4,5],[11,12,13,14,15])
    
// -----------------------------------------------------------------------------------------------

// g) Remove duplicates from an array

// let duplicates = function (n){
//     return [...new Set(n)]
// }
// console.log(duplicates([1,1,2,2,3,4,5,1,2,3,4]))

// ---------------------------------------------------------------------------------------

// h) Rotate an array by K times

// let N =[1,2,3,4,5]
// let rotate = function (value){
//     for(let i =1; i<=value; i++){
//         let firstElement = N.shift()
//         N.push(firstElement)
//         }
//         return N
//         }
// console.log(rotate(3))

// ---------------------------------------------------------------------------------------------