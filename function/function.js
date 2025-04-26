// function mama(){
//     console.log('Hello')
// }
// mama()
// const mama = () =>{
//     console.log('Hello')
//     console.log('Hello 2 ')
//     console.log('Hello 3')
//     console.log('Hello 4')
// }
// mama()


// function myData(num, sum){
//     const result= num * 2
//     const tatal = result + sum
//     // console.log(result , tatal)
// }

// myData(2, 10)

// function squre(num){
//     const number = num * num
//     // console.log(number)
// }
// squre(20)

// function add(a, b, c, d){
//     const total = a + b + c + d
//     console.log(a, b , c ,d)
//     console.log(total)
// }
// add(1, 2, 'm', 'u')

// function difference(num1, num2){
//     const diff = num1 - num2
//     console.log(diff)
// }
// const fatherAge=65
// const myAge = 30
// difference(fatherAge, myAge)


// function neAdd(a, b){
//     console.log(arguments)
//     let sum =0
//     for(const num of arguments){
//         sum = sum + num
//     }
//     console.log(sum)
//     return a +b
    
// }

// const result = neAdd(1, 2, 3, 4)
// console.log(result)


// page(149)
// 1
// function age(num1, num2){
//     return num1 + num2;
// }
// const fatherAge = 50;
// const sonAge = 20
// const result = age(fatherAge, sonAge)
// console.log(result)


// 2
// function multiple(num1, num2){
//     return num1 * num2
// }
// const result =multiple(20, 15)
// console.log(result)

// 3
// function examResult(num1, num2, num3){
//     return num1 + num2 + num3
// }
// const result = examResult(80, 85, 75)
// console.log(result)



//4
// function year(nowYear, myBirth){
//     console.log(nowYear - myBirth)
// }
// year(2025, 1996)

// 5
// function mean(a, b, c, d){
//     const sum = a + b + c + d
//     return sum / 4
// }
// const result = mean(2, 6, 4, 8)
// console.log(result)

// 7 



// ****************************************** Return **********************************************


// const potato = 35
// const onion = 62
// const shirt = 500
// const pant = 1250
// function add(price1, price2){
//     return price1 + price2
// }
// const bill1= add(potato, onion)
// const bill2 = add(shirt, pant)
// const finall = add(bill1, bill2)
// console.log(finall)

// function doMath(num1, num2){
//     const sum = num1 + num2
//     const diff = num1 - num2
//     const multiple = sum * diff 
//     const result = multiple / 5
//     return result;
// }

// const result = doMath(50, 10)
// console.log(result)

// function isEven(num){
//     if(num % 2 === 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isEven(11)) // false
// console.log(isEven(10)) // true

// Page(153)
// 1
// function maxNum(num){
//     if(num> 10){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(maxNum(10))

// 2
// function newNum(num){
//     if(num % 13 === 0){
//         return true
//     }
//     return false
// }
// console.log(newNum(20))

// 3
// function eatinFood(rice, curry, drinks){
//     const result = rice + curry + drinks
//     return result;
// }
// console.log(eatinFood(100, 150, 60))


// 4
// function voting(age){
//     if(age > 18){
//         return 'Eligible for Voting'
//     }
//     return 'Not Eligible'
// }
// console.log(voting(10))

// 5
// function getString(data){
//     return data.length
// }
// const text = "This is my home town"
// const result = getString(text)
// console.log(result)

// 6
// function multiple(a, b, c){
//     return a+b+c /3
// }
// console.log(multiple(20, 10, 40))

// 7
// function checkNum(num){
//     if(num % 2 === 1){
//         return num * -1
//     }
//     return 'Even'
// }
// console.log(checkNum(20))


// ****************************************** check even return **********************************************

// function getStringSize(str){
//     const size = str.length
//     if(size % 2 === 0){
//         // console.log('this is even')
//         return true
//     } else{
//         return false
//     //    console.log('this is Odd') 
//     }
    
// }
// const gStr = "Country"
// const result = getStringSize(gStr)
// console.log(result)

// function doubleOrTriple(num, doDouble){
//     if(doDouble){
//         return num * 2
//     }
//     else{
//         return num * 3
//     }
// }
// console.log(doubleOrTriple(10, true))
// console.log(doubleOrTriple(10, false))

// function numberElement(nums){
//     const len= nums.length
//     return len
// }
// const len = numberElement([12, 10, 25, 20, 24, 6, 9, 20, 50])
// console.log(len)


// page (157)
// 1
// function lenGet(arr){
//     const size = arr.length
//     if(size % 2 === 0){
//         return 'Even arr'
//     } return 'Odd arr'
// }
// const arr = lenGet([1, 2, 5, 3, 8, 5, 4 , 6])
// console.log(arr)

// 2
// function getName(name){
//     return name[0]
// }
// console.log(getName('Mukter'))

// 3
// function gatNum(num){
//     if(num > 10){
//         const result = num / 10
//         return result
//     } return num * 10
// }
// console.log(gatNum(20))
// console.log(gatNum(10))

// 4
// function addNum(arr){
//     const result = arr[0] + arr[1]
//     return result
// }
// console.log(addNum([5, 8, 5, 2, 4, 6, 3]))

// 5
// function getNum(n){
//     if(n % 2 === 0){
//         const result = n *2
//         return result
//     }
//     else{
//         const result = n *3
//         return result
//     }
// }
// console.log(getNum(10))
// console.log(getNum(19))

// 6
// function getTwoName(name1, name2){
//     if(name1.length > name2.length){
//         return true
//     } return false
// }
// console.log(getTwoName('Mukter Hossain', 'Nazmul'))
// console.log(getTwoName('Mukter', 'Nazmul Islam'))

// 7
// function getNewNum(num1, num2){
//     const mul=num1 * num2
//     if(mul > 100){
//         return mul /2
//     } 
//     return mul
// }

// console.log(getNewNum(10, 8))
// console.log(getNewNum(10, 12))




// ****************************************** Array Operation **********************************************

// function sumOfNum(numbers){
//     let sum = 0
//     for(const num of numbers){
//         sum = sum + num
//         // console.log(sum)
//     }
//     return sum
    
// }

// const result = sumOfNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(result)
// function sumOfEvenNum(numbers){
//     let sum = 0
//     for(const num of numbers){
//         if(num % 2 === 0){
//             sum = sum + num
//         }
//     }
//     return sum
    
// }

// const result = sumOfEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(result)


// page (161)
// 1
// function sumOfOddNum(numbers){
//     let sum = 0
//     for(const num of numbers){
//         if(num % 2 === 1){
//             sum = sum + num
//         }
//     }
//     return sum
// }
// console.log(sumOfOddNum([5, 15, 8, 7]))


// 2
// function getNum(numbers){
//    if(numbers.length < 2){
//     return "অ্যারেতে অন্তত দুইটি উপাদান থাকা দরকার।"
//    }
//    return numbers[0] < numbers[1] ? numbers[0] : numbers[1]
// }

// // const result  = getNum([20, 45, 78])
// console.log(getNum([20, 12, 78]))
// console.log(getNum([20, 45, 78]))

// 3
// function myAge(age){
//     if(age< 18){
//         return 18
//     } else if(age > 45){
//         return 45;
//     } return age
// }
// console.log(myAge(15))
// console.log(myAge(50))
// console.log(myAge(35))

// 4
// function sumOfNum(numbers){
//     let sum = 0
//     for(const num of numbers){
//         if(num % 4 === 0){
//             sum = sum + num
//         }
//     }
//     return sum
// }
// console.log(sumOfNum([2, 4, 5, 7, 8, 32, 45]))

// 5
// function getNum(num){
//     if(num<20){
//         return num * 2
//     } return num / 20
// }

// console.log(getNum(10))
// console.log(getNum(40))

// 6
// function negNum(numbers){
//     let sum = 0
//     for(const num of numbers){
//         if(num < 0){
//             sum = sum + num
//         }
//     }
//     return sum
// }

// const result = negNum([1, -21, 2, -32, -14, 25, -562])
// console.log(result)

// 7 
// function multiple(numbers){
//     let sum = 1
//     for(const num of numbers){
//         if(num % 3 === 0){
//             sum = sum * num
//         }
//     }
//     return sum
// }
// console.log(multiple([2, 3, 6, 8, 9, 11, 12, 14, 17, 18, 21]))






