import React from 'react'
import '../Style/Navbar.css'
import { Box, Button, Center, Image } from '@chakra-ui/react'
import RightSection from './Right_Section'
import { Link } from 'react-router-dom'
export default function Navbar() {

    return (
        <div className='Navbar-Container'>
            <div>
                <Center>
                    <Box>
                        <Image
                            mt='10'
                            mb='6'
                            borderRadius='25'
                            boxSize='100px'
                            src='https://bit.ly/dan-abramov'
                            alt='LOGO'

                        />
                    </Box>
                </Center>
                <Box>
                    <Link to={'/deshbord'}><Button className='Side-bar-BTN'>Deshbord</Button></Link>
                    <br />
                    <Link to={'/User-Profile'}><Button  className='Side-bar-BTN'>User</Button></Link>
                    <br />
                    <Link to={'/Admit-order'}><Button  className='Side-bar-BTN'>Order</Button></Link>
                    <br />
                    <Link to={'/products'}><Button  className='Side-bar-BTN'>Product</Button></Link>
                    <br />
                </Box>
            </div>
            <div>
                <RightSection />
            </div>
        </div>
    )
}
