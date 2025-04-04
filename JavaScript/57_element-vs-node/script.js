const childInDom = document.querySelector('body').children  // defining children (Element)
console.log('Children in DOM :',childInDom)

const childNodesInDom = document.querySelector('body').childNodes  // defining childNodes (Nodes)
console.log('childNodes in DOM :',childNodesInDom)

const findNodes = document.querySelector('body').childNodes[1] 
console.log('accessed nodes: ',findNodes, typeof findNodes)  // node is a type of object

const setAttributeForH1 = document.querySelector('body > h1').setAttribute('class','main-heading')

const findAttribute = document.querySelector('body > h1').attributes
console.log('Access Attributes: ',findAttribute)

const manipulateChildNodeValue = document.querySelector('body').childNodes[4].nodeValue = 'Updated the nodeValue of #text Node'
console.log(' Element node to Understand: to : => ',manipulateChildNodeValue)

document.querySelector('body > p:nth-child(4)').classList.add('tryEachBest') // used css with the help of classList
document.querySelector("body > p.tryEachBest").classList.add('newOne')  // created 2 class next to 'tryEachBest' without replacing