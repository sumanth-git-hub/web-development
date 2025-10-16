import React from 'react'
import { useForm } from "react-hook-form"


const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

 async function onSubmitFunction (data) {
    //api call for delay
    await new Promise((resolve) => setTimeout(resolve, 3000))
    console.log("Hello", data)
    reset();
  }

  return (
    <div>
        <h2 className='text-xl '>React Hook Form</h2>

        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <div className='mb-2'>
                <label htmlFor="userName" className='mr-4'>Full Name</label>
                <input className={` border outline-none ${errors.userName ? "border-red-500": ""}`} type="text" name='userName' id='userName' {...register('userName', {
                    required: {value: true, message: "Please enter the user name"}, 
                    minLength: {value : 3, message: "Please enter more than 3 characters"}})} />
                {errors.userName ? <p className='text-red-500'>{errors.userName.message}</p> : <span></span>}
            </div>
            <div className='mb-2'>
                <label htmlFor="userNumber" className='mr-4'>Mobile Number</label>
                <input className={`border ${errors.userNumber ? "border-red-500": ""}`} type="number" name='userName' id='userNumber' {...register('userNumber', {required: {value: true, message: "Please Enter the Mobile Number"}, pattern: {value: /^(?:\+91[-\s]?)?[6-9]\d{9}$/, message: "Please enter the valid number   "}})}/>
                {errors.userNumber ? <p className='text-red-500'>{errors.userNumber.message}</p>: <span></span>}
            </div>
            <div className='mb-2'>
                <label htmlFor="userEmail" className='mr-4'>Mail Address</label>
                <input className={`border ${errors.userEmail ? "border-red-500": ""}`} type="email" name='userEmail' id='userEmail' {...register('userEmail', {required: {value: true, message: "Please enter email address"}, pattern: {value: /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/, message: "Please enter valid mail ID"}})}/>
                {errors.userEmail ? <p className='text-red-500'>{errors.userEmail.message}</p>: <span></span>}
            </div>
            <div className='mb-2'>
                <button type='submit' className='border px-2 py-1' disabled = {isSubmitting}>{isSubmitting ? "Submitting" : "Submit"}</button>
            </div>
        </form>
    </div>
  )
}

export default ReactHookForm