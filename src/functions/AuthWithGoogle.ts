import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { FirebaseAuth } from "../firebase/credencials"

const googleProvider = new GoogleAuthProvider
export const singInWithGoogle = async() =>{
    try {
        const credencials = await signInWithPopup(FirebaseAuth , googleProvider )
        console.log(credencials)
    } catch (error) {
        console.log(error)
    }
}