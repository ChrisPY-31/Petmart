import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import Search from './components/Search/Search'
import NavBar from './components/Navigate/NavBar'
import SignUp from './components/Sign-up/SignUp'
import SignIn from './components/Sign-in/SignIn'
import Landing from './components/Landing/Landing'
function App() {

  return (
    <>
    <NavBar/>
      <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
    </Routes>
    
    </>
  )
}

export default App
