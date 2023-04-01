import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const OrderCart = () => {
    return (
        <Box  display={'flex'} flexDirection='row' justifyContent={'space-between'}>
            <Box display={'flex'} flexDirection='row' justifyContent={'space-between'}>
                <div className='product-image'><Image src='' alt='' /></div>
                <Box  display={'flex'} flexDirection='row' alignItems={'center'} justifyContent={'center'} className='prductname'>
                    <h3>name</h3>
                    <p>qty</p>
                </Box>
            </Box>
            <Box  display={'flex'} flexDirection='row' alignItems={'center'} justifyContent={'center'} className='price'>
                <h3>price</h3>
            </Box>
        </Box>
    )
}

export default OrderCart