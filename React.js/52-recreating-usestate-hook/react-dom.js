export function render(reactElement, rootElement) {
  function createDOMElement(reactElement) {
    // 1. Handle null/undefined/boolean
    if (reactElement == null || typeof reactElement === 'boolean') {
      return document.createTextNode('')
    }

    // 2. Handle arrays
    if (Array.isArray(reactElement)) {
      return reactElement.map((el) => createDOMElement(el))
    }

    // 3. Handle strings/numbers
    if (typeof reactElement === 'string' || typeof reactElement === 'number') {
      return document.createTextNode(String(reactElement))
    }

    // 4. Handle function components
    if (typeof reactElement.type === 'function') {
      return createDOMElement(reactElement.type(reactElement.props))
    }

    // 5. Handle host elements
    const { type, props } = reactElement
    const DOMElement = document.createElement(type)

    if (props) {
      Object.entries(props).forEach(([key, value]) => {

        if(key === "style"){
            // console.log(value)
            Object.entries(value).map(([style,values])=> {
              DOMElement.style[style] = values
            })
        }
        else if (key !== 'children') {
          DOMElement[key] = value
        }
      })

      props.children?.forEach((child) => {
        const childNode = createDOMElement(child)
        if (Array.isArray(childNode)) {
          DOMElement.append(...childNode)
        } else {
          DOMElement.append(childNode)
        }
      })
    }

    return DOMElement
  }

  const DOMElement = createDOMElement(reactElement)
  rootElement.innerHTML = ""
  if (Array.isArray(DOMElement)) {
    rootElement.append(...DOMElement)
  } else {
    rootElement.append(DOMElement)
  }
}

export default { render }
