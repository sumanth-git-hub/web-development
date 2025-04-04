console.log('Practice code')
let numbersToPrint = 0

while (numbersToPrint <20) {
    ++numbersToPrint
    console.log(numbersToPrint)
}


const bestCars = ['Innova','Fortuner','Virtus','SLavia','Honda City','Taigun','Kusaq','Elevate']

bestCars.push('Fronx','Vitara Breeza')

let b = 0

while(b < 6){
    console.log(bestCars[b],' top 6')
    ++b
}


let c = 0

while(c < bestCars.length) {
    bestCars[c] = bestCars[c] + ' Recommended choice of mechanics'
    console.log(`${c +1} : ${bestCars[c]}`)
    ++c
}