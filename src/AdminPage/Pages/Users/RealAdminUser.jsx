import React from 'react'

import SearchBar from '../../Components/Searchbar'
import AdminNavbar from '../../Navbar/Navbar'
import Users from './Users'


const RealAdminUser = () => {
  return (
    <>
    <SearchBar />
    <div style={{display:'flex'}}>
        <AdminNavbar/>
        <Users />
    </div>
</>
  )
}

export default RealAdminUser
