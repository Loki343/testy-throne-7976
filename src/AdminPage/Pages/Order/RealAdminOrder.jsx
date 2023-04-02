import React from 'react'
import AdminNavbar from '../../Navbar/Navbar'
import Order from './Order'
import SearchBar from '../../Navbar/SearchBar'

const RealAdminOrder = () => {
  return (
    <>
    <SearchBar/>
    <div style={{display:'flex'}}>
        <AdminNavbar/>
        <Order/>
    </div>
</>
  )
}

export default RealAdminOrder