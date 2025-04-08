
 // *************************************** for --- of  loop *****************************************
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(const num of numbers){
    const sum = num * 10
    // console.log('Number : ', num, ',', sum)
}


// page (105)
// 1
const subjects = ['Bangla', 'Arabic', 'English', 'Urdu', 'Hindi', 'Parsi']
for(const item of subjects){
    // console.log('item: ', item)
}

// 2
const foods = ['Vegitable', 'Poteto', 'Tometo', 'Chiken', 'Meat']
for(const item of foods){
    // console.log(item)
}

// 3
const birthYear = [1970, 1985, 1993, 1996, 2014, 2017, 2024]
for(const item of birthYear){
    // console.log(item)
}

// 4
const players = ['Sarif', 'Asraf', 'Mobarok', 'Rejaul Karim', 'Billal']
for(const item of players){
    // console.log(item)
}



// *************************************** While  loop *****************************************

let num = 0
while(num < 25){
    // console.log(num)
    num = num +1  //or num += 1  or num++
}
let schoolName = 0
while(schoolName < 5){
    // console.log('Bamboo Eating High School')
    schoolName++
}

// page (109)
// 1
let workHour = []
while(workHour < 10){
    // console.log('I will practice programming minimum 3 hour a day')
    workHour++
}

// 2 
let num1 = []
while(num1 < 20){
    // console.log(num1)
    num1++
}

// 3
let num2 = 50
while(num2  < 100 ){
    // console.log(num2)
    num2++
} 

// 4
let num3 = 1
while(num3 <11){
    const sum = num3 * 3
    // console.log(sum)
    num3++

}

// 5
let num4 = 110
while(num4 <111 ){
    const sum = num4 /2
    // console.log(sum)
    num4++
}




// *************************************** While (Add/যোগ) *****************************************

let num5=1
let sum = 0
while(num5 <= 10){
    // console.log(num5)
    sum = sum +num5   
    num5++

} 
// console.log(sum)

// page (111)
// 1
let num6 = 50
while(num6 <=100){
    // console.log(num6)
    num6++
}

// 2
let num7 = 5
let sum1 = 0
while(num7 <= 15){
    // console.log(num7)
    sum1= sum1 + num7
    num7++
}
// console.log(sum1)

// 3
let students = 1
let studentsSum=0
while(students <= 50){
    // console.log(students)
    studentsSum = studentsSum + students
    students++
}
// console.log(studentsSum)

// 4
let num8 = 21
let sum2 = 0
while(num8 <=50){
    sum2 = sum2 + num8
    // console.log(sum2)
    num8++
    
}

// 5
let num9 = 20
let sum3=0
while(num9 <=40){
    sum3 = sum3 + num9
    num9++
}
// console.log(sum3)






//  *************************************** For Loop *****************************************


for(let n=0 ; n <= 10; n++){
    // console.log(n)
}
for(let i=0; i<=20; i++){
    // console.log(i)
}

for(let i= 50; i <=100; i++){
    // console.log(i)
}

let sum11 = 0
for(let i=11; i<=20; i++){
    sum11= sum11 + i
}
// console.log(sum11)

// page (114)
// 1

for(let i=150; i <= 170; i++ ){
    // console.log(i)
}

// 2
let sum12=0
for(let i=31; i<=58; i++){
    sum12 = sum12 + i
}
// console.log(sum12)

// 3
let sum13 =0
for(let i=25; i<= 75; i++){
    sum13= sum13 + i
}
// console.log(sum13)

//  *************************************** For Loop (Even-Odd) *****************************************

for(let i=0; i<=10; i++){
    if(i %2 == 0){
        // console.log(i)
    }
}

for(let i=1; i<=30; i++){
    if(i%2 == 1){
        // console.log(i)
    }
}

for(let i=1; i<=20; i++){
    if(i%2 != 0){
        // console.log(i)
    }
}

for(let i=1; i<= 10 ; i=i+2){
    // console.log(i)
}
for(let i=2; i<= 10; i= i+2){
    // console.log(i)
}



//  *************************************** For Loop (বিভাজ্য) *****************************************
for(let i=0; i<= 40; i++){
    if(i%5 == 0){
        // console.log(i)
    }
}

for(let i=0; i<=30; i++){
    if(i%3 ==0 || i%5 ==0){
        // console.log(i)
    }
}
for(let i=0; i<=30; i++){
    if(i%3 ==0 && i%5 ==0){
        // console.log(i)
    }
}

// Page (119)
// 1
for(let i=20; i<=50; i++){
    if(i%7 ==0){
        // console.log(i)
    }
}


// 2
for(let i=40; i<=80; i++){
    if(i%5 ==0 && i%7 ==0){
        // console.log(i)
    }
}

// 3
let sum14 = 0
for(let i=1; i<=40; i++){
    if(i%13 ==0){
        sum14 = sum14 +i
    }
}
// console.log(sum14)


// 4
for(let i=1; i<=40; i=i+4){
    // console.log(i)
}

// 5
for(let i=0; i<=100; i++){
    if(i%9==0 && i%6 ==0){
        // console.log(i)
    }
}

// 6
let sum15=0
for(let i=1; i<=50; i++){
    if(i%3==0 && i%4 ==0){
        sum15=sum15 +i
    }
}
// console.log(sum15)






//  *************************************** For Loop (Break and continue) *****************************************

for(let i=0; i<=10; i++){
    // console.log(i)
    if(i> 7){
        break
    }
}

for(let i=0; i<=10; i++){
    // console.log(i)
    if(i>=7){
        break
    }
}

for(let i=1; i<=10; i++){
    if(i==8){
        continue
    }
    // console.log(i)
}
for(let i=0; i<=20; i++){
    if(i%2 == 0){
        continue
    }
    // console.log(i)
}
for(let i=0; i<=20; i++){
    if(i%2 == 1){
        continue
    }
    // console.log(i)
}
for(let i=0; i<=20; i++){
    if(i%2 == 1){
        continue
    }
    // console.log(i)
}



// page (122)
// 1
for(let i=1; i<=30; i++){
    // console.log(i)
    if(i== 15){
        break
    }
}

// 2
for(let i=1; i<=40; i++){   
    if(i%7 ==0){
        continue
    }
    // console.log(i)
}

// 3
for(let i=1; i<=15; i++){
    if(i==9){
        continue
    }
    // console.log(i)
}

//4
for(let i=1; i<=20; i++){
    if(i==12){
        continue
    }
    // console.log(i)
}

// 5
for(let i=1; i<=25; i++){
    if(i%3==0){
        continue
    }
    // console.log(i)
}

// 6
for(let i=91; i<=120; i++){
    if(i%10==0){
        break
    }
    // console.log(i)
}








