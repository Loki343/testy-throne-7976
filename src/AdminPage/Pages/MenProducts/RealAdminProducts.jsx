import React from 'react'
import AdminNavbar from '../../Navbar/Navbar'
import { AdminProducts } from './AdminProducts'
import SearchBar from '../../Navbar/SearchBar'


const RealAdminProducts = () => {
  return (
    
    <>
    <SearchBar/>
    <div style={{display:'flex'}}>
        <AdminNavbar/>
        <AdminProducts/>
    </div>
</>
  )
}

export default RealAdminProducts