import React from 'react';
import { MenProList } from '../Components/Products/MenProList';
import Sidebar from '../Components/Products/Sidebar';
// import { useSelector } from 'react-redux';
// import Loading from '../Components/Products/Loading';


export const MenProductPage = () => {
  // let load = useSelector((store)=>store.MenProReducer);
  //  console.log(load.isLoading);
  return ( 
    // load.isLoading ? <Loading /> : 
    <div style={{ display: "flex",width:"100%", backgroundColor: "white", gap:"20px", justifyContent:"space-between", }}>
      <div style={{width:"16%"}}> <Sidebar /></div>
      <div style={{width:"82%"}}>
       <MenProList />
        </div>
    </div>
  )
};
