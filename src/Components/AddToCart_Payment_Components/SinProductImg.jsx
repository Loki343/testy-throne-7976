import { Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from 'styled-components'

const SinProductImg = ({image=[{url:""}]}) => {
const [mainimage,setMainImage]=useState(image[0])
    // console.log(image)
  return (
    <DIV>
    <div className='grid-fourcolumn'>
    {image.map((currImg,index)=>{
       
        return  <figure><Image  objectFit="cover"
              boxSize="100%" key={index} src={currImg.url} alt='some name' onClick={()=>setMainImage(currImg)} /></figure>})
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
justify-content: center;
align-items: center;

.mainScreen{
  position: relative;
  width: 100%;
}
.mainScreen img{
  objectFit: cover;
}
.grid-fourcolumn{
  position: absolute;
  display: grid;

  z-index: 10;
  width:100px}
`