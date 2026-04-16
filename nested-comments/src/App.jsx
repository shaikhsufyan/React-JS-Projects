import React, { useState } from "react"
import commentData from "./comment.json"
function App() {
  const [data,setData] = useState(commentData);
  const [input,setInput] = useState();
  const [showReply,setShowReply] = useState(false);
  const [replyId,setReplyId] = useState(null)
  
   
  const addComment = () =>{
    if(input){
      let data ={
        id:new Date().getTime(),
        text:input,
        children:[]
      }
      setData((preData)=>[...preData,data])
    }
  }
  const reply = (reply) =>{
    setReplyId(reply.id)
    setShowReply(true)

  }
  const cancel = (reply) =>{
    setShowReply(false)
    setReplyId(null)
  }
  
  return (
    <>
       <div>
        <div className="add-comment">
          <input type="text" placeholder="Add comment" onChange={(e)=>setInput(e.target.value)}/>
          <button onClick={addComment} >Comment</button>
        </div>

        <div>
          {data.map((curItem,i)=>{
            return(
              <div key={i} className="comments">
                <p>{curItem.text}</p>
                {replyId !==curItem.id && <button onClick={()=>reply(curItem)}>Reply</button>}
                {replyId === curItem.id ? showReply ? <div><input type="text" placeholder="reply"/> <button onClick={()=>cancel(curItem)}>Cancel</button></div>  : null : null}
                 
              </div>
            )
          })}
        </div>
       </div>
    </>
  )
}

export default App
