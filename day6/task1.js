// Task Q1
// Class - Movie



// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// class Movie{
//     constructor(title,studio,rating){
//         this.title = title,
//         this.studio = studio,
//         this.rating = rating
//     }
// }
// let Movie1 = new Movie ("Inception" , "Warner-Bros Pictures" , "PG-13")
// console.log(Movie1)


//---------------------------------------------------------------------------------------------------

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// class Movie{
//     constructor(title,studio,rating = "PG"){
//         this.title = title,
//         this.studio = studio,
//         this.rating = rating 
//     }
// }
// let Movie1 = new Movie ("Inception" , "Warner-Bros Pictures")
// console.log(Movie1)

// ----------------------------------------------------------------------------------------------------


// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full

// class Movie{
//     constructor(title,studio,rating){
//         this.title = title,
//         this.studio = studio,
//         this.rating = rating 
//     }
//     static getPG(movieArray,rating){
//      return  (movieArray.filter(movie => movie.rating === rating ))
// }}
// let movieArray = []
// movieArray.push(new Movie("The Godfather","Paramount Pictures","PG"),
//                 new Movie("The Shawshank Redemption","Castle Rock Entertainment","PG"),
//                 new Movie("Pulp Fiction","Miramax films","A"),
//                 new Movie("The Dark Knight","Warner Bros Pictures","PG"),
//                 new Movie("Titanic","20th Century Studios","A"))
// console.log(Movie.getPG(movieArray,"PG"))


// -------------------------------------------------------------------------------------------------------

// d)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


// class Movie{
//     constructor(title,studio,rating){
//         this.title = title,
//         this.studio = studio,
//         this.rating = rating 
//     }
// }
// let Movie1 = new Movie ("Casino Royale" ,"Eon Productions", "PG-13")
// console.log(Movie1)
