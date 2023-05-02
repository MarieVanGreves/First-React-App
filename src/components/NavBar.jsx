import React, { useState } from "react";
import PokemonCard from "./PokemonCard";

function NavBar({ pokemonList }) {
  const [pokemonSelect, setPokemonToSelect] = useState(pokemonList[0]);

  const handleClick = (pokemon) => {
    setPokemonToSelect(pokemon);
  };

  return (
    <div>
      <div>
        <PokemonCard pokemon={pokemonSelect} />
      </div>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.name} onClick={() => handleClick(pokemon)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
