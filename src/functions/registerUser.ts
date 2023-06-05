import { createUserWithEmailAndPassword } from "firebase/auth"
import { FirebaseAuth } from "../firebase/credencials"

// type Register = {
//     email: string
//     password: string | number
// }

const registerUser= async ( email:string , password:(string)) =>{
    try {
        const newUser = await createUserWithEmailAndPassword(FirebaseAuth , email , password)
        console.log(newUser)
    } catch (error) {
        console.log(error)
    }
}
export default registerUser