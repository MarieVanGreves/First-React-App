import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import "./App.css";
import { useEffect, useState } from "react";

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

function App() {
  const [pokemonIndex, setPokemon] = useState(0);
  const pokemon = pokemonList[pokemonIndex];

  useEffect(() => {
    alert("Hello Pokemon Trainer :)");
  }, []);

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <NavBar
        setPokemon={setPokemon}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />
    </div>
  );
}

export default App;
