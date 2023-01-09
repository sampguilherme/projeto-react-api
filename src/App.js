import React from "react";
import { createGlobalStyle } from "styled-components"
import { Router } from "./Router/Router"; 
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContext } from "./contexts/GlobalContext";
import { useState, useEffect } from "react";
import { BASE_URL } from "./constants/apiUrl";
import axios from "axios";
import { pokemonTypes } from "./constants/types";


const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {

  const [basePokemons, setBasePokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  const [pokemons, setPokemons] = useState([])
  const [pokemonsImage, setPokemonsImage] = useState('')
  const [typeLocal, setTypeLocal] = useState([])

  const fetchPokemonName = async (pokemonName) => {
    try{
       const response = await axios.get(`${BASE_URL}/${pokemonName}`)
       setPokemons(response.data)
       setPokemonsImage(response.data.sprites.other['official-artwork']['front_default'])
       setTypeLocal([pokemonTypes[response.data.types[0].type.name], pokemonTypes[response.data.types[1]?.type.name]])
    } catch (error){
        console.log("Erro ao buscar lista de pokemons");
        console.log(error);
    }
}

  const getPokemons = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
    .then((response) => setBasePokemons(response.data.results))
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
    pokemonsImage,
    typeLocal,
    basePokemons,
    setBasePokemons,
    addToPokedex,
    pokedex,
    removeFromPokedex,
    getPokemons,
    fetchPokemonName
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
