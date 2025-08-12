

// function doubleAll(numbers){
//     const  double = []
//     for(const num of numbers){
//         const value = num *2
//         double.push(value)
//     }
//     return double;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = doubleAll(numbers)
// console.log(result)
// function again(numbers){
//     const double = []
//     for(const num of numbers){
//         const value = num *3
//         double.push(value)
//     }
//     return double
// }

// const data = again(result)
// console.log(data)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = numbers.map(num => num *3)
// console.log(result)

// const friends = ["Tom", "Jhon", "Sakib", "Ripon", "Sohel"]
// const length = friends.map(friend => friend.length)
// const firstLetters = friends.map(friend => friend[0])
// console.log(length)
// console.log(firstLetters)

// const result = numbers.forEach(num => console.log(num))
// console.log(result)

// const result2 = friends.forEach((friend, index )=>{
//     console.log(`${index + 1} ➡️  ${friend}`)
// })
// console.log(result2)

// const result = numbers.filter(num => num > 2 && num < 6)
// console.log(result)

// const result = friends.filter(friend => friend.toLowerCase() === "ripon")
// console.log(result)



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const friends = ["Tom", "Jhon", "Sakib", "Ripon", "Sohel"]


// const result = numbers.find(num => num > 15)
// console.log(result)
const result = numbers.findIndex(num => num > 8)
console.log(result)

