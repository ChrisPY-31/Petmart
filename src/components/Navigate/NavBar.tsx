import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchArticles from "../SearchArticles/SearchArticles";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import "./Navbar.css";
import Menu from "../Menu/Menu";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../../firebase/credencials";

const NavBar = () => {
  const [cuenta, setCuenta] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  console.log(cuenta);

  const navigate = useNavigate();

  const handleCarrito = () => {
    navigate("Cart");
  };

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setLogin(true);
        return;
      } else {
        setLogin(false);
        return;
      }
    });
  }, []);

  return (
    <nav className="bg-orange-500 w-full ">
      <div className="w-10/12 m-auto flex justify-between h-20 items-center">
        <h2 className="text-4xl font-semibold ">
          {login ? 
          <>          
          <Link to="/home" className="text-white">PetCard</Link> 
          </>
          : 
          <Link to="/" className="text-white">PetCard</Link>
          }
        </h2>

        <div className="flex w-2/3 justify-start items-center h-full">
          <h3 className="text-xl ">
            {login ?
            <Link to="/home" className="text-xl mx-5 px-2 text-white hover:border-b-2 hover:border-white">Inicio </Link>
            :''
          }
          </h3>
          
          <h3 className="text-xl  px-2 text-white hover:border-b-2 hover:border-white cursor-pointer">
            <Link to="search" className="hover:text-white">Explorar </Link>
          </h3>
          <SearchArticles />
        </div>

        <div>
          {login ? (
            <div className="flex w-32 justify-around">
              <div onClick={handleCarrito} >
                <AiOutlineShoppingCart className="carrito" />
              </div>
              <div onClick={() => setCuenta(true)}>
                <AiOutlineUser className="cuenta" />
              </div>
              {cuenta && <Menu setCuenta={setCuenta} />}
            </div>
          ) : (
            <ul className="flex gap-4 justify-between text-white">
              <li>
                <Link
                  className="py-2 px-3 bg-indigo-600 rounded-lg"
                  to="sign-in"
                >
                  IniciaSesion
                </Link>
              </li>

              <li>
                <Link 
                className="py-2 px-3 bg-blue-600 rounded-lg" to="sign-up">
                  Registrate
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
