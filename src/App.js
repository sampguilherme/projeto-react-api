import React from "react";
import { createGlobalStyle } from "styled-components"
import { Router } from "./Router/Router";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {

    let pokemons = []

         axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`)
        .then((response) => pokemons = response)

        console.log(pokemons)

  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  );
}

export default App;
