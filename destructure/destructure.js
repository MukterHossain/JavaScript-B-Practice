 
//  const person = {
//     name: "Hasib",
//     age:20,
//     address: {
//         city: "Dhaka",
//         country: "Bangladesh",
//         zip: "1212"
//     },
//     education: {
//         school: "XYZ High School",
//         college: "ABC College",
//         university: "DEF University"
//     },
//     hobbies: ["reading", "traveling", "coding"]
//  }

// import { sum } from "./math.js";


//  const {name, age, education, hobbies } = person;
// //  console.log(name, age)
//  const {school:newSchool, college, university} = education
// //  console.log(school, college, university)

//  const numberF =('mama')
// //  console.log(numberF,  education.school)
// const [a, b, c] = hobbies;
// const add = person.education.college;
// // console.log(add)
// // console.log(newSchool)
// // console.log(a, b, c)

// function doubleTehm(a, b){
//     return [a *2, b * 2]
// }
// const [pro, dit] = doubleTehm(5, 10);
// // console.log(pro, dit)

// const person1 = {name1: "Amit", age:25};
// const {name1, phone = "N/A"} = person1;
// // console.log(name1, phone)

// function introduce({name, age}){
//     // console.log(`Name: ${name}, Age: ${age}`)
// }

// const user = {name: "Arohi", age:20, hobby: "Reading"}
// introduce(user);

// function sum([a, b]){
//     return a + b
// }

// const data = [3, 6]
// const result= sum(data);
// // console.log(result)

// const numbers = [1, 2, 3, 4, 5]
// const [, ma, , titi, mon] = numbers

// // console.log(ma, titi, mon)


// // Pratice 202 page

// // 1
// const product = {
//     name: "Laptop",
//     price: 50000,
//     brand: "Dell"
// }

// // console.log(product.brand)

// // 2
// const item = {
//     name: "mobile",
//     price: 20000,
//     phone: "Sansung"
// }

// const {price, phone: myPhone} = item

// // console.log(`Price: ${price}, Phone: ${myPhone}`)
// //3
// const colors = ["red", "blue", "green", "yellow"]

// const [first, second] = colors
// // console.log(first, second)

// //4

// const thisNumber = [2, 5, 324, 325, 25]
// const secondNumber = thisNumber[1]
// // console.log(secondNumber)

// // 5
// const digits = [2, 4, 6, 8]

// const tow = digits[0]
// const eight =digits[3]
// // console.log(tow, eight)

// // 6
// function multiply(a,b){
// return [a *3, b*3]
// }
// const [three, six] = multiply(1, 2);
// // console.log(three, six)  

// // 7
// const person2 = {name: "Rahim", city: "Dhaka"}
// const {name: personName, city: personCity, thisPhone = "N/A"} = person2;
// console.log(`Name: ${personName}, City: ${personCity}, Phone: ${thisPhone}`)



//  *********************** Rest operator *********************


// const numbers = [1, 2, 3, 4, 5]
// const [m, n, ...rest] = numbers
// console.log(`m: ${m}, n: ${n}, rest: ${rest}`)

// const [x,y, ...mukter] = [1, 2, 2 ,"Mukter", "Hossain", 21, 35]
// console.log(`x: ${x}, y: ${y}, Others: ${mukter}`)

// const person = {
//     name: "Alice", age: 30, city: "Dhaka", country: "Bangladesh"
// }

// const {name, city, ...details} = person
// console.log(`Name: ${name}, City: ${city}, Details:`, details)

// function sum(num1, ...nums){
//     console.log(nums)
//     let total =[]
//     nums.map(x => x + 2)
//     console.log(total)
// }

// sum(1, 2, 3, 4, 5); // Output: [2, 3, 4, 5]


// pactise (204 page)
// 1
// const product = {name: "Laptop", price: 5000, brand: "Dell"}
// const {name, ...rest} = product;
// console.log(rest)


// 2
// const project = {id: 101, title:"Web App", budget: 3000, client: "Tech Corp"}
// const {title, ...rest} = project;
// console.log(rest)

// 3
// const programmer = {name: "Sophia", language: "JavaScript", experience: 5, specialy: "Frontend", tools: "React"}
// const {language, specialy, ...rest} = programmer;
// console.log(language)
// console.log(specialy)
// console.log(rest)

// 4
// const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [x, y, ...rest] = Array;
// console.log(rest)

// 5
// function sum(x, y, ...rest){
//     const total = x + y + rest.reduce((acc, curr) => acc + curr, 0);
//     return total;
// }

// const result = sum(1, 2, 3, 4, 5);
// console.log(result)

// function sum(...x){
//     return x.reduce((a, b) => a + b, 0)
// }
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// function sum(...x){
//     const total = x.reduce((a, b) => a + b, 0)
//     console.log(total)
//     return total/ x.length
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // Output: 15


//  *********************** Spread operator *********************
// const max = Math.max(2, 5, 65, 241, 23)
// console.log(max)

// const numbers = [1, 2, 3, 4, 5];
// console.log(Math.max(...numbers))

// const num = [1, 2, 3, 4, 5];
// const num1 = num 
// const num2 = [...num] 
// console.log(num)
// num.push(12000)
// num1.push(6, 10)
// num2.push(19, 10)
// console.log(num1)
// console.log(num2)

// const friends = [1, 2, 3, 4, 5];
// console.log(friends)
// const newFriends = [...friends, 6, 7, 8];
// console.log(newFriends)
// friends.push(12, 23)
// console.log(friends)
// newFriends.push("Hasib", "Amit")
// console.log(newFriends)

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const combinedArray = [...array1, ...array2]
// console.log(combinedArray)

// const person = {name: "Alice", age: 30, city: "Dhaka"}
// const newperson = {...person, country: "Banladesh"}
// console.log(newperson)

// practice (209 page)
//1
// const technologies = ["Condition", "array", "loop"]
// const newVariable = ["Variable", ...technologies]
// console.log(newVariable)

//2 
// const fruits = ["Apple", "Banana", "Mango"]
// const myFruits = [...fruits, "papaya", "orange"]
// console.log(myFruits)

// 3
// const frontEnd = ["JavaScript",]
// console.log(frontEnd)
// const backEnd = ["Node.js"]
// const database = ["MongoDB"]
// const fullStack = [...frontEnd, ...backEnd, ...database]
// console.log(fullStack)

// 6
// const car = {make: "Toyota", model: "Corolla", year: 2020}
// const newCar = {...car}
// console.log(newCar)
// newCar.year = 2030
// console.log(newCar)

// console.log(sum(5, 6))

// import {add, multiply} from "./math.js"
// console.log(add(5, 6))
// console.log(multiply(5, 6))

import greethjjjjjj  from "./math.js"
console.log(greethjjjjjj())