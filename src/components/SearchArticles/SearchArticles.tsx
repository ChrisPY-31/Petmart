import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { FormEventHandler, ChangeEventHandler } from "react";
import { getSearchItem } from "../../store/reducer";
import { AiOutlineSearch } from "react-icons/ai";
import './Search.css'

type FormSubmit = FormEventHandler<HTMLFormElement>;
type ChangeSearch = ChangeEventHandler<HTMLInputElement>;
const SearchArticles = () => {
  const [input, setInput] = useState<string>("");

  const dispatch = useDispatch();

  const handleSearch: ChangeSearch = (e) => {
    setInput(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit: FormSubmit = (e) => {
    console.log('hola')
    e.preventDefault();
    if (!input) {
      return;
    } else {
      dispatch(getSearchItem(input));
      navigate("search");
    }
  };
  return (
    <form className="flex relative" onSubmit={handleSubmit} >
      <input
        type="text"
        className="py-2 px-2 w-96 rounded outline-none"
        placeholder="Buscar articulo"
        onChange={handleSearch}
      />
      <button><AiOutlineSearch className='cursor-pointer loco' /></button>
        
    </form>
  );
};

export default SearchArticles;
