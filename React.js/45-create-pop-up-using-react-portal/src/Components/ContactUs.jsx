import React from 'react'
import Modal from './Modal'
import { useOutletContext } from 'react-router-dom';


export default function ContactUs() {
  const { isOpen, setIsOpen } = useOutletContext();
  return (
    <div className='my-20 px-4 md:px-8'>
      <p>Contact Us</p>
      <p>Submit your query <span onClick={(e) => {
         setIsOpen("contactUs")
      }} className='text-blue-500 cursor-pointer'>here</span></p>
              <Modal isOpen={isOpen === "contactUs"} setIsOpen={() => setIsOpen(null)} 
              headerLine={<p>How can we assist you?</p>}
              footerLine ={<div className='flex justify-between items-center'>
                <p>Our team will get in touch with in short!</p>
                <button onClick={() => {
                  setIsOpen(null)
                }} className='p-2 bg-amber-500 rounded-xl cursor-pointer'>Okay</button>
              </div>}
              >
                <div className='flex gap-8'>
                  <p>Email Us: <a className='text-amber-500' href='mailto:supporttest@gmail.com'>supporttest@gmail.com</a></p>
                  <p>Rise your query on Whatsapp: <a className='text-amber-500' href="https://api.whatsapp.com/send?l=en&text=Hi&phone=917348988867">7348988867</a></p>
                </div>
              </Modal>
      </div>
  )
}
