import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities';

const Items = ({id, content}) => {
    const {attributes,
    listeners,
    setNodeRef,
    transform,
    transition, active} = useSortable({id: id})

    const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: active ? "grabbing" : "grab",
  };

  return (
    <li id= {id} {...attributes} {...listeners} ref={setNodeRef} style={style} className='px-4 bg-amber-500 rounded-lg text-center py-2 mb-2 itemsElement'>{content}</li>
  )
}

export default Items