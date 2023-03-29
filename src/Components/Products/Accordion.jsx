import React from 'react'
import {
    Accordion as Accord,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Checkbox,
  } from '@chakra-ui/react'
import { MinusIcon,AddIcon } from '@chakra-ui/icons'
import Checkboxfun from './checkbox'

const Accordionfun = ({data,handlesort}) => {
   
  return (
    <Accord allowMultiple>
  

  <AccordionItem>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              {data[0]}
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            {data.map((item,i)=>{
              
        return  i>0 && <Checkboxfun handlesort={handlesort} key={i}  item={item}/>
            })}
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
</Accord>
  )
}

export default Accordionfun;