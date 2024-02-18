// a) Print Odd numbers in an array

//  ((...N) => {
//         for (let i = 0; i< N.length ; i++){
//             if (N[i] % 2 !==0){
//         console.log(N[i])
//         }
//         }
//         })(1,2,3,4,5,6,7,8,9,10)

// --------------------------------------------------------------------------------------------------------

// b) Convert all the strings to title caps in a string array

// ((...name)=> {
//     for(let i =0;i<name.length;i++){
//         console.log (name[i].charAt(0).toUpperCase()+name[i].slice(1))
//     }
// })("alice","john","bob","david","charlie")

// --------------------------------------------------------------------------------------------------------------

// c) Sum of all numbers in an array 

// ((...numbers) => {
//     total = 0;
//     for (let i =0;i<numbers.length;i++){
//         total = total + numbers[i]
//     } 
//     console.log(total)
// })(1,2,3,4,5,6,7,8,9,10)

// -----------------------------------------------------------------------------------------------------------

// d) Return all the prime numbers in an array

// ((...numbers) => {
//     for(let i = 0 ; i<numbers.length ; i++){
//         let count = 0
//     for(let j=1;j<=numbers[i];j++){
//         if (numbers[i] % j  === 0){
//             count = count + 1
//         }}
//         if(count === 2){
//             console.log(numbers[i])
//         }}})(1,2,3,4,5,6,7,8,9,10,11)

// -------------------------------------------------------------------------------------------------------

// e) Return all the palindromes in an array

// ((...name) =>{
//     for( let i=0 ; i<name.length ; i++){
//         if (name[i] == name[i].split("").reverse().join("")){
//             console.log(name[i])
//         }
       
//     }})("madam","god","level","cat","malayalam","father","navan")

// -----------------------------------------------------------------------------------------------------

// f) Return median of two sorted arrays of the same size

//   ((N,M) => {
//     let O =[N,M]
//     let result = O.flat()
//     let total = (result[result.length/2]+result[(result.length/2)-1])
//     console.log( total/2)
//     })([1,2,3,4,5],[11,12,13,14,15])

// ---------------------------------------------------------------------------------------------------

// g) Remove duplicates from an array 

// ((n) => {
//     console.log ([...new Set(n)])
// })([1,1,2,2,3,4,5,1,2,3,4])

// ---------------------------------------------------------------------------------------------------

//  h) Rotate an array by K times

// (function (N,value){
//     for(let i =1; i<=value; i++){
//         let firstElement = N.shift()
//         N.push(firstElement)
//         }console.log (N)
// })([1,2,3,4,5],3)

// ---------------------------------------------------------------------------------------------------------