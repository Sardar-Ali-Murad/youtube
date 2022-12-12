import React from 'react'

import "./SideBar.css"
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Data from "./Data"
import { useGlobalContext } from '../context/appContext';


const SideBar = () => {

  let [sidebarOpen,setSidebarOpen]=React.useState(false)

  let {selectedButton,selectedButtonPresent,updateUrl, homeUrl}=useGlobalContext()

  function open(){
    setSidebarOpen(true)
  }

  function close(){
    setSidebarOpen(false)
  }

  function buttonhandle(name){
    selectedButtonPresent({name:name})
    updateUrl(name)
    setSidebarOpen(false)
  }
  function buttonhandlehome(name){
    selectedButtonPresent({name:name})
    homeUrl()
    setSidebarOpen(false)
  }

  // console.log(selectedButton)

  return (
    <div>

{/* bigsidebar */}
      <div className='sidebar__Main'>
        <div className='sidebar__Main__Section'>

        <div className={`sidebar__Sections ${selectedButton==="Home" ? "ActiveButton":""} `} onClick={()=>buttonhandlehome("Home")} >
                <p className='p__Cormorant'>Home</p>
                <h1 className='h__Cormorant'><HomeIcon/></h1>
              </div>
          
          {Data.map((all) => {
            // console.log(all)
            return (
              <div className={`sidebar__Sections ${selectedButton===all.name ? "ActiveButton":""} `} onClick={()=>buttonhandle(all.name)} >
                <p className='p__Cormorant'>{all.name}</p>
                <h1 className='h__Cormorant'>{all.icon}</h1>
              </div>
            )
          })}
        </div>

      </div>

{/* small sidebar */}

      <div className='small__Sidebar'>
        <h1 onClick={open} className="ham"><MenuIcon /></h1>
        {
          sidebarOpen &&
          <>

            <div className='small__Sidebar__Transparent__Layout'> </div>
            <div className='small__Sidebar__Middle__Section'>
          <h1 className='close' onClick={close}><CloseIcon /></h1>

          <div className={`sidebar__Sections ${selectedButton==="Home" ? "ActiveButton":""} `} onClick={()=>buttonhandlehome("Home")}  >
                <p className='p__Cormorant'>Home</p>
                <h1 className='h__Cormorant'><HomeIcon/></h1>
              </div>
          
          {Data.map((all) => {
            return (
              <div className={`sidebar__Sections ${selectedButton===all.name ? "ActiveButton":""} `} onClick={()=>buttonhandle(all.name)}>
                <p className='p__Cormorant'>{all.name}</p>
                <h1 className='h__Cormorant'>{all.icon}</h1>
              </div>
            )
          })}
        </div>
          </>
        }
      </div>


    </div>
  )
}

export default SideBar