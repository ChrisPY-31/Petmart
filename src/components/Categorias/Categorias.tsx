const Categorias = () => {
  return (
    <div className="bg-indigo-400 w-1/4 h-1/2">
      <div className="bg-blue-500 w-10/12 m-auto flex flex-col">
        <label htmlFor="">
          <input type="checkbox" />
          correas
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Comida
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Accesorios
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Periodos
        </label>
      </div>
    </div>
  );
};

export default Categorias;
