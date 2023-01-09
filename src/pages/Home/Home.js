import React, { useContext } from "react";
import { Div, H2 } from "./HomeStyle";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { Flex } from "@chakra-ui/react";
import { GlobalContext } from "../../contexts/GlobalContext";

export const Home = () => {
    
    const context = useContext(GlobalContext)
    const {basePokemons, pokedex} = context

    let pokedexStringfy = ""

    pokedex.map((pokemon) => {
        const newPokedexStringify = pokemon.name
        pokedexStringfy = [...pokedexStringfy, JSON.stringify(newPokedexStringify)]
    })

    return (
        <Div>
            <Header isOnHomePage={true}/>
            <H2>Todos Pokémons</H2>
            <Flex
                bgColor={"#5E5E5E"}
                minH={"100vh"}
                paddingTop={"20px"}
                justifyContent={"center"}
                paddingBottom={"40px"}
                
                >
                <Flex
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                    w={"1440px"}
                    gap={"20px"}
                >
                    
                    {basePokemons.map((pokemon, key) => (
                        pokedexStringfy.includes(`"${pokemon.name}"`) ? <></> :
                            <PokemonCard
                                pokemonName={pokemon.name}
                                key={key}
                        />
                    ))
                    }
                </Flex>
            </Flex>
        </Div>
    )
}