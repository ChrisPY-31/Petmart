import { useState } from "react";
import { productMoqueada } from "./Products";
import ProductCards from "../ProductCards/ProductCards";

type Products = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};
const Home = () => {
  const [products, setproducts] = useState<Array<Products>>(productMoqueada);

  return (
    <section className="w-full">
      <div className="w-10/12 m-auto mt-10 ">
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
