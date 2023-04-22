import React, { useState } from "react";

function NavBar({ setPokemon, pokemonIndex, pokeLength }) {
  function handleClick() {
    setPokemon(pokemonIndex + 1);
  }

  function prevClick() {
    setPokemon(pokemonIndex - 1);
  }

  return (
    <div>
      {pokemonIndex <= 0 ? (
        <span style={{ display: "none" }}></span>
      ) : (
        <button onClick={prevClick}>Précédent</button>
      )}
      {pokemonIndex < pokeLength - 1 ? (
        <button onClick={handleClick}>Suivant</button>
      ) : (
        <span style={{ display: "none" }}></span>
      )}
    </div>
  );
}

export default NavBar;
