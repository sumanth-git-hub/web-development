import React from 'react'
import {createPortal} from 'react-dom'

export default function ThanksModal({isModalOpen, setIsModalOpen}) {
  return (
    // used createPortal to render the modal outside the component's dom hierarchy now the html structure of this modal will fall under different DOM node which is  'portal'
      createPortal(<div className={`fixed flex items-center px-4 justify-center inset-0 bg-black/40 ${isModalOpen ? '' : 'hidden'}`} onClick={() => {
        setIsModalOpen(false)
      }}>
      <div className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg" onClick={(e) => {
        e.stopPropagation()
      }}>
        <div className='w-full text-center p-8 relative'>
            <i className="fa-solid fa-circle-xmark absolute top-0 right-0 hover:text-red-500 cursor-pointer" onClick={() => {
              setIsModalOpen(false)
            }}></i>
            <i className="fa-solid fa-envelope text-amber-500 text-8xl mb-4"></i>
        <p>Thank you for sharing your details with us, Our team will reach you out soon!</p>
        </div>
      </div>
    </div>, document.getElementById('portal'))
  )
}