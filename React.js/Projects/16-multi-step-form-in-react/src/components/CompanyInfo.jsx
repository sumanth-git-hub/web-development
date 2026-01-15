import React from 'react'

const CompanyInfo = ({data, setData, errorElement}) => {
    const {companyName, pinCode, noOfEmp} = data

    const fillCompanyDetails = (e, companyData) => {
        setData((prev) => ({
            ...prev, [companyData] : e.target.value
        }))
    }

  return (
     <div className='flex flex-col' >
                    <div className='relative mb-6'>
                        <input className='border rounded-md p-2 w-full' type="text"  placeholder='Company Name' value={companyName} onChange={(e) => {
                        fillCompanyDetails(e, "companyName")
                    }}/>
                    {errorElement && <span className='text-sm text-red-400 absolute top-11 left-0'>{errorElement.companyNameError}</span>}
                    </div>
                    <div className='relative mb-6'>
                    <input type="number" className='border rounded-md p-2 w-full' placeholder='Pin code' value={pinCode} onChange={(e) => {
                        fillCompanyDetails(e, "pinCode")
                    }} />
                    {errorElement && <span className='text-sm text-red-400 absolute top-11 left-0'>{errorElement.pinCodeError}</span>}
                    </div>
                    <div className='relative mb-6'>
                        <input type="number" className='border rounded-md p-2 w-full' placeholder='No of Employee' value={noOfEmp} onChange={(e) => {
                        fillCompanyDetails(e, 'noOfEmp')
                    }} />
                    {errorElement && <span className='text-sm text-red-400 absolute top-11 left-0'>{errorElement.noOfEmpError}</span>}
                    </div>
                </div>
  )
}

export default CompanyInfo