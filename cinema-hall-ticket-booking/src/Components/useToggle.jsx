import { useState } from "react";

 const useToggle = () =>{
    const [data,setData] = useState(true);

    function toggle(val){
        if(typeof val === 'boolean'){
            setData(val)
        }else{
 setData(!data)
        }
       
    }
    return [data,toggle]
 }
 export default useToggle;