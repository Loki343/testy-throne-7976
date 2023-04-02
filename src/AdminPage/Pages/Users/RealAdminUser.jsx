import React from 'react'

import AdminNavbar from '../../Navbar/Navbar'
import Users from './Users'
import SearchBar from '../../Navbar/SearchBar'


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
