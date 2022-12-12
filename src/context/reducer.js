

import { DISPLAY_ALERT } from "./actions"
import { SEARCHNAME,selectedButton,CHANGINGURL,HOMEBUTTON,VEDIOID,CHANNELID} from "./actions"
import {initialState} from "./appContext"
const reducer =(state,action)=>{
    if(action.type===SEARCHNAME){
      return{
        ...state,
        [action.payload.name]:action.payload.value
      }
    }

    if(action.type===selectedButton){
      return{
        ...state,
        selectedButton:action.payload.name
      }
    }

    if(action.type===CHANGINGURL){
      return{
        ...state,
        changingUrl:`https://youtube-v31.p.rapidapi.com/search?q=${action.payload.urlendpoint}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`
      }
    }

    if(action.type===HOMEBUTTON){
      return{
        ...state,
        changingUrl:"https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50"
      }
    }

    if(action.type===VEDIOID){
      return{
        ...state,
        VedioID:action.payload.id
      }
    }
    if(action.type===CHANNELID){
      return{
        ...state,
        channelID:action.payload.id
      }
    }

}

export default reducer