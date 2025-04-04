
const userName = prompt('please enter your name') ||('Sumanth Dev');
const userAge = parseInt (prompt ('please enter your age'))||+('25');

// const userName = prompt('Please Enter your Name') || 'Sumanth'
// const userAge = prompt('Please Enter your Age') || 25

console.log(`Name: ${userName}`);
console.log(`Age: ${userAge}`);

if(userAge <= 4) 
{
    console.log(`${userName} is a kid`);
    console.log('He is playing')
}
if(userAge >= 5 && userAge <= 17) 
{
    console.log(`${userName} is a school student`);
    console.log('He is studying CBSE')
}
if(userAge >= 18 && userAge <= 24) 
{
    console.log(`${userName} is a collage student`);
    console.log('He is pursuing MCA')
}

if(userAge >= 25 && userAge <= 45) 
{
    console.log(`${userName} is a working professional`);
    console.log('He is working as a web developer')
}
if(userAge > 45) 
{
    console.log(`${userName} is a retired person`);
    console.log('He is simply staying with his family')
}

console.log('Program Ended!');

document.write(`User Name is ${userName} and he is ${userAge} years old`)




