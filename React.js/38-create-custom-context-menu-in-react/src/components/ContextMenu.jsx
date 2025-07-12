import React from "react";

export default function ContextMenu({ menuPosition, setMenuPosition, setData, passId }) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={(e) => {
          console.log("Editing");
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={(e) => {
          console.log("Deleting");
        setData((prevState) => prevState.filter((findData) => findData.id !== passId))
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
