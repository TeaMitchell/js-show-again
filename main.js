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


for (let counter1 = 1; counter1 <= limit; counter1 += 1) {
    console.log(counter1)
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

for (let counter2 = 2; counter2 <= limit; counter2 += 2) {

}



/** KATA 03 ⮕
***
*** Log the odd numbers from 1 to 20. (1, 3, 5,...,17,19)
***
***/

console.log('%cKATA 03 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let counter3 = 1
while (counter3 <= 20) {
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
while (counter4 <= 100) {
    console.log(counter4)
    counter4 += 5
}

for (let counter4 = 5; counter4 <= 100; counter4 += 4) {
    console.log(counter4);

}

/** KATA 05 ⮕
***
*** Log all numbers up to 100 that are perfect squares. (1, 4, 9, ..., 81, 100)
***
***/

console.log('%cKATA 05 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let counter5 = 1
while (counter5 <= 100) {
    const counterSquare = Number.isInteger(Math.sqrt(counter5));
    if (counterSquare) {
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

for (let counter6 = 20; counter6 >= 1; counter6 -= 1) {
    console.log(counter6);

}

/** KATA 07 ⮕
***
*** Log the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
***
***/

console.log('%cKATA 07 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let counter7 = 20
while (counter7 > 0) {
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
while (counter8 >= 1) {
    console.log(counter8)
    counter8 -= 2
}

/** KATA 09 ⮕
***
*** Log the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
***
***/

console.log('%cKATA 09 RESULTS:', 'background: darkblue; color: white; font-weight: bold;')


let counter9 = 10
while (counter9 >= 100) {
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
while (counter10 >= 0) {
    const isSquare = Number.isInteger(Math.sqrt(counter10))
    if (isSquare) {
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

for (let index = 0; index <= sampleArray.length; index += 1) {
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
    square = Math.sqrt(sampleArray[index])
    let squElement = document.createElement('div')
    squElement.append(square)
    mainElement.append(squElement)


}

// KAT15
// Display the sum of all the numbers from 1 to 20
let kata15 = document.createElement('h1')
mainElement.append(kata15)
kata15.append('kata15')

for (let index = 0; index <= 20; index += 1) {
    let newElement1 = document.createElement('div')
    newElement1.append(index);
    mainElement.append(newElement1)
}

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