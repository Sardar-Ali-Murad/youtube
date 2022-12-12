import React, { useState, useContext } from 'react';

import reducer from "./reducer"
// import axios from 'axios';
import {SEARCHNAME,selectedButton,CHANGINGURL,HOMEBUTTON,VEDIOID,CHANNELID} from './actions';



const AppContext = React.createContext();


export const initialState = {
      searchName:"Latest Search",
      selectedButton:"Home",
      // baseUrl:"https://youtube-v31.p.rapidapi.com/search?q=game&part=snippet%2Cid&regionCode=US&maxResults=50&order=date",
      // changingUrl:"https://youtube-v31.p.rapidapi.com/search?q=game&part=snippet%2Cid&regionCode=US&maxResults=50&order=date"
      changingUrl:"https://youtube-v31.p.rapidapi.com/search?q=&part=snippet%2Cid&regionCode=US&maxResults=50&order=date",
      
      VedioID:"",
      channelID:""
  }

  
  
  
  
  const AppProvider = ({ children }) => {
    
    
    let [state,dispatch]=React.useReducer(reducer,initialState)    
    
    console.log(state.searchName)
    function search({name,value}){
      dispatch({type:SEARCHNAME,
        payload:{
          name,
          value
        }})
      }
      function selectedButtonPresent({name}){
           dispatch({type:selectedButton,payload:{name:name}})
      }

       function updateUrl(endpoint){
           dispatch({type:CHANGINGURL,payload:{
            urlendpoint:endpoint
           }})
      }

      function homeUrl(){
        dispatch({type:HOMEBUTTON})
      }

      function vedioId(id){
        dispatch({type:VEDIOID,payload:{
          id:id
        }})
      }
      function channelId(id){
        dispatch({type:CHANNELID,payload:{
          id:id
        }})
      }

      console.log(state.VedioID)
      
  return (
    <AppContext.Provider
    value={
      {
        ...state,
        selectedButtonPresent,
        updateUrl,
        homeUrl,
        search,
        vedioId,
        channelId
      }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };


