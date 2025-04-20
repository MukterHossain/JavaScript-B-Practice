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
const player = {
   name: 'Rahat Ali',
   age: 22,
   sports : 'Foot ball',
   team: 'Mon Udash'
}
// console.log(player.team)

//4
const phone = {
   brand: 'Nokia',
   color: 'Black',
   price: 32500,

}
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
const result = family.father.age + family.mother.age
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
const person = {
   name: 'soldor uddain',
   age: 25, 
   profession: 'developer',
   sallry: 25000,
   married: true,
   'fav place': ['bandarban', 'saintmartin', 'kuakata'],
   education: {
      title: ['SSC', 'HSC', 'BSC', 'MSC'],
      year: [2011, 2013, 2017, 2018]
   }
}

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
