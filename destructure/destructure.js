 
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


 const {name, age, education, hobbies } = person;
//  console.log(name, age)
 const {school:newSchool, college, university} = education
//  console.log(school, college, university)

 const numberF =('mama')
//  console.log(numberF,  education.school)
const [a, b, c] = hobbies;
const add = person.education.college;
console.log(add)
console.log(newSchool)
console.log(a, b, c)