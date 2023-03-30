import React, { useState } from 'react'
import styled from 'styled-components'

const SinProductImg = ({image=[{url:""}]}) => {
const [mainimage,setMainImage]=useState(image[0])
    // console.log(image)
  return (
    <DIV>
    <div className='grid grid-fourcolumn'>
    {image.map((currImg,index)=>{
       
        return  <figure><img key={index} src={currImg.url} alt='some name' onClick={()=>setMainImage(currImg)} /></figure>})
    }

    </div>
    <div className='mainScreen' >
        <img src={mainimage.url} alt='some name' />
    </div>
    </DIV>
  )
}

export default SinProductImg

const DIV=styled.div`
.grid-fourcolumn{width:50px}
`