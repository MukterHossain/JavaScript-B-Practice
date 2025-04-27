

// ************************************* Inch to Feet  *******************************
// function inchToFeet(inch){
//     const feet = inch / 12
//     return feet
// }
// const result = inchToFeet(75)
// console.log(result)

// function inchToFeet(inch){
//     const feet = inch / 12
//     const feetNumber = parseInt(feet)
//     const inchReamaining = inch % 12
//     const result = feetNumber + ' ft ' + inchReamaining + ' inch.'
//     return result
// }
// const result = inchToFeet(75)
// console.log(result)


// function mileToKl(mile){
//     const kilo = mile * 1.609334
//     return kilo;
// }
// console.log(mileToKl(5))

// page (166)
// 1
// function mileToGoz(mile){
//     const goz = mile * 1760
//     return goz
// }

// console.log(mileToGoz(13))

// 2
// function kwToKalory(kilo){
//     const kalory = kilo * 860
//     return kalory
// }
// console.log(kwToKalory(20))
// console.log(kwToKalory(40))
// console.log(kwToKalory(8))

// 3
// function hoursToSecond(hour){
//     const minute = hour * 60 *60
//     return minute
// }
// console.log(hoursToSecond(1))
// console.log(hoursToSecond(6))
// console.log(hoursToSecond(10))

// 4
// function cmToM(cm){
//     const m = cm / 100
//     return m
// }
// console.log(cmToM(3250))
// console.log(cmToM(1200))

// 5
// function inchToCm(inch){
//     const cm = inch * 2.54
//     return cm
// }
// console.log(inchToCm(325))
// console.log(inchToCm(32))

// 6
// function poundToKg(pound){
//     const kg = pound * 0.453
//     return kg
// }
// console.log(poundToKg(2))
// console.log(poundToKg(10))

// 7
// function gozToMeter(goz){
//     const meter= goz * 0.91
//     return meter
// }
// console.log(gozToMeter(10))
// console.log(gozToMeter(100))



// ************************************* Leap year *******************************

// function leapYear(year){
//     if(year % 400 === 0){
//         return true
//     } else if(year % 100 === 0){
//         return false
//     } else if(year % 4 === 0){
//         return true
//     }
//     return false
// }
// console.log(leapYear(2400))
// console.log(leapYear(2052))
// console.log(leapYear(2100))
// console.log(leapYear(2017))


// page (169)
// 1
// function incomeAmount(income){
//     if(income <= 50000){
//         const tax = income * 10 / 100
//         return tax
//     } else if(income > 50000 || income <=100000){
//         const tax = income * 20 / 100
//         return tax
//     }else if(income > 100000 || income <=200000){
//         const tax = income * 40 / 100
//         return tax 
//     }else if(income > 200000){
//         const tax = income * 40 / 100
//         return tax
//     }
// }
// console.log(incomeAmount(30000))
// console.log(incomeAmount(60000))
// console.log(incomeAmount(180000))
// console.log(incomeAmount(600000))

// 2
// function percelDelevary(weight){
//     if(weight < 10){
//         const delevary = 100
//         return delevary 
//     }else if(weight < 20){
//         const delevary = 300
//         return delevary 
//     }
//     else if(weight <=50){
//         const delevary = 1000
//         return delevary 
//     }else if(weight > 50){
//         const needWeight = 50
//         const extra = weight - needWeight
//         const total = 1000 + extra * 100
//         return total
//     }
// }
// console.log(percelDelevary(5))
// console.log(percelDelevary(15))
// console.log(percelDelevary(45))
// console.log(percelDelevary(100))


// 3
function examMarks(marks){
    if(marks >= 80 || marks <=100){
        return 'A'
    }else if(marks >= 70 || marks <79){
        return 'B'
    }else if(marks >=60 || marks <69){
        return 'C'
    }else if(marks >= 50 || marks <59){
        return 'D'
    } return 'F'
}
console.log(examMarks(120))
console.log(examMarks(90))
console.log(examMarks(75))
console.log(examMarks(62))
console.log(examMarks(55))
console.log(examMarks(40))
