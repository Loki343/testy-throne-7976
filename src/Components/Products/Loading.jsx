import React from 'react'
import { Spinner, Stack } from '@chakra-ui/react';

const Loading = () => {

  return (
    <div style={{display:"flex",justifyContent:"center",height:"100vh",alignItems:"center"}}>
      <Stack>
        <Spinner color="red" size='xl' />
      </Stack>
    </div>
  )
};

export default Loading;