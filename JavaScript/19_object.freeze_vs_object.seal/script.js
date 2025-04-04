const userDetails = {
    firstName : 'Sumanth',
    lastName : 'S S',
    age : 25,
    moreInfo : {
        isGraduate : true,
        passOutYear : 2017,
        address : {
            city : 'thirthahalli',
            pinCode : null,
            collageName : undefined,
        },
    },
    convocation : false,
    scoredMarks : '80%'
}

Object.seal(userDetails)
userDetails.moreInfo.maritalStatus = 'Single'
// the maritalStatus is not able to add because of the use of Object.seal(userDetails)
delete userDetails.firstName
// the firstName is unable to delete because of Object.seal(userDetails)
userDetails.lastName = 'Hindu'
userDetails.pinCode = 577220


Object.freeze(userDetails)
userDetails.moreInfo.address.university = 'Kuvempu'
userDetails.moreInfo.address.pinCode = 253454

userDetails.firstName = 'Sharath'
userDetails.age = 23

delete userDetails.moreInfo.maritalStatus
delete userDetails.moreInfo.address.university

userDetails.scoredMarks = 'Bangalore'
// only the main object details can't be modify delete and add


console.log('lastName' in userDetails)
console.log('maritalStatus' in userDetails.moreInfo)
console.log('university' in userDetails.moreInfo.address)
// by using the in keyword we can identify the values are exist within our object or not


// Still i can able to add, modify and delete the values which nested inside the secondary objects