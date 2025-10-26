import React from 'react'

const Preview = ({fileDetails,removePreview}) => {
    console.log(fileDetails);
  return (
    <div>
        {fileDetails.map((curValue,index)=>{
            let imgURL = URL.createObjectURL(curValue)
            return(
                <div className='preview' key={index}>
                    <div className='info'>
                        <img src={imgURL} alt="" />
                        <div>
                            <span>{curValue.name}</span> <br />
                            <span>{curValue.size}</span>
                        </div>
                    </div>
                    <button onClick={()=>removePreview(index)}>X</button>
                </div>
            )
        })}
    </div>
  )
}

export default Preview