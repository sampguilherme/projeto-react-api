import React from "react";
import { createGlobalStyle } from "styled-components"
import { Router } from "./Router/Router"; 
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContext } from "./contexts/GlobalContext";
import { useState, useEffect } from "react";
import { BASE_URL } from "./constants/apiUrl";
import axios from "axios";


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [pokelist, setPokelist] = useState([])

  const getPokemons = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=0`)
    .then((response) => setPokemons(response.data.results))
    .catch((error) => console.log(error))
}

useEffect(() => {
    getPokemons();
}, []);
  

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    )
    setPokedex(newPokedex)
  }


  let context = {
    pokemons,
    setPokemons,
    addToPokedex,
    pokelist,
    pokedex,
    removeFromPokedex
  }

    

  return (
    <GlobalContext.Provider value={context}>
      <ChakraProvider>
        <GlobalStyle/>
        <Router/>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
