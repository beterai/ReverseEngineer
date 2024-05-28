import Dashboard from "../pages/Dashboard"
import Home from "../pages/Home"
import {Routes, Route} from "react-router-dom"


const Routers = () => {

  
  return <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/dashboard" element = {<Dashboard/>}/>
    <Route path = "/home" element = {<Home/>}/>
  </Routes>
}

export default Routers