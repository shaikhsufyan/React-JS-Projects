import React, { useState } from 'react'
import Form from './Form';
import { FormDetails } from './FormDetails';

const MultiStepForm = () => {
    const data = [
        {
            id:'name',
            placeholder:"Enter Name",
            buttonName:"Next",
            inputType:"text",
            label:"Name"
        },
        {
            id:'email',
            placeholder:"Enter email",
            buttonName:"Next",
            inputType:"email",
            label:"Email"
        },
        {
            id:'password',
            placeholder:"Enter Password",
            buttonName:"Next",
            inputType:"password",
            label:"Password"
        },{
            id:'dob',
            placeholder:"Enter DOB",
            buttonName:"Submit",
            inputType:"date",
            label:"DOB"
        }
    ];
    const [forms,setForms] = useState(data);
    const [index,setIndex] = useState(0);
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        dob:""
    })
    const [isSubmit,setIsSubmit] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(index === forms.length-1){
            setIsSubmit(true)
            
        }else{
            setIndex(index+1)
        }
    }
    const handleBack = (e) =>{
        e.preventDefault();
        setIndex(index-1)
    }
    const handleChange = (e) =>{
         
        let name = e.target.name;
        let value = e.target.value;
        setFormData((preData)=>({...preData,[name]:value}))
        
    }
    
  return (
    <div>
       {!isSubmit ?  <Form handleSubmit={handleSubmit} 
       handleBack={handleBack}
        forms={forms}
        index={index}
        handleChange={handleChange}
        formData={formData}
       />
        :
        <FormDetails formData={formData}/>
       }
    </div>
  )
}

export default MultiStepForm