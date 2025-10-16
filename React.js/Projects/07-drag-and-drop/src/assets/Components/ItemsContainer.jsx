import React, { useEffect, useState } from 'react'
import {closestCorners, DndContext, MouseSensor, PointerSensor, TouchSensor, useSensor, useSensors} from '@dnd-kit/core';
import {arrayMove, horizontalListSortingStrategy, rectSwappingStrategy, SortableContext, verticalListSortingStrategy} from '@dnd-kit/sortable';
import Items from './Items';



const ItemsContainer = () => {
    
    const [data, setData] = useState([
        {
            id: crypto.randomUUID(),
            content: "Item 1"
        },
        {
            id: crypto.randomUUID(),
            content: "Item 2"
        },
        {
            id: crypto.randomUUID(),
            content: "Item 3"
        },
        {
            id: crypto.randomUUID(),
            content: "Item 4"
        },
    ])
    

    // useEffect(() => {
    //     setData(Array.from({length: 10}, (_,index) => 
    //     index + 1
    // ))
    // },[])

    console.log(data)

    const getPosition = (id) => {
      return  data.findIndex((obj) => obj.id === id)
    }

    const handleDragEnd = (ev) => {
        const {active, over} = ev
        console.log(active, over)

        if(!over || active.id === over.id) return

        setData((prev) => {
            const mainPosition = getPosition(active.id)
            const LatestPosition = getPosition(over.id)

            return arrayMove(prev, mainPosition, LatestPosition)
        })

    }

const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10, // must move 10px before drag starts (for mouse)
    },
  }),
  useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,     // must hold for 250ms before drag starts
      tolerance: 5,   // can move finger 5px before canceling hold
    },
  }),
//   useSensor(MouseSensor) // PointerSensor serves this function so it is required for old browsers
);


  return (
    <div className='p-10'>
        <h3 className='text-xl mb-6'>Drag and Drop the Elements</h3>
        <DndContext sensors={sensors}    onDragEnd={handleDragEnd} collisionDetection = {closestCorners}>
    <SortableContext items = {data} 
    // strategy = {verticalListSortingStrategy}  // * for vertical movement (remove parentElement class from the ul element to see the effect)
    strategy = {rectSwappingStrategy} 
    >

        <ul className='w-full parentElement'>
        {
            data.map(({id, content}) => {
             return  <Items key={id} id={id} content={content}/>
            })
        }
            
        </ul>
    </SortableContext>
        </DndContext>
    </div>
  )
}

export default ItemsContainer