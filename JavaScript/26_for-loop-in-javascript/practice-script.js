console.log('All about practice of for loop')

for(i= 0; i < 10; ++i)
    console.log(i+1)


const bestCars =['Innova','Fortuner','Virtus','SLavia','Honda City','Taigun','Kusaq','Elevate']
bestCars.push('Fronx','Vitara Breeza')

for(let i = 0; i < bestCars.length; ++i)
    console.log(`${i + 1}: ${bestCars[i]}`)

console.log('// print all of the even numbers under 20')

for(let i = 2; i <= 20; ++i)
    if(i % 2 == 0)
        console.log(i)

console.log('// print all of the odd numbers under 20')

for(let i =1; i < 20; ++i)
    if(i % 2 == 1)
        console.log(i)

console.log('// print the table of 4 below')

let tables = 0
for(let i = 4; i <= 40; ++i)
    if(i % 4 == 0)
        console.log(`4 x ${++tables} = ${i}`)