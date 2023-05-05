import './App.css'
import { Route, Routes } from 'react-router-dom'
import {  Comments, Users,Home } from './components/CommonComponets.'
import Nav from './components/Nav'
function App() {

  return (
    <>
          <Nav></Nav>
          <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/users' element={<Users />}/>
        <Route path='/comments' element={<Comments />}/>
          </Routes>
    </>
  ) 
}

export default App
