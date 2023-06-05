import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="h-screen w-full">
      <div className="w-10/12 m-auto flex justify-center items-center flex-col">
        <img src="https://img.freepik.com/vector-premium/perro-gracioso-dibujos-animados-hueso_29190-1660.jpg?" alt="perro" />
        <button className="py-2 px-10 bg-red-400 rounded-sm"><Link to={'/home'}>Ir al Home</Link></button>
      </div>
    </section>
  );
};

export default Landing;
