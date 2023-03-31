
import styled from "styled-components"
import React from 'react'


export const Products = ({image,name, title,price}) => {
  return (
    <div className='main' style={{width:"90%", margin:"auto"}}>


    
        <div>
            <h1 >Products</h1>
        </div>

        <ADMIN>
            <div>
            <label htmlFor="">Admin  </label>
            
            <label htmlFor="">  Products</label>
            </div>
            
           <div>
           <button >Add Products</button>
           </div>
        </ADMIN>


        <DATA className='database'>
            <div>
                <h1 style={{color:"rgb(205,217,232)" , textAlign:"start" }}>Product Database</h1>
            </div>

            <div className="label">
            <DIV style={{height:"30px" ,textAlign:"center",alignItems:"center"}}>
            <label style={{width:"15%"}} htmlFor="">PROFILE IMAGES</label>
            <label style={{width:"15%"}}  htmlFor="">NAME</label>
            <label style={{width:"15%"}}  htmlFor="">PRICE</label>
            <label style={{width:"40%"}}  htmlFor="">TITLE</label>
            <label style={{width:"15%"}}  htmlFor="">ACTION</label>

            </DIV>
            <div style={{border:"1px solid red", display:"flex"}}>
                <div style={{border:"1px solid red", width:"15%"}}>
                    <img src={image} />
                </div>
                <div style={{border:"1px solid red", width:"15%"}}>
                    <p>{name}</p>
                </div>
                <div style={{border:"1px solid red", width:"15%"}}>
                    <p>{price}</p>
                </div>
                <div style={{border:"1px solid red", width:"40%"}}>
                    <p>{title}</p>
                </div>
                <div style={{border:"1px solid red", width:"15%"}}>
                    <button>Action</button>
                </div>
            </div>

            
            </div>

        </DATA>
        
    </div>
  )
}

const DIV = styled.div`
display: flex;
justify-content: space-between;
border: 1px solid black


    `

    const DATA = styled.div`
    border: 1px solid black
    `

    const ADMIN = styled.div`
    display: flex;
    justify-content:space-between;
    `
