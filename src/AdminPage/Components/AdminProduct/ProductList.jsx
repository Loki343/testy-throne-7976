import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Products } from './ProductCart'
import { getProduct } from '../../../Redux/AdminDataBase/action'

export const ProductList = () => {
    const products = useSelector(store=>{
        console.log(store)
    })
    console.log(products)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProduct())
    },[])
  return (
    <div>
        {
            products.length > 0 && products.map((el) => {
                return <Products key={el.id} {...el}/>
            })
        }
    </div>
  )
}
