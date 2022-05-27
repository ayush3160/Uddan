import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import React,{useState} from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/Home"
import Dashboard from "./components/Dashboard";
import Register from "./components/Register"
import Login from "./components/Login"

export default function App() {

    const [login,setLogin] = useState(0);
    
    const handleLogin = () => {
      setLogin(login+1)
    }

    return(<>
      <BrowserRouter>
	  <Navbar login = {login} />
      <Routes>
          <Route  path = "/" element = {<Home/>} />
          <Route  path = "/home" element = {<Dashboard />} />
          <Route  path = "/login" element = {<Login handleLogin={handleLogin}/>} />
          <Route  path = "/register" element = {<Register/>}/>
      </Routes>    
      </BrowserRouter>
	  </>    )
  }
