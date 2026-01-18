import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const Loading = () => {
  return (
     <div className='card'>
     <SkeletonTheme>
                  <Skeleton circle={true} width={120} height={120}/>
                  <p><Skeleton/></p>
                  <p><Skeleton/></p>
                  <p><Skeleton/></p>
                  </SkeletonTheme>
           </div>
  )
}

export default Loading