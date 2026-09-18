import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Error from './Pages/Error'
import AiAssistant from './Pages/AiAssistant'
import React from './Topics/React'
import RestApi from './Topics/RestApi'
import SpringBoot from './Topics/SpringBoot'
import Spring from './Topics/Spring'
import Hibernate from './Topics/Hibernate'
import Sql from './Topics/Sql'
import SpringAi from './Topics/SpringAI'
import Java from './Topics/Java'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={''} element={<Home/>}></Route>
          <Route path={"/react"} element={<React/>}></Route>
          <Route path={"/restapi"} element={<RestApi/>}></Route>
          <Route path={"/springboot"} element={<SpringBoot/>}></Route>
          <Route path={"/spring"} element={<Spring/>}></Route>
          <Route path={"/hibernate"} element={<Hibernate/>}></Route>
          <Route path={"/sql"} element={<Sql/>}></Route>
          <Route path={"/java"} element={<Java/>}></Route>
          <Route path={"/springai"} element={<SpringAi/>}></Route>
          <Route path={'/aiassistant'} element={<AiAssistant/>}></Route>
          <Route path={'/*'} element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
