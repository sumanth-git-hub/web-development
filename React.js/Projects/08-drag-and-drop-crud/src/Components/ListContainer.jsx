// ListContainer.jsx
import React from "react";
import ListTab from "./ListTab";
import { useStoreLocal } from "../hooks/useStoreLocal";
import {
  DndContext,
  closestCorners,
  useSensors,
  useSensor,
  PointerSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

export default function ListContainer() {
  const [todos, setTodos] = useStoreLocal("todos", []);
  const [isInputValues, setIsInputValues] = useStoreLocal("isInputValues", "");
  const [isEditingRowId, setIsEditingRowId] = useStoreLocal(
    "isEditingRowId",
    null
  );

  const addFunction = () => {
    const trimmedData = isInputValues.trim();
    if (trimmedData === "") {
      alert("Please Enter the values in the input");
      return;
    }

    if (isEditingRowId) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === isEditingRowId
            ? { ...todo, textContent: trimmedData, displayStatus: "" }
            : todo
        )
      );
      setIsEditingRowId(null);
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          textContent: trimmedData,
          displayStatus: "",
        },
      ]);
    }

    setIsInputValues("");
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 300, tolerance: 5 },
    })
  );

  const handleDragEnd = (ev) => {
    const { active, over } = ev;
    if (!over || active.id === over.id) return;

    setTodos((prev) => {
      const oldIndex = prev.findIndex((obj) => obj.id === active.id);
      const newIndex = prev.findIndex((obj) => obj.id === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  return (
    <div>
      <div className="container">
        <div className="to-do-app">
          <h1 className="text-2xl font-bold">
            List Your Plans & Goals&nbsp;&nbsp;
            <i className="fa-solid fa-note-sticky" id="change-color"></i>
          </h1>
          <div className="row">
            <input
              value={isInputValues}
              onChange={(e) => setIsInputValues(e.target.value)}
              type="text"
              id="input-box"
              placeholder="Add your tasks here"
            />
            <button onClick={addFunction} className="cta-button">
              Add
            </button>
          </div>

          <DndContext
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={todos}
              strategy={verticalListSortingStrategy}
            >
              <ul className="list-container">
                <ListTab
                  todos={todos}
                  setTodos={setTodos}
                  setIsEditingRowId={setIsEditingRowId}
                  setIsInputValues={setIsInputValues}
                />
              </ul>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
