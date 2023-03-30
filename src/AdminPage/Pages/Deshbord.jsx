import React from 'react'

export default function Deshbord() {
    return (
        <div >
            <Heading position={'relative'} m='2.5' right='27.5%' fontSize={'x-large'}>Customer dashboard</Heading>
            <div className='Daily-Record-Track'>
                <div>
                    <div className='sjdfks'>
                        <Center>
                            <Text mt='4' fontSize={'x-large'} fontWeight='bolder'>50</Text>
                        </Center>
                        <Center>
                            <Text fontSize={'large'} mb='4' fontWeight='bolder'>Daily Sing-up</Text>
                        </Center>
                    </div>
                    <div>
                        <Center>
                            <Image mt='7' src="https://img.icons8.com/office/1x/user.png" alt="" />
                        </Center>
                    </div>
                </div>
                <div>
                    <div className='sjdfks'>
                        <Center>
                            <Text mt='4' fontSize={'x-large'} fontWeight='bolder'>50</Text>
                        </Center>
                        <Center>
                            <Text fontSize={'large'} mb='4' fontWeight='bolder'>Daily Revenue</Text>
                        </Center>
                    </div>
                    <div>
                        <Center>
                            <Image mt='5' src="https://img.icons8.com/color/1x/money-bag.png" alt="money-bag" />
                        </Center>
                    </div>
                </div>
                <div>
                    <div className='sjdfks'>
                        <Center>
                            <Text mt='4' fontSize={'x-large'} fontWeight='bolder'>50</Text>
                        </Center>
                        <Center>
                            <Text fontSize={'large'} mb='4' fontWeight='bolder'>Daily Order</Text>
                        </Center>
                    </div>
                    <div>
                        <Center>
                            <Image mt='5' src="https://img.icons8.com/fluency/1x/fast-cart.png" alt="fast-cart.png" />
                        </Center>
                    </div>
                </div>
            </div>

            {/* OVERVIEW SECTION */}
            <div className='OVERVIEW-IMG'>
                <div>
                    <Image src="https://i.stack.imgur.com/37Jta.png" alt="Sale-Overview" />
                </div>
                <div><Image src='https://i.stack.imgur.com/hiAZE.png' alt='Stactic-Overview' w='99%' ml='10' /></div>
            </div>
        </div>
    )
}
