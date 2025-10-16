import { useSortable } from '@dnd-kit/sortable';
import React from 'react'
import {CSS} from '@dnd-kit/utilities';


const SortableIndex = ({id, content}) => {
const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({id: id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? "grab": "",
  };
    
  return (
    <li {...attributes} {...listeners} ref={setNodeRef} key = {id} id={id} style={style} className='px-4 py-2 rounded-xl bg-amber-500 cursor-pointer mb-2 itemsElement'>{content}</li>
  )
}

export default SortableIndex