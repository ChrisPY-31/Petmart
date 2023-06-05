import { signInWithEmailAndPassword } from "firebase/auth"
import { FirebaseAuth } from "../firebase/credencials"

const LoginUser = async( email:string , password:string & number) =>{
    try {
        const UserLogin = await signInWithEmailAndPassword(FirebaseAuth , email , password)
        console.log(UserLogin)
    } catch (error) {
        console.log(error)
    }
    
} 
export default LoginUser