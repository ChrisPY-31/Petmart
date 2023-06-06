import { signInWithEmailAndPassword } from "firebase/auth"
import { FirebaseAuth } from "../firebase/credencials"

const loginUser = async( email:string , password:string) =>{
    try {
        const UserLogin = await signInWithEmailAndPassword(FirebaseAuth , email , password)
        console.log(UserLogin)
    } catch (error) {
        console.log(error)
    }
    
} 
export default loginUser