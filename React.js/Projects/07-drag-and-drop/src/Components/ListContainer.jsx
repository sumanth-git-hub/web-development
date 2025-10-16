import { closestCorners, DndContext, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import SortableIndex from './SortableIndex'


const ListContainer = () => {

    const [items, setItems] = useState([
        {
            id: crypto.randomUUID(),
            content: "item 1"
        },
        {
            id: crypto.randomUUID(),
            content: "item 2"
        },
        {
            id: crypto.randomUUID(),
            content: "item 3"
        },
        {
            id: crypto.randomUUID(),
            content: "item 4"
        },
    ])

    // const [secondItem, setSecondItem] = useState([])



    //     useEffect(() => {
    //     setSecondItem(Array.from({length: 10}, (_,index) => 
    //     index + 1
    // ))
    // },[])


//   const sensors = useSensor(PointerSensor, {
//     activationConstraint: {
//       distance: 10,
//     },
//   }
// );
//   const touchSensor = useSensor(TouchSensor, {
//     activationConstraint: {
//       delay: 250,
//       tolerance: 5,
//     },
//   });


 const sensors = useSensors(
    useSensor(PointerSensor,{
    activationConstraint: {
      distance: 10,
    },
  }),
    useSensor(TouchSensor,{
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  })
  );


 function handleDragEnd({active, over}) { 


    if (!over || active.id === over.id) return;

    
      setItems((prev) => {
        const oldIndex = prev.findIndex((obj) => obj.id === active.id);
        const newIndex = prev.findIndex((obj) => obj.id === over.id);
        
        return arrayMove(prev, oldIndex, newIndex);
    })

}

  return (
    <div className='p-10 w-full'>
        <h3>Drag and Drop in React</h3>
        <div className='flex gap-4'>
            <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}>
                <SortableContext 
        items={items}
        strategy={verticalListSortingStrategy}
      >

        <ul className='w-1/2'>
        {
            items.map(({id, content}) => {
                // console.log(item)
              return  <SortableIndex key={id} id={id} content={content}/>
            })
        }
            {/* <li className='px-4 py-2 rounded-xl bg-amber-500 cursor-pointer'>item 1</li> */}
        </ul>
      </SortableContext>
                
            </DndContext>



        {/* <ul className='w-1/2'>
        {
            secondItem.map((secondItems) => {
                return <li className='px-4 py-2 rounded-xl bg-amber-500 cursor-pointer mb-2'>{secondItems}</li> 
            })
        }
            
        </ul> */}
        </div>
    </div>
  )
}

export default ListContainer