import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ReactDay1 from './Topics/ReactDay1'
import ReactDay2 from './Topics/ReactDay2'
import Home from './Pages/Home'
import Error from './Pages/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={''} element={<Home/>}></Route>
          <Route path={"/reactday1"} element={<ReactDay1/>}></Route>
          <Route path={"/reactday2"} element={<ReactDay2/>}></Route>
          <Route path={'/*'} element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
