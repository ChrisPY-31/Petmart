import {useEffect} from 'react'
import {Route, Routes , useNavigate} from 'react-router-dom'
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import Search from './components/Search/Search'
import NavBar from './components/Navigate/NavBar'
import SignUp from './components/Sign-up/SignUp'
import SignIn from './components/Sign-in/SignIn'
import Landing from './components/Landing/Landing'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from './firebase/credencials'
import { useSelector} from 'react-redux'
import { RootState } from './store/types'
import Carrito from './components/Carrito/Carrito'
function App() {
  const navigate = useNavigate()
  const {userLogin} = useSelector((state:RootState) => state.Verificar)
  console.log(userLogin)
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth , (usuarioFirebase) =>{
      if(usuarioFirebase){
        navigate('/home')
      }
      else{
        navigate('/')
      }
    })
  }, [])
  

  return (
    <div className='h-screen'>
    <NavBar/>
      <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/detail' element={<Detail/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/Cart' element={<Carrito/>}/>
    </Routes>
    
    </div>
  )
}

export default App
