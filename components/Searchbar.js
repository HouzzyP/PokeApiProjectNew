import React, { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();
  const { onSearch } = props;

  const onChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search.toLowerCase());
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar Pokemon..." onChange={onChange} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
