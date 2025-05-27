 
 const person = {
    name: "Hasib",
    age:20,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        zip: "1212"
    },
    education: {
        school: "XYZ High School",
        college: "ABC College",
        university: "DEF University"
    },
    hobbies: ["reading", "traveling", "coding"]
 }


 const {name, age, education } = person;
 console.log(name, age)
 const {school, college, university} = education
 console.log(school, college, university)

 const numberF =('mama')
 console.log(numberF,  education.school)