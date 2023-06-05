import { useState } from "react";
import { Link } from "react-router-dom";
import SearchArticles from "../SearchArticles/SearchArticles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { AiOutlineShoppingCart , AiOutlineUser } from "react-icons/ai";
import './Navbar.css'

const NavBar = () => {
  const { userLogin } = useSelector((state: RootState) => state.Verificar);

  return (
    <nav className="bg-orange-500 w-full ">
      <div className="w-10/12 m-auto flex justify-between h-20 items-center">
        <h2 className="text-3xl font-bold ">
          <Link to="/">PetCard</Link>
        </h2>

        <div className="flex w-1/2 justify-around">
        <h3 className="text-xl">
            <Link to="/Home">Inicio </Link>
          </h3>
          <h3 className="text-xl" >
            <Link to="search">Explorar </Link>
          </h3>
          <SearchArticles />
        </div>

        <div>
          {!userLogin ? (
            <ul className="flex justify-between">
              <li>
                <Link
                  className="py-2 px-8 bg-indigo-600 rounded-lg"
                  to="sign-in"
                >
                  Inicia sesion
                </Link>
              </li>
              <li>
                <Link className="py-2 px-8 bg-blue-600 rounded-lg" to="sign-up">
                  Registrate
                </Link>
              </li>
            </ul>
          ) : (
            <div className="flex w-32 justify-around">
              <AiOutlineShoppingCart className='carrito'/>
              <AiOutlineUser className='cuenta'/>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
