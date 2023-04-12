import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];






function App() {
  const [pokemonIndex, setPokemonIdex] = useState(0);
  function handleNext() {
    if (pokemonIndex === pokemonList.length -1) {
      setPokemonIdex(pokemonList.length -1)
    } else {
      setPokemonIdex(pokemonIndex +1)
    }
  };

  function handleBefore() {
    if (pokemonIndex == 0) {
      setPokemonIdex(0)
    } else {
      setPokemonIdex(pokemonIndex -1)
    }
  };
  return (
    <>
    <div>
      <MyTitle />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
    <p>{pokemonIndex}</p>
    {pokemonIndex > 0 && <button onClick={handleBefore}>Avant</button>}
    {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Après</button>}
    </>
  );

}

export default App;
