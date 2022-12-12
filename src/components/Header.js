import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useGlobalContext } from '../context/appContext';
import "./Header.css"

const Header = () => {

    let {search,searchName,updateUrl}=useGlobalContext()

    function handleChange(e){
         search({name:e.target.name,value:e.target.value})
         updateUrl(e.target.value)
    }

  return (
    <div className='header__Main'>
      <div className='header__Logo'>
         <YouTubeIcon className="youtube__Logo"/>
      </div>
      <div className='header__Search p__Cormorant'>
         <input className=' p__Cormorant' placeholder="Search Here..." value={searchName} onChange={handleChange} name="searchName"/>
      </div>
    </div>
  )
}

export default Header