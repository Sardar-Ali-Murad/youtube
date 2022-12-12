
import React from 'react'
import { Link,useParams } from 'react-router-dom'
import "./SingleVedio.css"
import { useGlobalContext } from '../context/appContext'
import "./SingleVedio.css"



const SingleVedio = () => {
  let {id}=useParams()

  let [vedioDetails, setVedioDetails] = React.useState([])
  let [data,setdata]=React.useState([])
  let [loading,setLoading]=React.useState(true)
  let { VedioID,changingUrl,vedioId,channelId } = useGlobalContext()
  console.log(VedioID)

  React.useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '81e03cfb2amsh9eb407bfb2869bbp143034jsncdc76b7f77bf',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`, options)
      .then(response => response.json())
      .then(response => setVedioDetails(response.items))
      .catch(err => console.error(err));
  },[VedioID])


  
  React.useEffect(()=>{

    const options = {
      method: 'GET',
      headers: {
            'X-RapidAPI-Key': '1a6a14f906msh85ed0e73a2ad273p120c4fjsn8cfd1188c678',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
    };
    
    fetch(`https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`, options)
	.then(response => response.json())
	.then(response => setdata(response.items))
	.catch(err => console.error(err));

        setLoading(false)
      },[changingUrl,VedioID])

      function vedeoid(id){
        vedioId(id)
   }

   
   function channel(id){
    channelId(id)
}
   
  console.log(vedioDetails)

  return (
    <div className='vedio__Main section__padding'>
      <div className='main__Vedio'>
        <iframe width="420" height="315"
          src={`https://www.youtube.com/embed/${VedioID}`}>
        </iframe>
        <p className='p__Cormorant'>
          {vedioDetails[0]?.snippet?.title}
        </p>
        <p className='p__Cormorant' style={{marginTop:"40px",marginBottom:"40px"}}>
          {vedioDetails[0]?.snippet?.description.slice(0,600)}...
        </p>
        <p className='p__Cormorant'>
         Views: {vedioDetails[0]?.statistics?.viewCount}
        </p>
      </div>


      <div className='other__Vedios'>
      {data.length<1 ?"Loading...": data.map((all)=>{
        return(
          <div className="home__Single__Section">
            <Link  to={`/vedio/${all.id.videoId}`}>
                 <img src={all?.snippet?.thumbnails?.high.url} onClick={()=>vedeoid(all.id.videoId)}/>
          </Link>
                 <div className='home__Single__Section__Text' style={{marginBottom:"100px"}}>
                    <h1 className="h__Sans">{all?.snippet?.description.slice(0,100)}...</h1>
                    <div className='last__Portion' style={{display:"flex"}}>
                     <p className="h__Cormorant">{all?.snippet?.title}</p>
                     <Link to={`/channel/${all.snippet.channelId}`}>
                     <img src={all?.snippet?.thumbnails?.medium?.url} style={{borderRadius:"50%",height:"50px",width:"50px",cursor:"pointer"}}  onClick={()=>channel(all.snippet.channelId)}/>
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

export default SingleVedio
