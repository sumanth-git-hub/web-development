console.log('Practice do while loop')
let doWhile = 10
do {
    ++doWhile
    console.log(doWhile)
}while(doWhile < 5)

    const bestCar =['Innova','Fortuner','Virtus','SLavia','Honda City','Taigun','Kusaq','Elevate']
    bestCar.push('Fronx','Vitara Breeza')

    let carIndexValue = 0

    do {
        
        console.log(`${carIndexValue + 1}: ${bestCar[carIndexValue]}`)
        carIndexValue++
    }while(carIndexValue < bestCar.length)