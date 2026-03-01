 
 
import React, { useEffect, useState } from 'react'
import Chart from './Chart'

const Todo = () => {
    const [date,setDate] = useState("");
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState([]);
    const [editId,setEditId] = useState(null);

    const getDate =() =>{
        const dt = new Date();
        const date = dt.getDate();
        const month = dt.toLocaleDateString("en-IN",{
            month:"long"
        })
        const weekday  = dt.toLocaleDateString("en-IN",{
            weekday:"long"
        })
        const todayData = {date:date,month:month,weekday:weekday}
        setDate(todayData)
    }
    useEffect(()=>{
getDate()
    },[])

    const handleInput = (e) =>{

        setInput(e.target.value)

        
    }
    const addTodo = () =>{
        if(input === "") return;

        const id = crypto.randomUUID()
        const data ={
            id:id,
            text:input,
            completed:false
        }
   
        setInput("")
        setTodos([...todos,data])
        
    }
    const deleteTodo = (id) =>{
 
        
        const filterData = todos.filter((curTodo,i)=>{
            return id !== curTodo.id
        })
        setTodos(filterData)
    }
    const handleEdit = (id) =>{
        setEditId(id)
    }
    const handleUpdate = (e,id) =>{
        let upd = todos.map((curItem,i)=>{
            return curItem.id === id ? {...curItem,text:e.target.value} : curItem
        })
     
        setTodos(upd)
    }
    const handleSave = () =>{
        setEditId(null)
    }
    const checkTodo = (id)=>{
        let checked = todos.map((curItem,i)=>{
            return curItem.id === id ? {...curItem,completed:!curItem.completed} : curItem
        })
       

        setTodos(checked)
    }
    let total = todos.length;
    let completedTask = todos.filter((curTodo)=>curTodo.completed).length;
   
    
  return (
    <div className='container'>
        <div className='header'>
            <div className='date-time'>
                 {date.date},{date.month}
                 <div>{date.weekday}</div>
            </div>
            <div className='todo-status'>
                <Chart total={total} completedTask={completedTask}/>
            </div>
        </div>

        <div className='todo-container'>
            <div className='search-bar'>
                <input type='text' placeholder='Enter your todo...' value={input} onChange={(e)=>handleInput(e)}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <div>
                {todos.length > 0 ? 
                 todos.map((curItem,i)=>{
                    return(
                        <div  className='todos'>
                            <input type='checkbox' className='check-btn' onClick={()=>checkTodo(curItem.id)}/>
                            {curItem.id === editId ? <input type='text' value={curItem.text} onChange={(e)=>handleUpdate(e,curItem.id)}/> : <div>{curItem.text}</div>}
                            <div className='btns'>
                                {curItem.id === editId ? <button onClick={handleSave} className='saveBtn'>Save</button> : <button onClick={()=>handleEdit(curItem.id)} className='editBtn'>Edit</button>}
                                <button onClick={()=>deleteTodo(curItem.id)} className='deleteBtn'>Delete</button>

                            </div>
                        </div>
                    )
                 })
                 : ""}
            </div>
        </div>
    </div>
  )
}

export default Todo