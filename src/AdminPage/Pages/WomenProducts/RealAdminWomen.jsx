import React from 'react'
import AdminNavbar from '../../Navbar/Navbar'
import WomenAdminProducts from './WomensAdminProducts'
import SearchBar from '../../Navbar/SearchBar'

const RealAdminWomen = () => {
  return (
    
    <>
    <SearchBar/>
    <div style={{display:'flex'}}>
        <AdminNavbar/>
        <WomenAdminProducts />
    </div>
</>
  )
}

export default RealAdminWomen