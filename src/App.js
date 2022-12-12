

import './App.css';
import { Header, SideBar, Home, SingleVedio,HomeWrapper,Channel } from "./components/index"
import {BrowserRouter,Route,Routes} from "react-router-dom"


function App() {
  return (
    <div >

       <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomeWrapper/>}/>
          <Route path="/vedio/:id" element={<SingleVedio/>}/>
          <Route path="/channel/:id" element={<Channel/>}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
