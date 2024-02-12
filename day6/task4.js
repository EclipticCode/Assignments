
// write a class to calculate the Uber price.

class Uber {
    constructor(priceforfirst4kms,price,kms){
        this.priceforfirst4kms = priceforfirst4kms,
        this.price = price
        this.kms = kms
    }
    getpriceforfirst4kms(){
        return 72
    }
    getpricePerKm(){
        return this.price
    }
    getcalculateKms(){
        return this.kms
    }
    getcalculatePrice(){
        return this.priceforfirst4kms + (this.price * (this.kms-4))
    }
}
let person = new Uber (72,20,7)
console.log(`The price for first 4kms is Rs.${person.getpriceforfirst4kms()}/-`)
console.log(`Total kms travelled ${person.getcalculateKms()}`)
console.log(`Price per extra km is Rs.${person.getpricePerKm()}/-`)
console.log(`Amount to be paid : Rs.${person.getcalculatePrice()}/-`)
