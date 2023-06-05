import type {FormEventHandler} from 'react'
import {useState} from 'react'
import registerUser from '../../functions/registerUser'
import { getUserLogin } from '../../store/reducer/Verificaciones'
import { useSelector , useDispatch} from 'react-redux'
import { RootState } from '../../store/types'
type FormSubmit = FormEventHandler<HTMLFormElement>
const SignIn = () => {
  const [correo, setCorreo] = useState<string>('')
  const [contraseña, setContraseña] = useState<string>('')

  const dispatch = useDispatch()
  const {userLogin} = useSelector((state:RootState) => state.Verificar)
  
console.log(userLogin)
  const handleSubmit:FormSubmit = async (e) =>{
    e.preventDefault()
    await registerUser(correo , contraseña)
    dispatch(getUserLogin())
    
  }

  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Correo</label>
      <input 
      type="text" 
      placeholder="correo" 
      name="correo" 
      onChange={e => setCorreo(e.target.value)}
      />
      <label htmlFor="">Contraseña</label>
      <input type="text" placeholder="Contraseña" name="contraseña" onChange={e => setContraseña(e.target.value)} />
      <button>Enviar</button>
    </form>
  )
}

export default SignIn