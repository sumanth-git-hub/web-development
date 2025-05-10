


const appendMain = ReactDOM.createRoot(document.querySelector("#main-section"));

const createContainer = <main id="main-section">
      <section className="parent-element" style={{marginTop: '20px',
         padding: '20px'}}>
        <div className="first-element">
          <p>Create the Nested element in React</p>
          <img
            alt="react-image"
            src="./react-image.png"
            style = {{
              width: '100%',
              maxWidth: '600px',
              backgroundColor: 'rgb(255, 255, 255)',
              marginTop: '20px',
              borderRadius: '20px',
              padding: '40px',
            }}
          />
        </div>
        <div className="second-element" style={{marginTop: '20px'}}>
          <form>
            <div style= {{marginBottom: '10px'}}>
              <label htmlFor="user-name" style={{display: 'inline-block',
              width: '100px'}}
                >User Name </label
              ><input id="user-name" type="text" />
            </div>
            <div>
              <label
                htmlFor="user-password"
                style= {{display: 'inline-block',
                   width: '100px'}}
                >Password </label
              ><input id="user-password" type="password" />
            </div>
            <button
              type="submit"
              style= {{ 
                width: '140px',
            marginTop: '10px',
            marginLeft: '100px',
            cursor: 'pointer',
            backgroundColor: '#fa1',
            border: 'none',
            padding: '10px',
            borderRadius: '10px'
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
appendMain.render(createContainer);

console.log(createContainer)

const userName = 'Sumanth'
const subheading = <h2>Hello <i>{userName}</i></h2>

const appendFooter = ReactDOM.createRoot(document.querySelector('.footer-part'));

appendFooter.render(subheading)
