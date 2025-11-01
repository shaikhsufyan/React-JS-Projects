import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
    const location = useLocation();
    
    const breadcrumb = location.pathname.split("/").filter(Boolean);
    console.log(breadcrumb);
    
    
  return (
    <div>
        <div className='breadcrum'>
            <Link to="/">Home</Link>
            {breadcrumb.map((curValue,index)=>{
                const isLast = index === breadcrumb.length-1;
                return isLast ? ( <span className='current-page'> / {curValue}</span>) :(<span><Link to={`/${curValue}`}> / {curValue}</Link></span>)
            })}
        </div>
    </div>
  )
}

export default Breadcrumb