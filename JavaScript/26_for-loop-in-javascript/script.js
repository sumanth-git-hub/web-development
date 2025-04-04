console.log('For Loop In JavaScript')

for(let i = 0; i < 10; ++i)
    console.log(i + 1)

// basic practice of for loop

let goodFriends1 = ['Babu','Sachin', 'Sharath','Rajesh']; 

for(let i = 0; i < goodFriends1.length; i++)
    console.log(goodFriends1[i])

// adding the for loop for Array

let goodFriends = ['Babu','Sachin', 'Sharath','Rajesh']; 

for(let i = 0; i < goodFriends.length; i++)
    
    // console.log(i +1, goodFriends[i] + ' is a Good Friend')
    console.log(`${i + 1}. ${goodFriends[i] +' is a Good Friend'}`)

// done with the same practice of while loop chapter for adding second name and digit

console.log('List of all the Even Number Under 50')
for(let i = 0; i <= 50; ++i)
    if(i % 2 === 0)
    console.log(i)

console.log('List of all the odd Number Under 50')
for(let i = 0; i <= 50; ++i)
    if(i % 2 === 1)
    console.log(i)

console.log('Program Ended here')

// how to get list of even and odd numbers by using for loop

// how write a tables by using for loop

let one = 0

for (let i = 1; i <=20; ++i)
    if(i % 2 === 0)
    console.log(`2 X ${++one} = ${i}`)