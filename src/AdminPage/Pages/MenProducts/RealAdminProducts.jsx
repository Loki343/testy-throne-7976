import React from 'react'
import SearchBar from '../../Components/Searchbar'
import AdminNavbar from '../../Navbar/Navbar'
import { AdminProducts } from './AdminProducts'


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