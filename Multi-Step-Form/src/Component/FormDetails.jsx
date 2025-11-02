import React from 'react'

export const FormDetails = ({formData}) => {
  return (
   <div className='details'>
            <h3>Form Submitted Successfully!</h3>
            <span>{formData.name}</span> <br/>
            <span>{formData.email}</span> <br/>
            <span>{formData.password}</span> <br/>
            <span>{formData.dob}</span> <br/>
        


        </div>
  )
}
