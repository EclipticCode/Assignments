let XMLHttpRequest = require ('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);
    countries.forEach((country)=>{
        console.log(country.name,`The capital of the country is:${country.capital},`,`The flag of the country is: ${country.flag}`)})
     } 