import { useState } from "react";
import { productMoqueada } from "./Products";
import ProductCards from "../ProductCards/ProductCards";
import { Products } from "../../interfaces/PetCard";
import SliderProducts from "../SliderProducts/SliderProducts";

const Home = () => {
  const [products, setproducts] = useState<Array<Products>>(productMoqueada);

  return (
    <section className="w-full">
      <SliderProducts/>
      <div className="mb-5 border-b-2 border-gray-200 ">
        <ul className="flex justify-between w-1/4 m-auto">
          <li className="text-3xl font-medium hover:border-b-2 hover:border-blue-500 cursor-pointer w-32 text-center hover:text-blue-500">Perros</li>
          <li className="text-3xl font-medium hover:border-b-2 hover:border-blue-500 cursor-pointer w-32 text-center hover:text-blue-500">Gatos</li>
          <li className="text-3xl font-medium hover:border-b-2 hover:border-blue-500 cursor-pointer w-32 text-center hover:text-blue-500">Otros</li>
        </ul>
      </div>
      <div className="w-10/12 m-auto mt-10  ">
        <div className="grid grid-cols-3 gap-8">
          {products.map((item) => (
            <ProductCards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
