import React from 'react'
import SearchBar from '../../Components/Searchbar'
import AdminNavbar from '../../Navbar/Navbar'
import WomenAdminProducts from './WomensAdminProducts'

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