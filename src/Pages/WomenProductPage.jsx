import React from 'react'
import Sidebar from '../Components/Products/Sidebar';
import { WomenProList } from '../Components/Products/WomenProList';

function WomenProductPage() {
  return (
    <div style={{ display: "flex",width:"100%", backgroundColor: "white", gap:"20px", justifyContent:"space-between", }}>
    <div style={{width:"16%"}}> <Sidebar /></div>
    <div style={{width:"82%"}}>
     <WomenProList />
      </div>
  </div>
  )
}

export default WomenProductPage;