import React from "react";
import { Div, H2 } from "./HomeStyle";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import axios from "axios";

export const Home = () => {
    
    return (
        <Div>
            <Header isOnHomePage={true}/>
            <H2>Todos Pokémons</H2>
            
        </Div>
    )
}