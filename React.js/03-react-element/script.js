// using javascript to create the elements
const h2ElementJs = document.createElement("h2");
h2ElementJs.classList.add("sub-heading");
h2ElementJs.setAttribute("id", "new-id");
h2ElementJs.textContent = "Namsthe JavaScript";
document.querySelector("body").append(h2ElementJs);
h2ElementJs.style.marginTop = '20px'



// using React to create the element

// const h2Element = React.createElement(
//   "h2",
//   { className: "sub-heading", id: "sub-id" },
//   "Namasthe React"
// );

// const h2Element = {
// $$typeof: Symbol.for('react.element'),
//   type: "h2",
//   ref: null,
//   props: {
//     className: "sub-heading",
//     id: "sub-id",
//     children: "Namasthe React",
//   }
// };

const rootAppend = ReactDOM.createRoot(document.querySelector("#root"));

// created the element by using the object in react
// rootAppend.render(h2Element);
rootAppend.render({
  $$typeof: Symbol.for("react.element"),
  type: "h2",
  ref: null,
  props: {
    className: "sub-heading",
    id: "sub-id",
    children: [
      {
        $$typeof: Symbol.for("react.element"),
        type: "span",
        ref: null,
        props: {
          children: [
            {
              $$typeof: Symbol.for("react.element"),
              type: "button",
              ref: null,
              props: {
                children: "1st Button",
              },
            },
            {
              $$typeof: Symbol.for("react.element"),
              type: "button",
              ref: null,
              props: {
                children: "2nd Button",
              },
            },
          ],
        },
      },
      {
        $$typeof: Symbol.for("react.element"),
        type: "button",
        ref: null,
        props: {
          children: "Hello world!!",
        },
      },
      {
        $$typeof: Symbol.for("react.element"),
        type: "i",
        ref: null,
        props: {
          children: " Love React.js",
        },
      },
    ],
  },
});



//created the element that all is going to be nested inside the main tag

const appendMain = ReactDOM.createRoot(document.querySelector("#main-section"));

const createContainer = React.createElement(
  "section",
  {
    key: 1,
    className: "parent-element",
    style: {
      marginTop: "20px",
      padding: '20px'
    },
  },
  [
    React.createElement("div", { key: 1, className: "first-element" }, [
      React.createElement(
        "p",
        { key: "1.1" },
        "Create the Nested element in React"
      ),
      React.createElement("img", {
        key: "1.2",
        alt: "react-image",
        src: "./react-image.png",
        style: {
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#fff",
          marginTop: "20px",
          borderRadius: "20px",
          padding: "40px",
        },
      }),
    ]),
  ],
  [
    React.createElement(
      "div",
      {
        key: 2,
        className: "second-element",
        style: {
          marginTop: "20px",
        },
      },
      React.createElement(
        "form",
        { key: "form-key" },
        [
          React.createElement(
            "div",
            {
              key: 2.1,
              style: {
                marginBottom: "10px",
              },
            },
            [
              React.createElement(
                "label",
                {
                  key: 2.2,
                  htmlFor: "user-name",
                  style: {
                    display: "inline-block",
                    width: "100px",
                  },
                },
                "User Name "
              ),
              React.createElement("input", {
                key: 2.3,
                id: "user-name",
                type: "text",
              }),
            ]
          ),
        ],
        [
          React.createElement("div", { key: 3 }, [
            React.createElement(
              "label",
              {
                key: 3.1,
                htmlFor: "user-password",
                style: {
                  display: "inline-block",
                  width: "100px",
                },
              },
              "Password "
            ),
            React.createElement("input", {
              key: 3.2,
              id: "user-password",
              type: "password",
            }),
          ]),
        ],
        React.createElement('button', {key: 'button-key', type: 'submit', style: {
            width: '140px',
            marginTop: '10px',
            marginLeft: '100px',
            cursor: 'pointer',
            backgroundColor: '#fa1',
            border: 'none',
            padding: '10px',
            borderRadius: '10px'
        }}, 'Submit')
      )
    ),
  ]
);

appendMain.render(createContainer);