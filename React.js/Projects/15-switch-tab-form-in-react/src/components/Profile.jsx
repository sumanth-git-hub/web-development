import React from 'react'

const Profile = ({data, setData, error, setError}) => {
    const {name, age, email} = data

    const changeItems = (e, items) => {
        
        setData((prev) =>({
            ...prev, [items]: e.target.value
        }))
        // console.log(e.target.value)
    }
  return (
    <div className='form-component'>
        <div className='input-elements'>
            <label htmlFor="user-name">Name</label>: 
            <input type="text" id='user-name' value={name} onChange={(e) => {
                setError((prev) => ({...prev, name: ""}))
                changeItems(e, "name")
            }} />
            {error && <span className='error-text'>{error.name}</span>}
        </div>
        <div className='input-elements'>
            <label htmlFor="user-name">Age</label>: 
            <input type="number" id='user-age' value={age}  onChange={(e) => {
                setError((prev) => ({...prev, age: ""}))
                changeItems(e, "age")
            }}/>
            {error && <span className='error-text'>{error.age}</span>}
        </div>
        <div className='input-elements'>
            <label htmlFor="user-name">Email</label>: 
            <input type="email" id='user-email' value={email} onChange={(e) => {
                setError((prev) => ({...prev, email: ""}))
                changeItems(e, "email")
            }} />
            {error && <span className='error-text'>{error.email}</span>}
        </div>
    </div>
  )
}

export default Profile