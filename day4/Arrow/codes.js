// a) Print Odd numbers in an array

// let odd = (N) => {
//     for (let i = 0; i< N.length ; i++){
//         if (N[i] % 2 !==0){
//     console.log(N[i])
//     }
//     }
//     }
//     let N = [1,2,3,4,5,6,7,8,9,10]
//     odd(N)

// ----------------------------------------------------------------------------------------------------------------------

// b) Convert all the strings to title caps in a string array 

// let name = function (...value){
//     for(let i=0;i<value.length;i++){
//         console.log((value[i].charAt(0).toUpperCase()+value[i].slice(1)))
//     }
// }
// name("john","david","bob","charlie","alice")

// -----------------------------------------------------------------------------------------------------------------------

//  c) Sum of all numbers in an array

// let sum = (...numbers) => {
//     total = 0;
//     for (let i =0;i<numbers.length;i++){
//         total = total + numbers[i]
//     } 
//     console.log(total)
// }
// sum(1,2,3,4,5,6,7,8,9,10)

// ----------------------------------------------------------------------------------------------------------------

// d) Return all the prime numbers in an array

// let numbers = (...numbers) => {
//     for(let i = 0 ; i<numbers.length ; i++){
//         let count = 0
//     for(let j=1;j<=numbers[i];j++){
//         if (numbers[i] % j  === 0){
//             count = count + 1
//         }}
//         if(count === 2){
//             console.log(numbers[i])
//         }}}
//         numbers(1,2,3,4,5,6,7,8,9,10,11)

// -----------------------------------------------------------------------------------------------------------------

//  e) Return all the palindromes in an array


// let palindrome = (...name) =>{
// for( let i=0 ; i<name.length ; i++){
//     if (name[i] == name[i].split("").reverse().join("")){
//         console.log(name[i])
//     }
   
// }}
// palindrome("madam","god","level","cat","malayalam","father","navan")

// -------------------------------------------------------------------------------------------------------