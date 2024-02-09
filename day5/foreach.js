let jananiResume = {
    personalInformation : {
        name : "Janani Bharathi",
        mobileNumber : 9884160610,
        email : "jananibharathi6@gmail.com",
        location : "Chennai"
        },
    objective : {
         aboutMe : "Passionate and skilled Full Stack Developer with a solid foundation in both front-end and back-end development. Proficient in programming languages like javascript and frameworks, with a keen interest in learning new technologies. Seeking opportunities to leverage my skills and contribute to innovative projects in a dynamic team environment."
        },
    qualification : {
        underGrad : {
          degree : "Bachelor of Technology",
          cgpa : 8.74,
          collegeName : "Anna University",
          passedOut : "2022"
          },
    schooling : {
        class12th : {
           percentage : 93.16,
           passedOut : 2018
           },
        class10th : {
           percentage : 95.6,
           passedOut : 2016
           } 
        }
        },
    skills : {
           programmingLanguages : "Javascript,HTML,CSS",
           frontEndTechnologies : "React.js,Angular.js",
           backEndTechnologies : "Node.js,Express.js",
           databases : "MySQL",
           versionControl : "Git,Github",
           tools : "Visual Studio Code"
        }, 
    certification : {
            courseName : "Full Stack Development",
            provider : "GUVI"
        },
    languagesKnown : {
            tamil : "read and write",
            english : "read and write",
            hindi : "read alone"
        },
    conclusion : {
            declaration : "I hereby declare that the information provided above is true to my knowledge"
        },
    }
    let array = Object.entries(jananiResume)
    array.forEach(index =>{
        console.log(index[0] , ":", index[1])
    })
  