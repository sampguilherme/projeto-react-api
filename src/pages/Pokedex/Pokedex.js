import React, { useContext } from "react";
import { goToDetailsPage } from "../../Router/coordinator";
import { useNavigate } from "react-router";
import { H2, Div } from "./PokedexStyle";
import { Header } from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { Flex } from "@chakra-ui/layout";

export const Pokedex = () => {
    const navigate = useNavigate()

    const context = useContext(GlobalContext)
    const {pokedex, removeFromPokedex} = context

    return (
        <Div>
            <Header isOnPokedexPage={true}/>
            <H2>Meus Pokémons</H2>
            <Flex
                
                justifyContent={"center"}
            >
                <Flex
                    flexWrap={"wrap"}
                    gap={"20px"}
                    justifyContent={"center"}
                    width={"1440px"}
                    minH
                >
                    {pokedex.map((pokemon) => (
                        <PokemonCard
                            removeFromPokedex={removeFromPokedex}
                            inPokedex={true}
                            pokemonName={pokemon.name}
                            key={pokemon.name}
                        />
                    ))}
                </Flex>
            </Flex>
        </Div>
    )
}