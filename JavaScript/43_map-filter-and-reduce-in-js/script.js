const months = ['January','February','March','April','May','December']

// used to write the function by using forEach method
// months.forEach((month)=>{
//     console.log(month)
//     return month
// })

// used to write the function by using map method

const lowerCaseMonths = months.map((month,index,array)=>{  // after = is the old same way like forEach, written the variable because to see the value of map (array)
    console.log(index + 1,month,array)
    return month.toLocaleLowerCase()
    // return index + 1
})
console.log(lowerCaseMonths)

// another way to print the values of above written function method

// console.log(months.map((month)=>{  
//     console.log(month)
//     return month.toLocaleLowerCase()
// }))

// used to write the function by using filter method 
/*
const filteredMonths = months.filter((month,index,array)=>{ 
    console.log(index + 1,month)
    return true
    // return false
    // return month.toLocaleLowerCase()  // no difference we can see if we add uppercase & lower case
})
console.log(filteredMonths)
*/

// used to write the function by using filter method 
const filteredMonths = months.filter((month,index,array)=>{ 
    // console.log(month.length <= 5)
    console.log(month.length >= 5)
    // return month.length <= 5 // it only displays the true values in console
    // return month.length >= 5 
    return index > 3
    // return false
    // return month.toLocaleLowerCase()  // no difference we can see if we add uppercase & lower case
})
console.log(filteredMonths)

// using the include keyword inside the filter method

const includeFilterMonth = months.filter((month)=> {
    console.log(month.toLocaleLowerCase().includes('m'))
    return month.toLocaleLowerCase().includes('m')
})
console.log(includeFilterMonth)

// another example to understand how filter works

const students = [
    {
        name: 'Sumanth',
        age: 25
    },
    {
        name: 'Sharath',
        age: 20
    },
    {
        name: 'Abhi',
        age: 16
    },
    {
        name: 'Amith',
        // name: 'Akash',
        age: 18
    },
    {
        name: 'Ayush',
        age: 17
    },
]
/*
const filterMajorStudents = students.filter((student,index) => {
    console.log(index, student.age >= 18)
    return student.age >= 18
})
console.log(filterMajorStudents)

const majorStudentsName = filterMajorStudents.map((students) => {  // map used to fetch the name of the students who are above 18
    return students.name
})
console.log(majorStudentsName)
*/

// chaining the filter and map method
/*
const filterMajorStudents = students.filter((student,index) => {
    console.log(index, student.age >= 18)
    return student.age >= 18
}).map((students)=> {
    return students.name
})

console.log(filterMajorStudents)
*/

const filterMajorStudents = students.filter((student,index) => {
    console.log(index, student.age >= 18)
    return student.age >= 18
}).map((students)=> {
    return students.name
}).filter((students) => {  // used this filter to exclude the student name that not contains "S"
    return students.toLocaleLowerCase().includes('s')
})
console.log(filterMajorStudents)