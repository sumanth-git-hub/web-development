import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


export default function ListTab({ todos, setTodos, setIsEditingRowId, setIsInputValues}) {
  console.log(todos);

  function toggleDisplay(id) {

  const updatedTodos = todos.map((todo) => 
    todo.id === id? { ...todo, displayStatus: todo.displayStatus === "strikeOut" ? "" : "strikeOut" }: todo);

  setTodos(updatedTodos);
}

 function editingFunction (elementId) {

  const editingElement = todos.find((edit) => 
     edit.id === elementId) 
  
  if(editingElement){
        setIsInputValues(editingElement.textContent)
        setIsEditingRowId(elementId)
      }
  
 }

const removeElement = (elementId) => {
 const deleteElements = todos.filter((findId) => {
    return findId.id !== elementId
  })
  setTodos(deleteElements)
  // console.log(elementId)
}


  return todos?.map(({id, displayStatus, textContent}) => {
    const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    active
  } = useSortable({id:id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition, 
    cursor: active ? "grabbing" : "grab",
  };
    return (
      <li {...attributes} {...listeners} ref={setNodeRef} style={style} id={id}
        onClick={() => {
          toggleDisplay(id)
        }}
        key={id}
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
        <div className="flex gap-4">
          <i 
            onClick={(el) => {
              el.stopPropagation()
              editingFunction(id)
              console.log(id)
            }}
          className="fa-regular fa-pen-to-square"></i>
          <i
          onClick={(e) => {
            e.stopPropagation();
            removeElement(id)
          }}
          className="fa-solid fa-circle-xmark hover:text-red-600 transition duration-100 ease-in itemsElement"
        ></i>
        </div>
      </li>
    );
  });
}
