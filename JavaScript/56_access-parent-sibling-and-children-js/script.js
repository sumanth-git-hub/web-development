const forSearchingParents = document.querySelector("body > ul > li:nth-child(2)")

console.log('used parentElement to find the parent of "li": ',forSearchingParents.parentElement)

console.log(forSearchingParents.parentElement.parentElement.parentElement)

console.log('trying to find the children of "li":',forSearchingParents.children)
console.log('trying to find the childNodes of "li":',forSearchingParents.childNodes)

console.log('Find children of "body":',forSearchingParents.parentElement.parentElement.children)
console.log('Find childNodes of "body":',forSearchingParents.parentElement.parentElement.childNodes)

console.log('Find the next sibling of "li":',forSearchingParents.nextElementSibling)
console.log('Find the previous sibling of "li":',forSearchingParents.previousElementSibling)
console.log('Find only nextSibling (node) of "li":',forSearchingParents.nextSibling)  // for finding the text values that placed next to the sibling element
console.log('Find only previousSibling (node) of "li":',forSearchingParents.previousSibling)
console.log('Find the next to next sibling of "li":',forSearchingParents.nextElementSibling.nextElementSibling)

