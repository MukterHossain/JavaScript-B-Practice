 
//  let money = 10
//   money = money +12
//  console.log(money)

// const numbers = [1, 2, 3, 4, 5, 6]
// numbers[2] = 20
// numbers.push(25, 23, 28)
// console.log(numbers)

// const student = {
//     name: 'Mukter',
//     age: 29,

// }
// student.name = 'Mukter Hossain'
// console.log(student)

// ******************************************* Default *************************************
// function add(num1 = 0, num2 = 0){
//     const result = num1 + num2
//     console.log(num1, num2, result)
//     return result
// }
// console.log(add(5))
// console.log(add(5, 6))

// page (186)
// 1
// function add(num1 = 0, num2 = 0, num3 = 0){
//     const result = num1 + num2 + num3
//     return result
// }
// console.log(add(1, 5, 6))

// 2
// function save(money = 50){
//     return money
// }
// console.log(save())
// console.log(save(150))

// 3
// function member(name = 'anonymous', sellary = 0){
//     const result = name + ',' + sellary
//     return result
// }
// console.log(member('Mukter', 1200))
// console.log(member())
// console.log(member('Mukter'))
// console.log(member(1, 1200))

// 4
// function square(number = 1){
//     const result = number * number
//     return result;
// }
// console.log(square())
// console.log(square(5))

// 5
// function addProduct(name = 'Unknown Product', cost =1){
//     const result = name + ' , ' + cost
//     return  result
// }
// console.log(addProduct())
// console.log(addProduct('bolod', 120))


//6
// function getArray(array = ['JS Book']){
//     return array;
// }
// console.log(getArray())
// console.log(getArray([1, 2, 3, 4, 5]))

// 7
// function gotMoney(price = 10, quantity = 1){
//     const result = price * quantity
//     return result
// }
// console.log(gotMoney(20, 5))
// console.log(gotMoney())

// 8
// function newArray(array = [5, 10, 15]){
//     let arr = []
//     for(const num of array){
//         const result = num * 2
//         arr.push(result)
//     }
//     return arr;
    
// }
// console.log(newArray())
// console.log(newArray([1, 2, 3, 4, 5, 6, 7]))

//9
// function simpleInterest({principal = 1000, rate = 5} = {}){
//     const result = (principal * rate) / 100
//     return result
// }

// console.log(simpleInterest())
// console.log(simpleInterest({ principal:10000, rate: 10 }))
// console.log(simpleInterest({ principal:50000, rate: 10 }))

// 10
// function getSalary({salary = 50000, tax=10}={} ){
//     const getTax = (salary * tax ) / 100
//     const pay = salary - getTax
//     return pay
// }
// console.log(getSalary())
// console.log(getSalary({salary: 10000, tax: 20}))
// console.log(getSalary({salary: 100000, tax: 5}))




// ******************************************* Template String *************************************

// const a = 10
// const b = 20
// const result  = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b)
// const result  = `The sum of ${a} and ${b} is ${a + b}`

// console.log(result)
// console.log(`
//     Amar sonar bangla
//     Ami tomay valobasi
//     chito din tomar akash
//     Tomar batas
//     `)

// const getName = function(){
//     return "Naem Ahmed"
// }
// const message = `Na Bolle Naem, ase amar ${getName()}`
// console.log(message)

// const age = 20
// const result = `You are ${age > 18 ? 'Adult': 'Minor'}`
// console.log(result)


// const user = {name: 'mukter', age: 25}
// const info = `Name: ${user.name}, Age: ${user.age}`
// console.log(info)

// const fruits = ["Apple", "Tariq", "Mango"]
// const second = `My second favorite fruit is: ${fruits[1]}`
// const list = `My favorite fruits are: ${fruits.join(",")}`
// console.log(list)

// const title = "Welcome"
// const body = "This is a dynamic template"
// const html = `<div>
// <h1>${title}</h1>
// <p>${body}</p>
// </div>`
// console.log(html)

// const radius = 5
// const area = `Circle area is ${Math.PI*radius ** 2}.`
// console.log(area)

// const greet = function(name){
//     return `Hello, ${name}`
// }
// console.log(greet('Naem'))

// page (191)
// 1






// ******************************************* Arrow Function *************************************