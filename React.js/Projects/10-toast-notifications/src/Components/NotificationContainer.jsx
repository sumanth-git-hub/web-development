import React, { useEffect, useRef, useState } from "react";

export const NotificationContainer = () => {
  // const [showToast, setShowToast] = useState(false)

  const [toasts, setToasts] = useState([]);
  const timerRef = useRef({})

  const handleClick = (message, type) => {
    let id = crypto.randomUUID();

    setToasts((prev) => [
      ...prev,
      { textMessage: message, contentType: type, id: id },
    ]);

    let timer;
    timer = setTimeout(() => {
      eraseNotification(id);
    }, 3000);

    timerRef.current[id] = timer;
  };
  console.log(toasts);

  function eraseNotification(elementId) {

    clearTimeout(timerRef.current[elementId]);
    delete timerRef.current[elementId]
    setToasts((prev) => {
      const uniqueToasts = prev.filter((findElement) => {
        // console.log(findElement.id !== elementId);
        return findElement.id !== elementId;
      });
      return uniqueToasts;
    });
  }
  // useEffect(() => {
  //     let timer;
  //     if(showToast){
  //            timer = setTimeout(() => {
  //                 setShowToast(false)
  //             }, 5000);
  //         }
  //         return () => {
  //             clearTimeout(timer)
  //         }
  // },[showToast])

  useEffect(() => {
    return () => {Object.values(timerRef.current).forEach(clearTimeout)}
  }, [])

  return (
    <div className="mainParentElement">
      <ul className="notifications">
        {toasts?.map(({ id, textMessage, contentType }) => {
          return (
            <li key={id} className={`toast-notification ${contentType}`}>
              {textMessage}&nbsp;
              <i
                onClick={() => {
                  eraseNotification(id);
                }}
                className="fa-solid fa-circle-xmark"
              ></i>
            </li>
          );
        })}
        {/* {
            // hardcoded toast notification
                showToast ? <li className={`toast-notification`}>Success&nbsp;<i onClick={() => {
                setShowToast(false)
            }} className="fa-solid fa-circle-xmark"></i></li> : <li></li>
            } */}
      </ul>
      <div className="toastContainer">
        <button
          onClick={() => {
            handleClick("Successfully Done", "successTextContent");
          }}
        >
          Success
        </button>
        <button
          onClick={() => {
            handleClick("Warning Text", "warningTextContent");
          }}
        >
          Warning Toast
        </button>
        <button
          onClick={() => {
            handleClick("Information Text", "infoTextContent");
          }}
        >
          Information Toast
        </button>
        <button
          onClick={() => {
            handleClick("Error Text", "errorTextContent");
          }}
        >
          Error Toast
        </button>
      </div>
    </div>
  );
};
