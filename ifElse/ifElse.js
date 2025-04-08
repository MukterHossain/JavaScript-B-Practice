
const x = 100
const y = 100

// if(x > y){
//     console.log('x is greater than y')
// }

// else if(x < y){
//     console.log('Your is equal to jlsjdj')
// }
// else if(x == y && x > y){
//     console.log('x22 is less than 2')
// }
// else{
//     console.log('y222111 is greater than 2')
// }

const rainingOutside = true
if(rainingOutside === true){
    // console.log('Take an umbrella')
}
else{
    // console.log('No need for an umbrella')

}

const weight = 20
if(weight >20 || weight === 20){
    // console.log('I hire a rikshaw')
}else{
    // console.log('I walk to the destination')
}


// If Else page(77)
// 1
const commingTime = 5.30
if(commingTime < 6){
    // console.log('Mom give me launch')
}else{
    // console.log('Mom beat me with a stick')
}

// 2
const login = true
if(login === true){
    // console.log('Welcome to website')
}else{
    // console.log('Get out')
}

// 3
const distence = 5
if(distence){
    // console.log('I give you a chocolate')
}else{
    // console.log('Your are a obbes')
}

// 4
const getMarks = 85
if(getMarks > 80){
    // console.log('I get a bike from my father') 
}else{
    // console.log('I have no bike')
}

// 5
const movieShow = 8
if(movieShow < 9){
    // console.log('I watch a movie')
}else{
    // console.log('I go home and sleep')
}

// 6
const tamperature = 30
if(tamperature >= 30){
    // console.log('Start the AC')
}else{
    // console.log('Start the fan')

}

const salary = 75000
if(salary > 50000){
    // console.log('Su Patro')
}else{
    // console.log('Nesxt 5 years single thako')
}

const isBCS = true
if(salary > 50000 && isBCS == true){
    // console.log('Sei lavel er patro')
}else{
    // console.log('doore giay moro')
}
const height = 68
if(salary >80000 || height > 40){
    // console.log('Bolo baba kobul')
}else{
    // console.log('vaag tui mokbul')
}


// if else page(80)
// 1
const age = 22
if(age > 18 && height > 60){
    // console.log('Push car')
} else{
    // console.log('sitting in the car')
}

// 2
const math = 85
const english = 81
if(math > 80 || english > 85){
    // console.log('aligible for admission')
}else{
    // console.log('I’ll get you married off!')
}

// 3
const GPA = 5
const income = 12000
if(GPA == 5 && income <10000){
    // console.log("You will get Scholarship")
}else{
    // console.log("You will not get Scholarship")
}

// 4
const workAge = 28
const workExperience = 1 
if(workAge <30 && workExperience > 2){
    // console.log("You are eligible for this job")
} else{
    // console.log("You are not eligible for this job")
}

// 5
const egg = 10
const chicken = true
if(egg > 12 && chicken == true){
    // console.log('I cook korma of egg')
}else{
    // console.log('I eat bun and banana')
}

// 6
const tampera = 101
const cough = true
if(tampera > 100 || cough == true){
    // console.log('I go to doctor')
    }else{
    // console.log('I take rest')
    }

// 7
const present = 88
const homework = true
if(present > 80 && homework == true){
    // console.log('You get permission to exam')
}else{
    // console.log('You are not allowed to exam')
}

// 8
const electricity = false
const mobileCharge = true
if(electricity  && mobileCharge == true){
    // console.log('I read a book')
}else{
    // console.log('I play a game')
}

// 9
const shartPrice =1200
const isCopun = true
if(shartPrice > 1000 && isCopun == true){
    // console.log('I get 20 percent discount')
}else{
    // console.log('I get 10 percent discount')
}




//**********************  Discount (else if)  ****************************  

const price = 4000
if(price > 5000){
    const discount = price / 100 * 10
    const pay = price - discount
    // console.log(`You have to pay ${pay}`)
}else{
    // console.log(price)
}

if(price >=5000 ){
    const discount = price / 100 * 10
    const pay = price - discount
    console.log(`You have to pay ${pay}`)
} else if(price >= 2500 && price < 5000){
    const discount = price / 100 * 5
    const pay = price - discount
    // console.log(`You have to pay ${pay}`) 
} else{
    // console.log(price)   
}

// page (83, 84)
// 1
const newPrice = 4500 
if(newPrice >= 6000){
    const discount = newPrice / 100 * 15
    const pay = newPrice -discount
    // console.log(`You have to pay ${pay}`)
}else if(newPrice >= 3000){
    const discount = newPrice /100 * 5
    const pay = newPrice - discount
    // console.log(`You have to pay ${pay}`)
} else{
    // console.log(newPrice)
}

// 2
const customerAge = 6
if(customerAge > 60){
    const discount = price / 100 *50
    const pay = price - discount
    // console.log(`You have to pay ${pay}`)
}else if(customerAge <12){
    // console.log('He dosen’t have to pay anything') 
}else{
    // console.log(price)
}

// 3
const accountBalance =7000
if(accountBalance < 1000){
    // console.log('Your account balance is low')
}else if(accountBalance >= 1000 && accountBalance <=5000){
    // console.log('Your account balance is moderate')
}else{
    // console.log('You are rich. So, you merried me')
}

// 4
const examMark = 80
if(examMark < 50){
    // console.log('You have failed the exam')
} else if(examMark >= 50 && examMark <= 80){
    // console.log('You have passed the exam')
}else{
    // console.log('You have got A+')
}

// 5
const bookPage = 800
if(bookPage < 100){
    // console.log('Small book')
}else if(bookPage >= 100 && bookPage <= 500){
    // console.log('Medium book')
}else{
    // console.log('Heart-attack size book')
}

// 6
const todayTamperature = 15
if(todayTamperature <0){
    // console.log('Ice')
}else if(todayTamperature >= 0 && todayTamperature <= 20){
    // console.log('Cool cool')
} else {
    // console.log('Hot hot')
}

// 7
const playerLavel = 20
if(playerLavel < 10){
    // console.log('Novice')
} else if(playerLavel >= 10 && playerLavel <= 20){
    // console.log('Expert')
}else {
    // console.log('Pro Gamer')
}




// ****************************  Nested if else  page(84) *********************************
const wonMoney = 400
const popcorn = 40 
if(wonMoney > 300){
    // console.log('I will go to see a movie')
    if(popcorn < 50){
        // console.log('I will buy popcorn')
    }else{
        // console.log('I will not buy popcorn')
    }
}else{
    // console.log('Home Alone')
}

// page (86)
// 1
const inviteMoney = 1200
const isInvite = true
if(isInvite == true){
    // console.log('I will go to the party')
    if(inviteMoney > 1000){
        // console.log('I will buy a gift')
    }
    else{
        // console.log('I will not buy a gift')
    }
}else{
    // console.log('I will remove the friend slist')
}

// 2
const tea = true
const biscuit = false
if(tea == true){
    if(biscuit == true){
        // console.log('I will eat biscuit with tea')
    }else{
        // console.log('I will drink tea only')
    }
}else{
    // console.log('I will drink water')
}

// 3
const userActive = true
const subscription = 'premium'
if(userActive == true){
    if(subscription == 'premium'){
        // console.log('He will see Premium content')
    }else{
        // console.log('He will see free content')
    }
}else{
    // console.log('user is not active')
}

// 4
const isFood = false
const isFoodApp = false
if(isFood == true){
    // console.log('Food is available')
} else if(isFoodApp == true){
    // console.log('I will order food from app')
} else{
    // console.log('I am Fassting')
}

// 5
const geust = 250 
const gift = true
if(geust > 100){
    if(gift == true){
        // console.log('I will give a gift')
    } else{
        // console.log('I will not give a gift')
    }
}else{
    // console.log('all friends are bolod')
}


// *********************  Logical NOT (!)  page(86) *********************
const isPassed = false
if(!isPassed){
    // console.log('I am passed')
}else{
    // console.log('I am failed')
}

// ******************  Tarnary oparator page(88) *********************
const voteAge = 10
const TakeVote  = voteAge >= 18 ? 'I can vote' : 'I can not vote'
// console.log(TakeVote)
// voteAge>= 15 ? console.log("He loves her mother") : console.log('He loves his father and mother')

let ricePrice = 500
let isLeader = true
if(!isLeader){
    const pay =  0
    // console.log(pay)
}else{
    const pay = ricePrice + 100
    // console.log(pay)
}
// isLeader ? console.log(0) : console.log(ricePrice + 100)



// page (90)
// 1 
let cashback = []
let productPrice= 4000
// productPrice >= 3000 ? console.log(cashback = 300) : console.log(cashback=0)

// 2
const yourAge = 16
// yourAge >= 15 ? console.log('teenager') : console.log('child')

// 3
const isLogedIn = true
// isLogedIn === true ? console.log("Welcome back") : console.log('Please Login')

// 4
const carOil = true
// carOil ? console.log('Ready for a long drive') : console.log('Fill the tank')

// 5
const isExamPassed = false
// isExamPassed ? console.log('Party time ') : console.log('Next Semester e serious study korbo')

// 6
const sunny = false
// sunny? console.log('Gorte gabo') : console.log('Stay home')

// 7
const Expensive = false 
// Expensive ? "" : console.log('I will buy this item')









