import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { P, H2, DeleteButton } from "./CardStyle";
import { Flex, Image, Button, Link } from "@chakra-ui/react";
import { pokemonTypes } from "../../constants/types";
import pokeBola from "../../Assets/pokebola.svg"
import { Pokedex } from "../../pages/Pokedex/Pokedex";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useNavigate } from "react-router";
import { goToDetailsPage } from "../../Router/coordinator";
import { BASE_URL } from "../../constants/apiUrl";

export const PokemonCard = (props) => {

    const {pokemonName, inPokedex, removeFromPokedex} = props

    const navigate = useNavigate()

    const context = useContext(GlobalContext)
    const {addToPokedex} = context

    const [pokemons, setPokemons] = useState([])
    const [pokemonsImage, setPokemonsImage] = useState('')
    const [typeLocal, setTypeLocal] = useState([])

    const fetchPokemonName = async () => {
        try{
           const response = await axios.get(`${BASE_URL}/${pokemonName}`)
           setPokemons(response.data)
           setPokemonsImage(response.data.sprites.other['official-artwork']['front_default'])
           setTypeLocal([pokemonTypes[response.data.types[0].type.name], pokemonTypes[response.data.types[1]?.type.name]])
        } catch (error){
            console.log("Erro ao buscar lista de pokemons");
            console.log(error);
        }
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
                        onClick={() => goToDetailsPage(navigate, pokemonName)}
                        >Detalhes</Link>

                     {inPokedex ? <DeleteButton
                        onClick={() => removeFromPokedex(pokemons)}
                     >Excluir!</DeleteButton> 
                     
                     : 

                     <Button
                        fontFamily={"Inter, sans-serif"}
                        position={"absolute"}
                        bottom={"20px"}
                        right={"32px"}
                        w={"146px"}
                        h={"38px"}
                        borderRadius={"8px"}
                        onClick={() => addToPokedex(pokemons)}
                        >Capturar!</Button>
                     }
                     
                </Flex>
        </>
    )
}