console.log('Function in JavaScript')

//  function definition

function introduceMe(username = 'Sumanth',userAge,profession) {
    // if (!username) {
    //     username = 'Developer'
    // }
    // console.log(username)

    // console.log('username type:',typeof username, 'userAge type:', typeof userAge, 'profession type:', typeof profession)
    console.log('Hello');
    // console.log(`my name is ${username || 'Developer'}`);
    console.log(`my name is ${username}`);
    console.log(`i am ${userAge} years old`)
    console.log(`i am working as a ${profession}`);
    // return true
}

// //                  function call
// const returnValue = introduceMe()

introduceMe(undefined, 25, 'Software developer')
introduceMe('Sharath', 20, 'Full stack developer')
introduceMe('Sachin', 27, 'Mobile developer')
