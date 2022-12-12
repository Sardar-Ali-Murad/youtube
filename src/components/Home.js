import React from 'react'
import { CHANGINGURL } from '../context/actions'
import { useGlobalContext } from '../context/appContext'
import { Link, useNavigate } from "react-router-dom";
import "./Home.css"
import { borderRadius } from '@mui/system';


const Home = () => {

  let [data,setdata]=React.useState([])
  
  let {changingUrl,searchName,vedioId,channelId}=useGlobalContext()
  
    let [loading,setLoading]=React.useState(true)
    

    React.useEffect(()=>{

        const options = {
          method: 'GET',
          headers: {
                'X-RapidAPI-Key': '1a6a14f906msh85ed0e73a2ad273p120c4fjsn8cfd1188c678',
                'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
              }
        };
        
        fetch(changingUrl, options)
            .then(response => response.json())
            .then(response => setdata(response.items))
            .catch(err => console.error(err));

            setLoading(false)
          },[changingUrl])


          function vedeoid(id){
               vedioId(id)
          }

          function channel(id){
              channelId(id)
          }
          
          if(data===undefined){
            return <p className='p__Cormorant'>No data to show</p>
          }
        

  return (
    <div>

      <div>
          <h1 className='h__Cormorant'>Here Are the Result For The {searchName}</h1>
      </div>
      
      <div className='home__Main'>

      {data.length<1 ?"Loading...": data.map((all)=>{
        return(
          <div className="home__Single__Section">
            <Link to={`/vedio/${all.id.videoId}`}>
                 <img src={all?.snippet?.thumbnails?.high.url} onClick={()=>vedeoid(all.id.videoId)}/>
          </Link>
                 <div className='home__Single__Section__Text'>
                    <h1 className="h__Sans">{all?.snippet?.description}</h1>
                    <div className='last__Portion' style={{display:"flex"}}>
                     <p className="h__Cormorant">{all?.snippet?.title}</p>
                     <Link to={`/channel/${all.snippet.channelId}`}>
                     <img src={all?.snippet?.thumbnails?.medium?.url} style={{borderRadius:"50%",height:"50px",width:"50px",cursor:"pointer"}} onClick={()=>channel(all.snippet.channelId)}/>
                     </Link>
                    </div>
                 </div>
              </div>
          )
        })}

        </div>

    </div>
  )
}

export default Home