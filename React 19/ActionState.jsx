 import React, { useActionState } from 'react'
 
 const ActionState = () => {
    const handleSubmit = async (preData,formData) =>{
        let name = formData.get("name");
        let password = formData.get("password");

        await new Promise((res)=>setTimeout(res,2000))
       if(name && password){
        return {success:"Submitting Successfully",name,password}
       }else{
        return {error:"Something went wrong"}
       }
        
        
    }
    const [data,action,pending] = useActionState(handleSubmit,undefined);
    console.log(data);
    
   return (
     <div>
        <form action={action}>
            <input type='text' placeholder='Enter name' name='name' value={data?.name} /><br/> <br/>
            <input type='password' placeholder='Enter password' name='password' value={data?.password}/><br/> <br/>
            <button disabled={pending}>Submit</button>
            <div>{pending?"Submitting" : ""}</div>
            {data?.success && <div>{data?.success}</div>}
             {data?.error && <div>{data?.error}</div>}

             <h1>Name : {data?.name}</h1>
             <h1>Password : {data?.password}</h1>

        </form>
     </div>
   )
 }
 
 export default ActionState