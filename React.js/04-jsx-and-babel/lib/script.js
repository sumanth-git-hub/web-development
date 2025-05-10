const appendMain = ReactDOM.createRoot(document.querySelector("#main-section"));
const createContainer = /*#__PURE__*/React.createElement("main", {
  id: "main-section"
}, /*#__PURE__*/React.createElement("section", {
  className: "parent-element",
  style: {
    marginTop: '20px',
    padding: '20px'
  }
}, /*#__PURE__*/React.createElement("div", {
  className: "first-element"
}, /*#__PURE__*/React.createElement("p", null, "Create the Nested element in React"), /*#__PURE__*/React.createElement("img", {
  alt: "react-image",
  src: "./react-image.png",
  style: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: 'rgb(255, 255, 255)',
    marginTop: '20px',
    borderRadius: '20px',
    padding: '40px'
  }
})), /*#__PURE__*/React.createElement("div", {
  className: "second-element",
  style: {
    marginTop: '20px'
  }
}, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: '10px'
  }
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "user-name",
  style: {
    display: 'inline-block',
    width: '100px'
  }
}, "User Name "), /*#__PURE__*/React.createElement("input", {
  id: "user-name",
  type: "text"
})), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
  htmlFor: "user-password",
  style: {
    display: 'inline-block',
    width: '100px'
  }
}, "Password "), /*#__PURE__*/React.createElement("input", {
  id: "user-password",
  type: "password"
})), /*#__PURE__*/React.createElement("button", {
  type: "submit",
  style: {
    width: '140px',
    marginTop: '10px',
    marginLeft: '100px',
    cursor: 'pointer',
    backgroundColor: '#fa1',
    border: 'none',
    padding: '10px',
    borderRadius: '10px'
  }
}, "Submit")))));
appendMain.render(createContainer);
const userName = 'Sumanth';
const subheading = /*#__PURE__*/React.createElement("h2", null, "Hello ", /*#__PURE__*/React.createElement("i", null, userName));
const appendFooter = ReactDOM.createRoot(document.querySelector('.footer-part'));
appendFooter.render(subheading);