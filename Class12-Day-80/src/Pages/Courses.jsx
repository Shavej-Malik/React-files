import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        <h1>Courses Page</h1>

        <Outlet/> {/* All Children will show of Courses with help of (<Outlet/>) */}
    </div>
  )
}

export default Courses