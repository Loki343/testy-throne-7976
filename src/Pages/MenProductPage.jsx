import React from 'react';
import { MenProList } from '../Components/Products/MenProList';
import Sidebar from '../Components/Products/Sidebar';
import { SimpleGrid , GridItem   } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';
// import Loading from '../Components/Products/Loading';


export const MenProductPage = () => {
  // let load = useSelector((store)=>store.MenProReducer);
  //  console.log(load.isLoading);
  return ( 
    // load.isLoading ? <Loading /> : 
    <div style={{ display: "grid", backgroundColor: "white", gridTemplateColumns:"16% 82%",justifyContent:"space-between" }}>
      <div > <Sidebar /></div>
      <div >
       <MenProList />
       
       </div>
    </div>
  )
};
