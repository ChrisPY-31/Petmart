import type {MouseEventHandler} from 'react'
import logOut from '../../functions/logOut';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserLogin } from '../../store/reducer/Verificaciones';
type MyComponentProps = {
    setCuenta: React.Dispatch<React.SetStateAction<boolean>>;
  }
type handleModuleCerrar = MouseEventHandler<HTMLParagraphElement>

const Menu = ( { setCuenta } : MyComponentProps ):JSX.Element => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleCerrar:handleModuleCerrar = async() =>{
    await logOut()
    navigate('/')
    dispatch(getUserLogin())
  }
  return (
    <div className='h-full w-full left-0 bottom-1 bg-black absolute z-50 opacity-60 overflow-hidden ' onClick={() => setCuenta(false)} >
        <div className='absolute top-20 right-10 bg-white h-2/5 w-72 rounded-md'>
            <div>
                <p>Hola Christian</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" className="h-20 w-20" />
                <p>Mi cuenta</p>
                <p>Vender</p>
                <p onClick={handleCerrar} className='cursor-pointer'>Cerrar Cuenta</p>
            </div>
        </div>
    </div>
  )
}

export default Menu