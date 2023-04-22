import React from "react";

function NavBar({ setPokemon, pokemonIndex, pokemonList }) {
  function handleClick() {
    setPokemon(pokemonIndex + 1);
  }

  function prevClick() {
    setPokemon(pokemonIndex - 1);
  }

  return (
    <div>
      {pokemonList[pokemonIndex].name == "Pikachu"
        ? alert("Pika Pikachu !!!")
        : ""}
      {pokemonIndex <= 0 ? (
        <span style={{ display: "none" }}></span>
      ) : (
        <button onClick={prevClick}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClick}>Suivant</button>
      ) : (
        <span style={{ display: "none" }}></span>
      )}
    </div>
  );
}

export default NavBar;
