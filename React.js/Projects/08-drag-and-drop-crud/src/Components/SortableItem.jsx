import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableItem({
  id,
  displayStatus,
  textContent,
  toggleDisplay,
  editingFunction,
  removeElement,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`flex justify-between items-center p-2 border rounded mb-2 bg-white returnElement`}
    >
      {/* Clickable main content */}
      <span
        onClick={() => toggleDisplay(id)}
        className={`flex-1 cursor-pointer ${
          displayStatus === "" ? "" : "line-through"
        }`}
      >
        <i
          className={`fa-regular circle-icon ${
            displayStatus === ""
              ? "fa-circle"
              : "fa-circle-check text-green-600"
          }`}
        ></i>
        <span className="ml-2">{textContent}</span>
      </span>
      <div className="flex gap-4 items-center">
        <i
          onClick={(e) => {
            e.stopPropagation();
            editingFunction(id);
          }}
          className="fa-regular fa-pen-to-square cursor-pointer"
        ></i>

        <i
          onClick={(e) => {
            e.stopPropagation();
            removeElement(id);
          }}
          className="fa-solid fa-circle-xmark hover:text-red-600 transition duration-100 ease-in cursor-pointer"
        ></i>
        <span
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing pr-2 text-gray-500"
          title="Drag to reorder"
        >
          <i className="fa-solid fa-grip-vertical"></i>
        </span>
      </div>
    </li>
  );
}
