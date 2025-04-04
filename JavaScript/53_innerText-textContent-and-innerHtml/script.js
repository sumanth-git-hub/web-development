const paragraph = document.querySelectorAll('.para')
console.log(paragraph)

const addContent = [
    `<p><i>innerText is a property</i> that returns the rendered text content of an HTML element and its descendants and
     innerText only shows <strong>"human-readable" elements</strong>.</p>`,
    '<p>The innerHTML property recognizes HTML tags and renders the content according to the tags.</p>',
    '<p>textContent property sets or returns the text content of the specified node, and all its descendants.</p>'
]

paragraph.forEach((reWrite,i) => {
    console.log(reWrite.innerHTML = addContent[i])
})

const setFirstPara = document.querySelector('p')
// console.log(setFirstPara)

console.log('Used innerText: ',setFirstPara.innerText)
console.log('Used innerHtml: ',setFirstPara.innerHTML)
console.log('Used textContent: ',setFirstPara.textContent)