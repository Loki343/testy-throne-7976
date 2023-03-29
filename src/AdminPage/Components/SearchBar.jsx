import React from 'react'
import { Container, Input, Button } from '@chakra-ui/react'
import '../Style/Navbar.css'
export default function SearchBar() {
    return (
        <Container maxW='80%' mt='2'>
            <div className='Search' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Input placeholder='Search-Anything' />
                <Button ml='2.5' className='Search-BTN'>Find-Product</Button>
            </div>
        </Container>
    )
}
