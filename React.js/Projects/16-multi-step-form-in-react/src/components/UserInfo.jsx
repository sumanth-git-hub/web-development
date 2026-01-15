import React from 'react'

import featuredImage from "../assets/business-insurance.png"


const UserInfo = ({data, setData, errorElement}) => {
    const {userName, mobileNumber, emailId} = data
    // console.log(errorElement)

    const fillUserInfo = (e, userData) => {
        setData((prev) => ({
            ...prev, [userData]: e.target.value
        }))
    }
  return (
                 <div className='flex flex-col' >
                    <div className='relative mb-6'>
                        <input className='border rounded-md p-2 w-full' type="text"  placeholder='Name' value={userName} onChange={(e) => {
                        fillUserInfo(e, "userName")
                    }}/>
                    {errorElement && <span className='text-sm text-red-400 absolute top-11 left-0'>{errorElement.nameError}</span>}
                    </div>
                    <div className='relative mb-6'>
                    <input type="number" className='border rounded-md p-2 w-full' placeholder='Mobile Number' value={mobileNumber} onChange={(e) => {
                        fillUserInfo(e, 'mobileNumber')
                    }} />
                        <span className='text-sm text-red-400 absolute top-11 left-0'>{errorElement.mobileNumberError}</span>
                    </div>
                    <div className='relative mb-6'>
                    <input type="email" className='border rounded-md p-2 w-full' placeholder='Email' value={emailId} onChange={(e) => {
                        fillUserInfo(e, 'emailId')
                    }}/>
                     <span className='text-sm text-red-400 absolute top-11 left-0'>{errorElement.emailIdError}</span>
                    </div>
                </div>
  )
}

export default UserInfo