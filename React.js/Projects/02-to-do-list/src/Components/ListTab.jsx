
export default function ListTab({ todos, setTodos }) {
  console.log(todos);

  function toggleDisplay(id) {
  const updatedTodos = todos.map((todo) => 
    todo.id === id? { ...todo, displayStatus: todo.displayStatus === "strikeOut" ? "" : "strikeOut" }: todo);

  setTodos(updatedTodos);
  localStorage.setItem("todos", JSON.stringify(updatedTodos)
    );
}

const removeElement = (elementId) => {
 const deleteElements = todos.filter((findId) => {
    return findId.id !== elementId
  })
  setTodos(deleteElements)
  // console.log(elementId)
}

  return todos.map((returnElements, index) => {
    const {id, displayStatus, textContent} = returnElements
    return (
      <li
        onClick={() => {
          toggleDisplay(id)
        }}
        key={index}
        className={`flex justify-between items-center`}
      >
        <span className={`${displayStatus === "" ? "" : "line-through"}`}>
          <i
            className={`fa-regular circle-icon ${
              displayStatus === "" ? "fa-circle" : "fa-circle-check text-green-600"
            }`}
          ></i>
          <span>{textContent}</span>
        </span>
        <i
          onClick={(e) => {
            e.stopPropagation();
            removeElement(id)
          }}
          className="fa-solid fa-circle-xmark hover:text-red-600 transition duration-100 ease-in"
        ></i>
      </li>
    );
  });
}
