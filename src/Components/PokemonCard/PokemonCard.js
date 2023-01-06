import React, { useEffect, useState } from "react";
import axios from "axios";
import { P, H2, Img } from "./CardStyle";
import { Flex, Image, Button, Link } from "@chakra-ui/react";
import { pokemonTypes } from "../../constants/types";
import pokeBola from "../../Assets/pokebola.svg"
import { NavLink } from "react-router-dom";

export const PokemonCard = ({pokemonName}) => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonsImage, setPokemonsImage] = useState('')
    const [typeLocal, setTypeLocal] = useState([])

    const fetchPokemonName = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((result) => {
            setPokemons(result.data)
            setPokemonsImage(result.data.sprites.other['official-artwork']['front_default'])
            setTypeLocal([pokemonTypes[result.data.types[0].type.name], pokemonTypes[result.data.types[1]?.type.name]])
            console.log(result.data)
            
        })
        .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchPokemonName();
    }, []);

    

    return (
        <>
                    
                <Flex 
                    position={"relative"}
                    bgImage={pokeBola}
                    bgRepeat={"no-repeat"}
                    bgPosition={"right"}
                    bgColor={typeLocal[0] && typeLocal[0].color}
                    w={"440px"}
                    h={"210px"}
                    borderRadius={"12px"}
                    marginTop={"36px"}
                    
                >
                    <P>#{ pokemons.id < 10 ? `0${pokemons.id}` : pokemons.id}</P>
                    <H2>{pokemonName}</H2>
                    <Flex paddingTop={"8px"} gap={"16px"}>
                        {pokemons.types?.map((type) => {
                            return <Image 
                                    position={'relative'}
                                    left={"18px"}
                                    top={"84px"}
                                    w={"89px"} 
                                    height={"31px"}
                                    key={type.type.name} 
                                    src={pokemonTypes[type.type.name]?.img} 
                                    alt='Type of pokemon'/>
                        })}
                    </Flex>
                    <Image
                        position={"absolute"}
                        w={"193px"}
                        h={"193px"}
                        right={"10px"}
                        bottom={"75px"}
                        src={pokemonsImage}
                        alt="Pokemon Image"
                     />
                     <Link
                        position={"absolute"}
                        left={"32px"}
                        bottom={"26px"}
                        fontFamily={"Poppins" || "sans-serif"}
                        color={"white"}
                        textDecoration={"underline"}
                     >Detalhes</Link>
                     <Button 
                        position={"absolute"}
                        bottom={"20px"}
                        right={"32px"}
                        w={"146px"}
                        h={"38px"}
                        borderRadius={"8px"}
                     >Capturar!</Button>
                </Flex>
        </>
    )
}