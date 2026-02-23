import React from "react";
import SortableItem from "./SortableItem";

export default function ListTab({ todos, setTodos, setIsEditingRowId, setIsInputValues }) {
  const toggleDisplay = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, displayStatus: todo.displayStatus === "strikeOut" ? "" : "strikeOut" }
          : todo
      )
    );
  };

  const editingFunction = (id) => {
    const editingElement = todos.find((edit) => edit.id === id);
    if (editingElement) {
      setIsInputValues(editingElement.textContent);
      setIsEditingRowId(id);
    }
  };

  const removeElement = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <SortableItem
          key={todo.id}
          id={todo.id}
          displayStatus={todo.displayStatus}
          textContent={todo.textContent}
          toggleDisplay={toggleDisplay}
          editingFunction={editingFunction}
          removeElement={removeElement}
        />
      ))}
    </>
  );
}
