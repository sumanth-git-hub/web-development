import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Modal from './Modal'

export default function AboutUs() {
  const {isOpen, setIsOpen} = useOutletContext()
  return (
    <div className='my-20 px-4 md:px-8 flex items-center gap-4'><p>Who we are?</p>
      <button className='p-2 bg-amber-500 rounded-xl cursor-pointer' onClick={() => {
        setIsOpen("aboutUs")
      }}>Know more</button>
      <Modal isOpen={isOpen === "aboutUs"} setIsOpen={() => setIsOpen(null)}>
        <div className='relative'>
        <i className="fa-solid fa-circle-xmark absolute right-0 text-xl text-red-500 cursor-pointer bottom-10/11" onClick={(e) => {
          setIsOpen(() => setIsOpen(null))
        }}></i>
          <p className='mt-2'>We are Web and App development simplifiers in Bangalore</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab error consequuntur. Doloribus possimus fugiat laborum veniam id vitae exercitationem cum ducimus ipsam saepe at, optio, praesentium laboriosam corrupti officiis!</p>
        </div>
      </Modal>
    </div>
    
  )
}
