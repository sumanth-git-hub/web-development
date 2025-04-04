// debugger

let userName = prompt('please enter your name');
let userAge = parseInt (prompt ('please enter your age'));


// this code is written to show when user not entered the value but still we show the default value (istead of || method)
if (!userName) {
    userName = 'Sumanth Dev'
    console.log('User Name:', userName)
}
if (!userAge) {
    userAge = '25'
    console.log('User Age:', userAge)
}

// this is the code written if user enter the value then only display the result whether not then no need to show
// if (userName) 
// { console.log(userName)
// }
// if (userAge) 
// { console.log(userAge)
// }


// console.log(`Name: ${userName}`);
// console.log(`Age: ${userAge}`);



if (userAge > 0 && userAge <= 4) {
    console.log(`${userName} is a kid`);
    console.log('He is playing')
} else if (userAge >= 5 && userAge <= 17) {   
    console.log(`${userName} is a school student`);
    console.log('He is studying CBSE')
} else if (userAge >= 18 && userAge <= 24) {   
    console.log(`${userName} is a collage student`);
    console.log('He is pursuing MCA')
} else if (userAge >= 25 && userAge <= 45) {
    console.log(`${userName} is a working professional`);
    console.log('He is working as a web developer')
} else if (userAge > 45 && userAge < 121) {
    console.log(`${userName} is a retired person`);
    console.log('He is simply staying with his family')
} else if (userAge >= 121) { 
    console.log(`${userName} is immortal`);
    console.log('He is simply staying with his family')
} else { 
    console.log('Please Enter a Valid Information');
}

console.log('Program Ended!');


