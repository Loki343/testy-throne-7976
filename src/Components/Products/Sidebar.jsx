import {  Heading} from '@chakra-ui/react'
import React  from 'react'
import { useSelector } from 'react-redux'
import Accordionfun from './Accordion'
import Loading from './Loading'


const Sidebar = () => {
 

    return ( 
        //load.isLoading ? <Loading /> : load.isError ? <h1>Error...</h1> : 
        <div style={{ width: "100%" , backgroundColor: "#f6f6f6" ,}}>
          <Heading fontSize={"22px"} textAlign={"center"} p={"14px 0"} >Filter & Sort</Heading>
               <Accordionfun   />
            </div>
        )

}

export default Sidebar;

