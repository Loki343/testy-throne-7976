import React from 'react'
import AdminNavbar from '../../Navbar/Navbar'
import Dashboard from './Dashboard'
import SearchBar from '../../Navbar/SearchBar'

const RealDashboard = () => {
  return (
    <>
        <SearchBar/>
        <div style={{display:'flex'}}>
            <AdminNavbar/>
            <Dashboard/>
        </div>
    </>
  )
}

export default RealDashboard