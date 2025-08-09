export default function render(reactElement, rootElement) {
  function createDOMElement(reactElement) {
    // 1. Handle null/undefined/boolean
    if (reactElement == null || typeof reactElement === "boolean") {
      return document.createTextNode("");
    }

    // 2. Handle arrays
    if (Array.isArray(reactElement)) {
      return reactElement.map((element) => createDOMElement(element));
    }

    // 3. Handle strings/numbers
    if (typeof reactElement === "string" || typeof reactElement === "number") {
      return document.createTextNode(String(reactElement));
    }

    // 4. Handle function components
    if (typeof reactElement.type === "function") {
      return createDOMElement(reactElement.type(reactElement.props));
    }

    // 5. Now safe to destructure
    const { type, props } = reactElement;
    const DOMElement = document.createElement(type);

    // Apply props except children
    if (props) {
      Object.entries(props).forEach(([key, value]) => {
        if (key !== "children") {
          DOMElement[key] = value;
        }
      });

      // Append children
      props.children?.forEach((child) => {
        const childNode = createDOMElement(child);
        if (Array.isArray(childNode)) {
          DOMElement.append(...childNode);
        } else {
          DOMElement.append(childNode);
        }
      });
    }

    return DOMElement;
  }

  const NewDOMElement = createDOMElement(reactElement);
  if (Array.isArray(NewDOMElement)) {
    rootElement.append(...NewDOMElement);
  } else {
    rootElement.append(NewDOMElement);
  }
}
