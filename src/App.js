import React from "react";
import { createGlobalStyle } from "styled-components"
import { Router } from "./Router/Router";
import axios from "axios";
import { ChakraProvider } from '@chakra-ui/react'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App() {

    

  return (
    <ChakraProvider>
      <GlobalStyle/>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
