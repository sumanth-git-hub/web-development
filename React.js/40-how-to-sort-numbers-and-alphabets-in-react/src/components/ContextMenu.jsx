import React from "react";

export default function ContextMenu({ menuPosition, setMenuPosition, setData, passId,setInputValue, getExpenses, setEditingRowId}) {
  if (!menuPosition.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={(e) => {
          console.log(passId);

          // destructured the object "getExpenses" to avoid the error in validationConfig array
         const {title, category, amount} = getExpenses.find((findExpense) => {
            return findExpense.id === passId
          })
          setEditingRowId(passId)
          setInputValue({title, category, amount} )
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
