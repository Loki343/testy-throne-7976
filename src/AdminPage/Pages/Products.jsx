

import styled from "styled-components"
import React from 'react'

export const Products = () => {
  return (
    <div className='main'>
        <div>
            <h1>Products</h1>
        </div>

        <div>
            
            <label htmlFor="">Admin  </label>
            <label htmlFor="">    >    </label>
            <label htmlFor="">  Products</label>
           
        </div>

        <div className='database'>
            <div>
                <h1>Product Database</h1>
            </div>

            <div className="label">
            <DIV>
            <label htmlFor="">PROFILE IMAGES</label>
            <label htmlFor="">NAME</label>
            <label htmlFor="">PRICE</label>
            <label htmlFor="">TITLE</label>
            <label htmlFor="">ACTION</label>
            </DIV>

            <button>Add Products</button>
            </div>

        </div>
        
    </div>
  )
}

const DIV = styled.div`
display: flex;
justify-content: space-between;




`
