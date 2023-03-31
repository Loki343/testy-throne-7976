import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { addProduct } from '../../../Redux/AdminDataBase/action'
import {useDispatch} from "react-redux"


const initialState = {
    image:"",
    name:"",
    price:"",
    title:"",
}

export const AddProduct = () => {
    const [product, setProduct] = useState(initialState)
    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(product)
        dispatch(addProduct(product))
        setProduct(initialState)
    }

  return (
    <DIV>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
            <input  value={product.image}
                    placeholder='Image'
                    name='image'
                    onChange={(e) => handleChange(e)}
                    
                    />
                    
            <input type="text" 
                    value={product.name}
                    placeholder='Name' 
                    name='name' 
                    onChange={(e) => handleChange(e)}
                    
                    />

            <input type="text" 
                    value={product.price}
                    placeholder='Price' 
                    name='price' 
                    onChange={(e) => handleChange(e)}
            
                    />

            <input type="text" 
                    value={product.title}
                    placeholder='Title' 
                    name='title' 
                    
                    onChange={(e) => handleChange(e)}
                    
                    />

            <button type='submit'>Submit</button>       

        </form>
    </DIV>
  )
}

const DIV = styled.div`
width: 400px;
margin: 40px auto;
border: 1px solid gray;
padding: 10px;


input{
    width: 80%;
    height:40px;
    font-size: large
}

button{
    width: 20%;
    height: 35px;
}

form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}

`
