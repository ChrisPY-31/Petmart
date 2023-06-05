import { FirebaseAuth } from "../firebase/credencials";
import { signOut } from "firebase/auth";

const logOut = async() =>{
    try {
        await signOut(FirebaseAuth)
    } catch (error) {
        
    }
}
export default logOut