import React, { useMemo, useState } from 'react'
import items from './Items';

const FilterUsingMemo = () => {
    const [add, setAdd] = useState(0)

    const filteredItems = useMemo(() => {
    console.log("Filtering...")
  return items.filter(item => item.price > 100);
}, [items]);


// it cause the rerender every clicks of the button by using the useMemo we can avoid this follow the above code for reference
// const filteredItems = items.filter((item) => {
//     console.log("Filtering")
//     return item.price > 100
// })
// filteredItems

// console.log()

  return (
    <div>
        <h2>Filter the Value by Using useMemo() hook</h2>
        {filteredItems.map((item) => {
            return <p key={item.id}>{item.name} - {item.price}</p>
        })}
       <button onClick={() => {
        setAdd((prev) => prev + 1)
       }}>Add</button>&nbsp;<span>{add}</span>
    </div>
  )
}

export default FilterUsingMemo