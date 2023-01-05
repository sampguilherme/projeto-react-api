import React from "react";
import { goToHomePage, goToDetailsPage } from "../../Router/coordinator";
import { useNavigate } from "react-router";
import { H2, Div } from "./PokedexStyle";
import { Header } from "../../Components/Header/Header";

export const Pokedex = () => {
    const navigate = useNavigate()
    return (
        <Div>
            <Header isOnPokedexPage={true}/>
            <H2>Meus Pokémons</H2>
            <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
        </Div>
    )
}