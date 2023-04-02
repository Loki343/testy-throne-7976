import React from 'react'
import SearchBar from '../../Components/Searchbar'
import AdminNavbar from '../../Navbar/Navbar'
import Order from './Order'

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