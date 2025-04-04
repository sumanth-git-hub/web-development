console.log('All About the Do-While Loop')

// let i = 10

// while (i < 5){
//     i++
//     console.log(i)
// }
// example of while loop

let i = 10

do {
    i++
    console.log(i)
} while(i < 5)

// when the value is false while loop won't display anything but do while does.

let s = 0

do {
    ++s
    console.log(s)
} while (s < 5)




// 

let bestCars = ['Innova Crysta','Fortuner','Virtus','Taigun','Kushaq']

let c = 0

do {
    bestCars[c] = bestCars[c] + ' is One of My favourite car'
    console.log(bestCars[c])
    ++c
} while(c < bestCars.length)

// used do while loop in array similar like for while loop



console.log('Program Ends here')
