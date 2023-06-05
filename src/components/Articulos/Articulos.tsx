import { Products } from "../../interfaces/PetCard";
import { productMoqueada } from "../Home/Products";
import { Link } from "react-router-dom";

interface Props {
  articulos: Products[];
}

const Articulos = ({ articulos }: Props) => {
  return (
    <div className="w-3/4 h-1/2">
      <div className="w-10/12 m-auto mt-4 grid grid-cols-1 gap-6 ">
        {articulos.length > 0
          ? articulos.map((item) => (
              <div className="flex border-solid border-2 border-cyan-400">
                <img className="w-72 h-56" src={item.image} alt="" />
                <div className="flex ">
                  <p>{item.name}</p>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            ))
          : productMoqueada.map((item) => (
              <div className="flex border-solid border-2 border-cyan-400 w-full">
                <img className="w-72 h-56" src={item.image} alt="" />
                <div className="flex flex-col px-5 py-5 w-3/4">
                  <p className="font-medium text-2xl">{item.name}</p>
                  <p className="text-xl">{item.description}</p>
                  <p className="font-light text-xl">{item.price}</p>
                  <div className="flex">
                    <button className="border-solid border-2 border-black w-1/4 h-10 rounded-md cursor-pointer">
                      <Link to={"/detail"}>Ver Detalles</Link>
                    </button>
                    <p>Añadir a favoritos</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Articulos;
