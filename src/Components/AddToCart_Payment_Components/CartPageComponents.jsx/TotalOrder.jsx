import { Box, Button,Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const TotalOrder = ({totalPrice}) => {
  return (
   
  
    
        <Box  p={"10px"} display={'flex'} flexDirection={"column"} justifyContent={'center'} alignItems={'center'} id="payDiv">
            <Box w={"385px"} m={"10px"} p={"20px"} rounded={"10px"} lineHeight={"30px"} bgColor={"#f5f5f5"} className='offer-code' >
                <b>OFFER CODE</b>
                <hr/>
                <p>+ Have an offer code?</p>
            </Box>
            <Box w={"385px"} m={"10px"} p={"20px"} rounded={"10px"} lineHeight={"30px"} bgColor={"#f5f5f5"} id="payment">
                <p>TOTAL</p>
                <hr/>
                <Box m={'10px'} >
                    <p>BAG TOTAL :</p>
                    <p id="totolPay">{totalPrice}</p>
                </Box>
                <Box m={"10px"} display={'flex'} justifyContent={"space-between"} alignItems={'center'}>
                    <p>BAG SHIPPING</p>
                    <p>$150</p>
                </Box>
                <p>Other shipping options in checkout </p>
            
                <Box m={"10px"} display={'flex'} justifyContent={"space-between"} alignItems={'center'}>
                    <p>TO PAY</p>
                    <p id="finalPay">{totalPrice}+$150={totalPrice+150}</p>
                </Box>
                <Link to='/checkout'>
                <Button
                 display={'inline-block'} 
                 w="100%" rounded={'none'} 
                 color={'white'}
                  bgColor={"#116a60"}
                   id="secureBtn">
                    SECURE CHECKOUT
                </Button>
                </Link>
                <Box id="payBtn" mt={"10px"} p={'10px'} bgColor={'#ffc439'} color={'#000000'} height="50px" display={'flex'} justifyContent={'space-between'}>
                    Pay With 
                    <Image height={'70%'} src="https://logos-download.com/wp-content/uploads/2016/03/PayPal_horizontally_Logo_2014-700x171.png" alt="" />
                </Box>

                <Box display={'flex'} justifyContent={'space-evenly'} padding="5px" id="payImgs">
                    <Image w="21%" src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw733cef56/images/payment_methods/basket_mastercard.svg" alt="" />
                    <Image w="21%" src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwc61fa691/images/payment_methods/basket_visa.svg" alt="" />
                    <Image w="21%" src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw043e7c50/images/payment_methods/basket_paypal.svg" alt="" />
                    <Image w="21%" src="https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw1c8f39d6/images/payment_methods/apple_pay.png" alt="" />
                </Box>
            </Box>
        </Box>
   

   
  )
}

export default TotalOrder





