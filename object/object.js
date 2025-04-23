 const students = {
    name: 'Mukter Hossain',
    age: 15,
    class: 12,
    isSingle: false
 }
//  console.log(students)

// page(126)
// 1
const teacher = {
   name: 'Abusaed',
   teaches: 'English',
   age: 45,
   live: 'Sonargaon',
   isMarried: true

}

const trees ={
   name: 'Maongo tree',
   height: '56 feet',
   age:25,
   fruit: 'Mango'
}
// console.log(teacher, trees)



// *************************************** object  (key of property) *******************************

// const person = {
//    name: 'soldor uddain',
//    age: 25, 
//    profession: 'developer',
//    sallry: 25000,
//    married: true,
//    'fav place': ['bandarban', 'saintmartin', 'kuakata'],
//    education: {
//       title: ['SSC', 'HSC', 'BSC', 'MSC'],
//       year: [2011, 2013, 2017, 2018]
//    }
// }
// ******************************* Dot notation and bracket notation ******************************
// console.log(person)
// console.log(person['married'])
// person.sallry = 10210210
// console.log(person.sallry)
// person.married = "He insults other girls"
// console.log(person.married)
// console.log(person.education.title)
// console.log(person.education.year)
// console.log(person.education.year[2])



// page (131)
// 1
// const player = {
//    name: 'Rahat Ali',
//    age: 22,
//    sports : 'Foot ball',
//    team: 'Mon Udash'
// }
// console.log(player.team)

//4
// const phone = {
//    brand: 'Nokia',
//    color: 'Black',
//    price: 32500,

// }
// console.log(phone.brand)
// console.log(phone['brand'])

// 7
const college ={
   name: 'NDC',
   established: 1949,
   groups : ['science', 'Arts', 'Commerce']
}
// console.log(college.groups[1])

// 8
const family ={
   father : {
      name: 'Tofajjal',
      age: 42,
      profession: 'Banker'
   },
   mother : {
      name: 'Monira Begum',
      age: 34,
      profession: 'Teacher'
   }
}
// const result = family.father.age + family.mother.age
// console.log(result)


// ******************************* Key and value ******************************


// console.log(Object.keys(family))
// console.log(Object.values(family))

const profile = {
   name: 'Rahim',
   age: 25,
   city: 'Dhaka'
}

const profileKey = Object.keys(profile)
const hasName = profileKey.includes('name')
// console.log(hasName)
// if('email' in profile){
//    console.log('Email exist')
// }else{
//    console.log('No email')
// }

if(profile.hasOwnProperty('email')){
   // console.log('Email niye boroloki dekhai')

}else{
   // console.log('Email Chara jibon')
}

if(profile.city === 'Dhaka'){
   // console.log('Jam er sohor Dhaka')
}
else{
   // console.log('Arm sob gram else.')
}

// ******************************* entries ******************************
// const person = {
//    name: 'soldor uddain',
//    age: 25, 
//    profession: 'developer',
//    sallry: 25000,
//    married: true,
//    'fav place': ['bandarban', 'saintmartin', 'kuakata'],
//    education: {
//       title: ['SSC', 'HSC', 'BSC', 'MSC'],
//       year: [2011, 2013, 2017, 2018]
//    }
// }

// const entries = Object.entries(person)
// console.log(entries)

// for(const key in person){
//    const value = person[key]
//    console.log(key, value)
// }

// const keys = Object.keys(person)
// for(const key of keys){
//    console.log(key, person[key])
// }


// page (137)
// 1
// const books = {
//    name: 'Uphold View',
//    author: 'Shihab Mamun',
//    price: 230
// }

// for(const key in books){
//    const value = books[key]
//    console.log(key,value )
// }


// 2
const article = {
   title : "learning Js",
   category : 'Programming' 
}

// if('author' in article){
//    console.log('Author Ase')
// }else{
//    console.log('Author Nai')
// }

// if(article.hasOwnProperty('author')){
//    console.log('Author Ase')
// }else{
//    console.log('Author Nai')
// }


// 3
// const laptops = {
//    brand: "Dell", model:'Inspiron', price: 45000
// }
// const laptop = Object.keys(laptops)
// for(const key of laptop){
   
//    console.log(key, laptops[key])
// }


// 4

// const phone  = {
//    brand: 'Samsung', model: "Galaxy S21", price: 85000
// }

// const result = Object.keys(phone)
// for(const key of result){
//    const value = phone[key]
//    console.log(key, value)
// }


// 5
// const bike = {
//    brand: 'Hero', price: 12000, model: 'Splendor'
// }
// console.log(Object.values(bike))

// 6
// const books = {
//    book1: "Harry potter", book2: "The Hobbit", book3: "Game of Thronse"
// }
// for(const key in books){
//    const name = books[key]
//    console.log(name)
// }

// 7
// const numbers = {
//    a: 10, b: 20, c:30, d: 40

// }
// const numGet = Object.values(numbers)
// let sum = 0
// for(let num of numGet){
//    sum = sum + num;
//    num++
// }
// console.log(sum)


// 8
// const player = {
//    name :"Messi", team: 'Argentina', goals: 91 
// }
// console.log(Object.values(player))


// 9
// const building = {
//    floors: 10, address: {street: 'Main Road', city: 'Dhaka'},
//    type: 'Commercial'
// }

// for(const key in building){
//    const result = building[key]
//    console.log(key, result)
// }




// **************************************** Freeze/seal ***************************************
// const person = {
//    name: 'soldor uddain',
//    age: 25, 
//    profession: 'developer',
//    role: 'Admin',
//    email: 'mrjhone@gmail.com',
//    password: 'newPassword120',
//    sallry: 25000,
//    married: true,
//    'fav place': ['bandarban', 'saintmartin', 'kuakata'],
//    education: {
//       title: ['SSC', 'HSC', 'BSC', 'MSC'],
//       year: [2011, 2013, 2017, 2018]
//    }
// }

// delete person.age
// console.log(person)
// Object.freeze(person)
// person.profession = 'IT'
// person.age = 50
// console.log(person)


// Object.seal(person)

// person.password = '12OldPassword325'
// person.age = 32
// console.log(person)


// page (139)
// 1
// const headphone ={
//    brand: 'Sony', price: 3000, color: 'red'
// }
// Object.freeze(headphone)
// headphone.brand = "Samsung"
// console.log(headphone)

// 2
// const player ={
//    name: 'Messi', goals: 950, club: 'Inter Miami'
// }
// Object.freeze(player)
// player.name= "Hamza"
// console.log(player)

// 3
// const book ={
//    title: "Harry Porter", auther: "JK Rowling", page: 500
// }
// Object.seal(book)
// book.auther = "Mamun"
// console.log(book)

// 4 
// const gadget ={name : 'iPhone', price: 120000, color: 'black'}
// delete gadget.price
// console.log(gadget)

// 5
// const animal ={
//    name : 'Tiger', location: 'Sundarban', 
// }
// Object.freeze(animal)
// animal.location = 'Dhaka'
// console.log(animal)


// 6
// const food = {name: 'Pizza', price: 500, size: 'Large'}
// Object.seal(food)
// food.price = 600
// console.log(food)

