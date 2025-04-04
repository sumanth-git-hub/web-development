debugger
let userName = prompt('Please enter the user name');
let userAge = parseInt(prompt('Enter user age'));


// this code is written to show when user not entered the value but still we show the default value (istead of || method)
// if (!userName) {
//     userName = 'Sumanth Dev'
// }
// if (!userAge) {
//     userAge = '25'
// }

// this is the code written if user enter the value then only display the result whether not then no need to show
if (userName) 
{ console.log(userName)
}
if (userAge) 
{ console.log(userAge)
}

// console.log(`Name: ${userName}`);
// console.log(`Age: ${userAge}`);



if (userAge > 0 && userAge <= 4) {
    console.log(`${userName} is a kid`);
    console.log('He is playing')
} else if (userAge >= 5 && userAge <= 17) {   
    console.log(`${userName} is a school student`);
    console.log('He is studying CBSE')
        if (userAge > 5 && userAge < 15) {
            console.log('He is studying in primary school')
        }
        else {
            console.log('He is in secondary school')
            if (userName.length > 5){
                console.log('His name has more than 5 characters')
            }
                else {
                    console.log('His name has not more than 5 characters')
                }
        }
} else if (userAge >= 18 && userAge <= 24) {   
    console.log(`${userName} is a collage student`);
    console.log('He is pursuing MCA')
} else if (userAge >= 25 && userAge <= 45) {
    console.log(`${userName} is a working professional`);
    console.log('He is working as a web developer')
        if (userAge >= 30 && userAge <=39) {
            console.log('user is older than 30 years')
        }
        if (userAge >= 40 && userAge <= 45){
                console.log('user is older than 40 years')
            }
            if (userName.length > 6){
                console.log('User name has above 6 Characters')
            }
            else {
                console.log('User name has below 6 Characters')
            }
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


