import React from 'react'
import { useGlobalContext } from '../context/appContext'
import "./Home.css"
import "./Channel.css"
import {Link,useParams} from "react-router-dom"


const Channel = () => {

  let {id}=useParams()
    let {channelID,vedioId,channelId}=useGlobalContext()
    console.log(channelID)

    let [channelDetail,setChannelDetail]=React.useState([])
    let [channelDetailVedio,setChannelDetailVedio]=React.useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '81e03cfb2amsh9eb407bfb2869bbp143034jsncdc76b7f77bf',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };
    React.useEffect(()=>{
        
        // fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${channelID}`, options)
        fetch(`https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=${id}`, options)
            .then(response => response.json())
            .then(response => setChannelDetail(response.items))
            .catch(err => console.error(err));
    },[])


    React.useEffect(()=>{
        
        fetch(`https://youtube-v31.p.rapidapi.com/search?channelId=${channelID}&part=snippet%2Cid&order=date&maxResults=50`, options)
	.then(response => response.json())
	.then(response => setChannelDetailVedio(response.items))
	.catch(err => console.error(err));
    },[])

    function vedeoid(id){
        vedioId(id)
   }

   function channel(id){
       channelId(id)
   }
   

  return (
    <div className='channel__Main section__padding'>
      <div className='channel__Details'>
       <p className='p__Cormorant'>{channelDetail[0]?.snippet.title}</p>
       <img src={channelDetail[0]?.snippet?.thumbnails?.medium?.url}  style={{width:"130px",width:"130px"}}/>
       <p className='p__Cormorant'>{channelDetail[0]?.statistics?.subscriberCount} Suscribers</p>
      </div>

      <div className='channel__Vedios'>
      {channelDetailVedio.length<1 ?"Loading...": channelDetailVedio.map((all)=>{
        return(
          <div className="home__Single__Section">
            <Link  to={`/vedio/${all.id.videoId}`}>
                 <img src={all?.snippet?.thumbnails?.high.url} onClick={()=>vedeoid(all.id.videoId)}/>
          </Link>
                 <div className='home__Single__Section__Text'>
                    <h1 className="h__Sans">{all?.snippet?.description.slice(0,200)}...</h1>
                    <div className='last__Portion' style={{display:"flex"}}>
                     <p className="h__Cormorant">{all?.snippet?.title}</p>
                     <Link  to={`/channel/${all.snippet.channelId}`}>
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

export default Channel
