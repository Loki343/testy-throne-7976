import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import React from 'react';

const Checkboxfun = ({item,handlesort}) => {
const dref=React.useRef(null);
const handlecheck=(e)=>{
let val=(e)
  let status=(dref.current?.checked)

let obj={
  val,status
}

handlesort(obj)

}

  return (
    <CheckboxGroup colorScheme='green' >
    <Stack spacing={[1, 4]} direction={['column']}>
      <Checkbox onChange={()=>handlecheck(item)} ref={dref} isInvalid>{item}</Checkbox>
    </Stack>
  </CheckboxGroup>
  )
}

export default Checkboxfun;
