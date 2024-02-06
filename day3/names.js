let XMLHttpRequest = require ('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);
    for (let country of countries){
        n = country.name.common
        r = country.region
        sr = country.subregion
        p = country.population
        console.log(n,r,sr,p)
    }
    }