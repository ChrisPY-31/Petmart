type Props = {
  item: {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  };
};

const ProductCards = ({ item }: Props) => {
  return (
  <div className="flex flex-col items-center h-72 bg-slate-200 rounded-xl cursor-pointer" >
    <img 
    className="w-52 h-52"
    src={item.image} 
    alt={item.name} />
    <h3>{item.name}</h3>
    <p>{item.price}</p>
    <p>{item.description}</p>
  </div>
  );
};

export default ProductCards;
