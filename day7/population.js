let XMLHttpRequest = require ('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);
 
  const country = countries.filter((element)=>element.population < 200000)
    console.log(country.map((element)=>element.name.common))
   }
