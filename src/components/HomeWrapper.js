import React from 'react'

import Home from './Home'
import SideBar from './SideBar'

const HomeWrapper = () => {
  return (
    <div>
       <div style={{ display: "flex" }}>
        <SideBar />
        <Home />
      </div>
    </div>
  )
}

export default HomeWrapper
