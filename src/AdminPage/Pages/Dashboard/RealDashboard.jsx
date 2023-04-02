import React from 'react'
import SearchBar from '../../Navbar/SearchBar'
import AdminNavbar from '../../Navbar/Navbar'
import Dashboard from './Dashboard'

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