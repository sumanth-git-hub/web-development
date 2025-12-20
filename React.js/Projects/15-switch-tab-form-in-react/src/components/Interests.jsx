import React from 'react'

const Interests = ({data, setData, error}) => {
    const {interests} = data

    const checkInterests = (e) => {
        // console.log(e.target.checked)
        setData((prev) => ({
            ...prev, interests: e.target.checked ? [...prev.interests, e.target.name] : interests.filter((int) => int !== e.target.name)
        }))
    }
  return (
    <div className='form-component'>
        <div>
            <input type="checkbox" name="coding" id='interest-coding' checked = {interests.includes("coding")} onChange = {checkInterests}/>
            <label htmlFor="interest-coding">Coding</label>
        </div>
        <div>
            <input type="checkbox" name="farming" id='interest-farming' checked = {interests.includes("farming")} onChange = {checkInterests}/>
            <label htmlFor="interest-farming">Farming</label>
        </div>
        {error && <span className='error-text'>{error.interests}</span>}
    </div>
  )
}

export default Interests