import { StarIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'

const StarsAndReview = ({ stars, review }) => {
   
    console.log(stars, review)
    return (
        <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
                .fill('')
                .map((_, i) => (
                    <StarIcon
                        key={i}
                        color={i < stars ? 'yellow.500' : 'gray.300'}
                    />
                ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                {review} reviews
            </Box>
            </Box>
    )
}

export default StarsAndReview