import React from 'react'

const Form = ({handleSubmit,handleBack,forms,index,handleChange,formData}) => {
  return (
     <form className='form' onSubmit={handleSubmit}>
            {index > 0 ?<a href='' onClick={handleBack}>Back</a> :""}
            <label>{forms[index].label}</label>
            <input required type={forms[index].inputType} placeholder={forms[index].placeholder} name={forms[index].id} value={formData[forms[index].id]} onChange={handleChange}/>
            <button >{forms[index].buttonName}</button>
        </form>
  )
}

export default Form