import React, { useContext } from "react";
import { goToDetailsPage } from "../../Router/coordinator";
import { useNavigate } from "react-router";
import { H2, Div } from "./PokedexStyle";
import { Header } from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";

export const Pokedex = () => {
    const navigate = useNavigate()

    const context = useContext(GlobalContext)
    const {pokedex, removeFromPokedex} = context

    return (
        <Div>
            <Header isOnPokedexPage={true}/>
            <H2>Meus Pokémons</H2>
                {pokedex.map((pokemon) => (
                    <PokemonCard
                        removeFromPokedex={removeFromPokedex}
                        inPokedex={true}
                        pokemonName={pokemon.name}
                        key={pokemon.name}
                    />
                ))}
            <button onClick={() => goToDetailsPage(navigate)}>Detalhes</button>
        </Div>
    )
}