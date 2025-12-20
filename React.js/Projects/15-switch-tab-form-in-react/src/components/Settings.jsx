import React from 'react'

const Settings = ({data, setData}) => {
    const {theme} = data

    const themeChanges = (e) => {
        setData((prev) => ({...prev, theme: e.target.name}))
    }
  return (
    <div className='form-component'>
        <div>
            <input type="radio" name="dark-theme" id='dark-theme' checked = {theme === "dark-theme"} onChange = {themeChanges} />
            <label htmlFor="dark-theme">Dark Theme</label>
        </div>
        <div>
            <input type="radio" name="light-theme" id='light-theme' checked = {theme === "light-theme"} onChange = {themeChanges} />
            <label htmlFor="light-theme">Light Theme</label>
        </div>
    </div>
  )
}

export default Settings