import React, { useState } from 'react'
import Preview from './Preview';

const DragDrop = () => {
    const [files,setFiles] = useState([]);
    const [drag,setDrag] = useState(false)
    const handleChange = (e) =>{
        console.log(e);
        let selectedFiles = e.target.files;
        setFiles([...files,...selectedFiles])
    }
    console.log(files);
    const removePreview = (id) =>{
        console.log(id);
        let filterData = files.filter((curValue,index)=>{
            return index != id;
        })
        setFiles(filterData)

    }
    const handleDragEnter = (e)=>{
        e.preventDefault();
      
        setDrag(true)
    }
    const handleDragLeave =(e)=>{
        e.preventDefault();
        
        setDrag(false)
    }
    const handleDrop =(e)=>{
        e.preventDefault();
    
        setDrag(false)
        let dropFile = e.dataTransfer.files;
        console.log(dropFile);
        setFiles([...files,...dropFile])
    }

  return (
    <div className='container'>
        <div onDragEnter={handleDragEnter}
             onDragOver={handleDragEnter}
             onDragLeave={handleDragLeave}
             onDrop={handleDrop}
         className={`uploadBox ${drag ? 'dragging' : ''}`}>
            <p>Drag & Drop Files Here...</p>
            <input multiple type="file" id='input-file' className='inputFiles' onChange={handleChange} />
            <label htmlFor="input-file">Browse Files</label>
        </div>
        {files.length>0 ? <Preview removePreview={removePreview} fileDetails={files}/> : ""}
    </div>
  )
}

export default DragDrop