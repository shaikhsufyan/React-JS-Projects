import { useState } from "react"

 const useToggle = () =>{
  const [val,setVal] = useState(true)
  function toggle(data){
    console.log(data);
    
    if(typeof data === 'boolean'){
      setVal(data)
    }else{
      setVal(!val)
    }
  }
  return [val,toggle]
}
export default useToggle;