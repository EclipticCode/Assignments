let XMLHttpRequest = require ('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);
    console.log(countries.filter(country=>{
        let currencies;
        if(country.currencies){
            currencies=Object.keys(country.currencies)
            return currencies.includes('USD')
        }
    }).map(country=>country.name.common))}