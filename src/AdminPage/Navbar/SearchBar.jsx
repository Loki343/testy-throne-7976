import React from 'react'
import { Container, Input, Button } from '@chakra-ui/react'
// import "../Navbar/Navbar.css"
import "../Style/Navbar.css"
export default function SearchBar() {
    return (
        <Container maxW='100%' mt='2'>
            <div className='Search' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Input placeholder='Search-Anything' width={'100%'} height={"60px"}/>
                <Button  fontWeight={"bold"}  height={"60px"} width={"190px"} background={"black"} color={"white"} ml={'5px'}>Find-Product</Button>
            </div>
        </Container>
    )
}
