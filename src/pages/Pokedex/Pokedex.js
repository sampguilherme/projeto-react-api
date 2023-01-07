import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { H2, Div } from "./PokedexStyle";
import { Header } from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { Flex, Text } from "@chakra-ui/layout";


export const Pokedex = () => {
    const navigate = useNavigate()

    const context = useContext(GlobalContext)
    const {pokedex, removeFromPokedex} = context

    console.log(pokedex.length)
    
    return (
        <Div>
            <Header isOnPokedexPage={true}/>
            <H2>Meus Pokémons</H2>
            <Flex
                
                justifyContent={"center"}
            >
                {pokedex.length < 1 ? 
                    <Text 
                        marginTop={"30px"}
                        textAlign={"center"}
                        color={"white"}
                        fontFamily={"Inter, sans-serif"}
                        fontSize={"32px"}
                    >Que pena... Você ainda não capturou nenhum Pokemon!</Text> : 

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
                </Flex>}
                
            </Flex>
        </Div>
    )
}