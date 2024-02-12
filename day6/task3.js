// Write a “person” class to hold all the details.


class Person{
    constructor(name,contactNumber,email,age,profession,qualification,location,maritalStatus,annulIncome,fatherName,motherName){
      this.name = name;
      this.contactNumber = contactNumber;
      this.email = email,
      this.age = age,
      this.profession = profession,
      this.qualification = qualification,
      this.location = location,
      this.maritalStatus = maritalStatus,
      this.annulIncome = annulIncome,
      this.fatherName = fatherName,
      this.motherName = motherName
    }
    getDetails(){
    console.log(`Name: ${this.name}`)
    console.log(`Contact Number: ${this.contactNumber}`)
    console.log(`Email ID: ${this.email}`)
    console.log(`Age: ${this.age}`)
    console.log(`Profession: ${this.profession}`)
    console.log(`Qualification: ${this.qualification}`)
    console.log(`Location: ${this.location}`)
    console.log(`Marital Status: ${this.maritalStatus}`)
    console.log(`Annual Income: ${this.annulIncome}`)
    console.log(`Father's Name: ${this.fatherName}`)
    console.log(`Mother's Name: ${this.motherName}`)
    }
}
let person1 = new Person("Janani",9884160610,"jananibharathi6@gmail.com",23,"Software Engineer", "B.Tech" , "Chennai" , "Single" ,"9LPA", "Bharathi" , "Kalaiarasi")

person1.getDetails()
