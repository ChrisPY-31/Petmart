import { useState, useEffect } from "react";
import { productMoqueada } from "../Home/Products"
import Articulos from "../Articulos/Articulos";
import Categorias from "../Categorias/Categorias";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import { Products } from "../../interfaces/PetCard";

const Search = () => {
  const { articulosFiltrados } = useSelector(
    (state: RootState) => state.Petmart
  );
  console.log(articulosFiltrados);
  const [articulos, setArticulos] = useState<Array<Products>>([]);

  useEffect(() => {
    if (articulosFiltrados) {
      let articulo = productMoqueada.filter(item => item.name.toLocaleLowerCase().includes(articulosFiltrados.toLowerCase()))
      console.log(articulo)
      setArticulos(articulo)
    }
  }, [articulosFiltrados]);

  return (
    <section className="w-full mt-10 h-screen">
      <div className="w-3/4 m-auto">
        <div className="my-10">
          <h2 className="text-6xl font-bold">Encuentra todos los productos</h2>
        </div>

        <div className="h-full">
          <div className="flex justify-around">
            <h2>Ordenar por </h2>

            <Pagination />
          </div>
          <div className="flex justify-between gap-10">
            <Categorias />
            <Articulos articulos={articulos}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
