/** KATA 01 ⮕
***
*** Log the numbers from 1 to 20. (1, 2, 3,..., 19, 20)
***
**/

mainElement = document.querySelector('main')

console.log('%cKATA 1 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter1 = 1
const limit = 20
while (counter1 <= limit) {
    console.log(counter1)
    counter1 += 1
}

let kata1 = document.createElement('h1')
mainElement.append(kata1)
kata1.append('kata1')

for (let counter1 = 1; counter1 <= limit; counter1 += 1) {
    console.log(counter1)
    let newElement = document.createElement('div')
    newElement.append([counter1]);
    mainElement.append(newElement)
}


/** KATA 02 ⮕
***
*** Log the even numbers from 1 to 20. (2, 4, 6,...18,20)
***
***/

console.log('%cKATA 02 RESULTS:', 'background: darkblue; color: white; font-weight: bold;') // These console.logs are just to help make the console log better organized and more readable

let counter2 = 1
while (counter2 <= limit) {
    const evenCounter = counter2 % 2 === 0
    if (evenCounter)
        console.log(counter2)
    counter2 += 1
}
let kata2 = document.createElement('h1')
mainElement.append(kata2)
kata2.append('kata2')


for (let counter2 = 2; counter2 <= limit; counter2 += 2) {
    let newElement2 = document.createElement('div')
    newElement2.append([counter2])
    mainElement.append(newElement2)

}



/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter3 = 1

let kata3 = document.createElement('h1')
const newElement3 = document.createElement('div')
mainElement.append(kata3)
mainElement.append(newElement3)
kata3.append('kata3')


while (counter3 <= 20) {
    newElement3.append([counter3 + ', '])
    console.log(counter3)
    counter3 += 2

}



/** KATA 04 ⮕
***
*** Log the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
***
***/

console.log('%cKATA 04 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter4 = 5

let kata4 = document.createElement('h1')
let newElement4 = document.createElement('div')
mainElement.append(kata4)
mainElement.append(newElement4)
kata4.append('kata4')

while (counter4 <= 100) {
    newElement4.append([counter4 + ', '])
    console.log(counter4)
    counter4 += 5
}


/** KATA 05 ⮕  
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/

console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter5 = 1

let kata5 = document.createElement('h1')
const newElement5 = document.createElement('div')
mainElement.append(kata5)
mainElement.append(newElement5)
kata5.append('kata5')

while (counter5 <= 100) {
    const counterSquare = Number.isInteger(Math.sqrt(counter5));
    if (counterSquare) {
        newElement5.append([counter5 + ', '])
        console.log(counter5)
    }
    counter5 += 1


}



/** KATA 06 ⮕
***
*** Log the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
***
***/

console.log('%cKATA 06 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


counter6 = 20
while (counter6 >= 1) {
    console.log(counter6)
    counter6 -= 1
}
let kata6 = document.createElement('h1')
mainElement.append(kata6)
kata6.append('kata6')


for (let counter6 = 20; counter6 >= 1; counter6 -= 1) {
    console.log(counter6);
    let newElement6 = document.createElement('div')
    newElement6.append([counter6])
    mainElement.append(newElement6)

}

/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter7 = 20

let kata7 = document.createElement('h1')
const newElement7 = document.createElement('div')
mainElement.append(kata7)
mainElement.append(newElement7)
kata7.append('kata7')

while (counter7 > 0) {
    newElement7.append([counter7 + ', '])
    console.log(counter7)
    counter7 -= 2
}





/** KATA 08 ⮕
***
*** Log the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
***
***/

console.log('%cKATA 08 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter8 = 20

let kata8 = document.createElement('h1')
const newElement8 = document.createElement('div')
mainElement.append(kata8)
mainElement.append(newElement8)
kata8.append('kata8')

while (counter8 >= 1) {
    newElement8.append([counter8 + ', '])
    console.log(counter8)
    counter8 -= 2
}


/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter9 = 100

let kata9 = document.createElement('h1')
const newElement9 = document.createElement('div')
mainElement.append(kata9)
mainElement.append(newElement9)
kata9.append('kata9')

while (counter9 >= 5) {
    newElement9.append([counter9 + ', '])
    console.log(counter9)
    counter9 -= 5
}


/** KATA 10 ⮕
***
*** Log the numbers that are perfect squares, counting down from 100. (100, 81, 64, ..., 4, 1)
***
***/

console.log('%cKATA 10 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')

let counter10 = 100

let kata10 = document.createElement('h1')
const newElement = document.createElement('div')
mainElement.append(kata10)
mainElement.append(newElement)
kata10.append('kata10')



while (counter10 >= 0) {
    const isSquare = Number.isInteger(Math.sqrt(counter10))
    if (isSquare) {
        newElement.append([counter10 + ', '])
        console.log(counter10)
    }
    counter10 -= (1)
    
}



// KATA 11
// Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

let kata11 = document.createElement('h1')
mainElement.append(kata11)
kata11.append('kata11')

for (let index = 0; index < sampleArray.length; index += 1) {
    const newElement = document.createElement('div')
    newElement.append(sampleArray[index]);
    mainElement.append(newElement)

}


// KATA 12
// Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)

let kata12 = document.createElement('h1')
mainElement.append(kata12)
kata12.append('kata12')

for (let index = 0; index < sampleArray.length; index += 1) {
    if (sampleArray[index] % 2 === 0) {
        let evenElement = document.createElement('div')
        evenElement.append(sampleArray[index]);
        mainElement.append(evenElement)
    }

}

// KATA 13
// Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)

let kata13 = document.createElement('h1')
mainElement.append(kata13)
kata13.append('kata13')

for (let index = 0; index < sampleArray.length; index += 1) {
    if (sampleArray[index] % 2 !== 0) {
        let oddElement = document.createElement('div')
        oddElement.append(sampleArray[index]);
        mainElement.append(oddElement)
    }

}

// KATA 14
// Display the square of each element in sampleArray. (219961, 570025, …, 222784
let kata14 = document.createElement('h1')
mainElement.append(kata14)
kata14.append('kata14')

for (let index = 0; index < sampleArray.length; index += 1) {
    square = sampleArray[index] * sampleArray[index]
    let squElement = document.createElement('div')
    squElement.append(square)
    mainElement.append(squElement)


}

// KAT15
// Display the sum of all the numbers from 1 to 20
let kata15 = document.createElement('h1')
mainElement.append(kata15)
kata15.append('kata15')

let sum15 = 0
for (let index = 0; index <= 20; index += 1) {
    sum15 += index
}

let newElement1 = document.createElement('div')
newElement1.append(sum15);
mainElement.append(newElement1)
// KATA16
// Display the sum of all the elements in sampleArray.
let kata16 = document.createElement('h1')
mainElement.append(kata16)
kata16.append('kata16')

let sumKata = 0
for (let i = 0; i < sampleArray.length; i++) {
    sumKata += sampleArray[i]

}
let sumKata16 = document.createElement('div')
sumKata16.append(sumKata);
mainElement.append(sumKata16)
console.log(sumKata);

// KATA17
// Display the smallest element in sampleArray.
let kata17 = document.createElement('h1')
mainElement.append(kata17)
kata17.append('kata17')
small = Number.POSITIVE_INFINITY
for (let index = 0; index < sampleArray.length; index += 1) {
    small = Math.min(small, sampleArray[index])
}

let smallKata = document.createElement('div')
smallKata.append(small)
mainElement.append(smallKata)

// KATA18
// Display the largest element in sampleArray.
let kata18 = document.createElement('h1')
mainElement.append(kata18)
kata18.append('kata18')
for (let index = 0; index < sampleArray.length; index += 1){
    var max = Math.max(...sampleArray)
    

}

let largeKata = document.createElement('div')
largeKata.append(max)
mainElement.append(largeKata)