import React from 'react'
import { useFormStatus } from 'react-dom';

const FormStatus = () => {
   const handleSubmit = async () =>{
    await new Promise((res)=>setTimeout(res,2000))
    console.log("Submit");
    
   }
   const CustomForm = () =>{
    const {pending} = useFormStatus();
    console.log(pending);
    
    return(
        <div>
              <input type='text' placeholder='Enter name ' /><br/><br/>
              <input type='password' placeholder='Enter Password ' /><br/><br/>

            <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
        </div>
    )
   }
  return (
    <div>
          <form action={handleSubmit}>
            <CustomForm/>
        </form>
    </div>
  )
}

export default FormStatus