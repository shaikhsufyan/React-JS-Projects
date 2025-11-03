import React from 'react'

const Preview = ({fileDetails,index,onRemoveImg}) => {
    let imgURL = URL.createObjectURL(fileDetails)
    console.log(URL.createObjectURL(fileDetails));
   
    return (
        <div className='preview'>
            <div className='imgDetails'>
                <img src={imgURL} alt='img' />
                <div>
                    <p>{fileDetails.name}</p>
                    <p>{(fileDetails.size/1024).toFixed(2)}KB</p>
                </div>
            </div>
            <div>
            <button onClick={() => onRemoveImg(index)}>X</button>
            </div>
        </div>
    )
}

export default Preview