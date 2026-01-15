import React, { useState } from 'react'

const IndustryInfo = ({data, setData, selectedCategory, setSelectedCategory, errorElement}) => {
    const {industryCategory, sumInsured, registeredIn} = data

    const industryList = [
      "Banking Finance and Insurance",
      "Computer IT Technology and Communication",
      "Construction and Real Estate",
      "Manufacturing",
      "Medical and Pharmaceuticals",
      "Services",
      "Retail and E-commerce",
      "Automobiles and Electronics",
      "Home Lifestyle and Fitness",
      "Others",
    ]

    const checkYes = (e) => {
        setData((prev) => ({
            ...prev, registeredIn: e.target.name
        }))
    }
    const checkNo = (e) => {
                setData((prev) => ({
            ...prev, registeredIn: e.target.name
        })) 
    }
    const fillIndustryInfo = (e, industryData) => {
        setData((prev) => ({
            ...prev, [industryData]: e.target.value
        }))
    }

  return (
         <div className='flex flex-col gap-4' >
             <div className='relative mb-6'>
                        <select className='border rounded-md p-2 cursor-pointer w-full' name="industryCategory" id="industryCategory" 
                         value={selectedCategory} onChange={(e) =>{
                            setData((prev) => ({...prev, industryCategory: e.target.value}))
                             setSelectedCategory(e.target.value)}
                         }
                         >
                            <option disabled hidden value="">Industry Category</option>
                        {
                            industryList.map((category, index) => {
                             return   <option key={index} value={category}>{category}</option>
                            })
                        }
                    </select>
                     {errorElement && <span className='text-sm text-red-400 absolute top-11 left-0'>{errorElement.industryCategoryError}</span>}
             </div>
                    <div className='relative mb-6'>
                        <input type="number" className='border rounded-md p-2 w-full' placeholder='Sum Insured' value={sumInsured} onChange={(e) => {
                        fillIndustryInfo(e, "sumInsured")
                    }}/>
                    {errorElement && <span className='text-sm text-red-400 absolute top-11 left-0'>{errorElement.sumInsuredError}</span>}
                    </div>
                   <div>
                    <label>Registered in India?</label>
                    <div className='flex gap-4'>
                     <div><input className='cursor-pointer' type="radio" id='yes' name='yes' checked = {registeredIn === "yes"} onChange={checkYes} /><label htmlFor="yes" >&nbsp;Yes</label></div>
                    <div><input className='cursor-pointer' type="radio" id='no' name='no' checked = {registeredIn === "no"} onChange={checkNo} /><label htmlFor="no">&nbsp;No</label></div>
                    </div>
                   </div>
                </div>
  )
}

export default IndustryInfo