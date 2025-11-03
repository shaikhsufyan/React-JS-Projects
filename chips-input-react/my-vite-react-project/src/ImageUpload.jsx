import React, { useState } from 'react'
import Preview from './Preview';

const ImageUpload = () => {
  const [imgUrl, setImgUrl] = useState([]);
  const [dragging,setDragging] = useState(false)
  const handleInput = (event) => {
    
    setImgUrl(...imgUrl, event.target.value)
    let selectedFiles = event.target.files;

    setImgUrl([...imgUrl, ...selectedFiles])
  }
   
  const onRemoveImg = (id) => {
    let filteData = imgUrl.filter((curVal, index) => {

      return index != id
    })
    setImgUrl(filteData)
  }

  const handleDragEnter = (e) =>{
    e.preventDefault();
    
    setDragging(true)
  }
  const handleDragLeave = (e) =>{
    e.preventDefault();
   setDragging(false)
  } 
  const handleDrop = (e) =>{
    e.preventDefault();
    let file = e.dataTransfer.files;
    setImgUrl([...imgUrl,...file])
    console.log("on drop img",file);
    setDragging(false)
  }

  return (
    <>
      <div className='container'>
        <div onDragEnter={handleDragEnter}
            onDragOver={handleDragEnter}
             onDragLeave={handleDragLeave}
             onDrop={handleDrop}
         className={`uploadBox ${dragging ? "draggingEnable" : ""}`}>
          <p>Drag & Drop Files here..</p>
          <input onChange={handleInput} multiple type='file' id='file-input' className='imgUploadInput' />
          <label className='labelBtn' htmlFor='file-input'>Browse Files</label>
        </div>

        {imgUrl ?
          imgUrl.map((url, index) => {
            console.log(url.name);
            return (
              <Preview onRemoveImg={onRemoveImg} key={index} fileDetails={url} index={index} />
            )
          })

          : ''}

      </div>
    </>
  )
}

export default ImageUpload;