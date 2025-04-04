const checkAttributes = document.querySelector('[title="HyperText Markup Language"]')
console.dir(checkAttributes)


document.querySelector('[title]').attributes.title.value // way to access the attribute values normally
document.querySelector('span').attributes[0].value // way to access the attribute values normally



document.querySelector('span').getAttribute('title')  //using getAttribute to find the value of attribute
// or
document.querySelector('[title]').getAttribute('title') //using getAttribute to find the value of attribute

document.querySelector('[id]').getAttribute('href') // able to access other attributes values which is written in same html tag

const getAttributeVar = document.querySelector('h2').getAttribute('class')
console.log(`${getAttributeVar}`)


const setAttributeVar = document.querySelector('h2').setAttribute('title','HyperText Markup Language Attribute')  // used to add the attribute and value by using setAttribute

// document.querySelector('[class ="unique-class"]').setAttribute('id','unique-id')

document.querySelector("body > h2:nth-child(6)").setAttribute('id','unique-id') 

document.querySelector('h1').id = 'newOne' // unique way to set the attribute by just selecting an element but it is applicable only HTML defined attributes are accepted i.e (id,class), not personalized
