import React, { useEffect, useState } from "react";
import { DivPrincipal, H2, Div } from "./HomeStyle";
import { Header } from "../../Components/Header/Header";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import axios from "axios";
import { Flex } from "@chakra-ui/react";

export const Home = () => {
    
    const [pokemons, setPokemons] = useState([])

    const getPokemons = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=0`)
        .then((response) => setPokemons(response.data.results))
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        getPokemons();
    }, []);

    console.log(pokemons)

    return (
        <DivPrincipal>
            <Header isOnHomePage={true}/>
            <H2>Todos Pokémons</H2>
            <Flex
                marginTop={"20px"}
                gap={"20px"}
                flexWrap={"wrap"}
                justifyContent={"center"}
            >
                {pokemons.map((pokemon, key) => (
                        <PokemonCard 
                        pokemonName={pokemon.name}
                        key={key}
                    />
                ))
                }
            </Flex>
        </DivPrincipal>
    )
}