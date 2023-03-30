import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SingleProductBuyCard from '../../Components/AddToCart_Payment_Components/SingleProductBuyCard';
import Error from '../../Components/Products/Error';
import Loading from '../../Components/Products/Loading';
import { getSingleProduct } from '../../Redux/Products_Reducer/action';

// API URL
const url = 'https://api.pujakaitem.com/api/products'
//





// console.log(singleProduct)

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { isLoading, isError, singleProduct } = useSelector((store) => store.MenProReducer)
  
  
  
  useEffect(() => {
  
    // dispatch(getSingleProduct(`${url}?id=${id}`))
    dispatch(getSingleProduct(`${url}?id=thapaserialnoc`))
  
  }, [])


  if (isLoading) { return <Loading /> }


  return (
    <>
     {isError ?<Error /> :<SingleProductBuyCard product={singleProduct}/>}
    </>

  )
}

export default SingleProductPage