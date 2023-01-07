import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { DivPrincipal, H2, Div, P, PokemonName, BaseStats } from "./DetailsPageStyle";
import { Header } from "../../Components/Header/Header";
import { Box, Flex, Image, Text, Progress } from "@chakra-ui/react";
import pokeBola from "../../Assets/pokebolaMaior.svg"
import { GlobalContext } from "../../contexts/GlobalContext";
import { pokemonTypes } from "../../constants/types";


export const DetailsPage = () => {
    const navigate = useNavigate()

    const params = useParams()
    const {
        pokemons, 
        fetchPokemonName,
        typeLocal,
        pokemonsImage
    } = useContext(GlobalContext)

    const pokemonName = params.pokemonName

    console.log(pokemons)

    useEffect(() => {
        fetchPokemonName(pokemonName)
    
      }, [])

    return (
        <DivPrincipal>
            <Header isOnDetailsPage={true}/>
            <Div>
                <Flex
                    position={"relative"}
                    justifyContent={"center"}
                    bgColor={typeLocal[0] && typeLocal[0].color}
                    w={"1390px"}
                    h={"663px"}
                    borderRadius={"38px"}
                    bgImage={pokeBola }
                    bgRepeat={"no-repeat"}
                    bgPosition={"right"} 
                >
                    <Box
                        display={"flex"}
                        position={"absolute"}
                        w={"282px"}
                        h={"282px"}
                        bgColor={"white"}
                        left={"44px"}
                        top={"26px"}
                        borderRadius={"8px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Image 
                            src={pokemons.sprites?.front_default}
                            position={"absolute"}
                            w={"250px"}
                            h={"250px"}
                        />
                    </Box>
                    <Box
                        display={"flex"}
                        position={"absolute"}
                        w={"282px"}
                        h={"282px"}
                        bgColor={"white"}
                        left={"44px"}
                        top={"355px"}
                        borderRadius={"8px"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <Image 
                            src={pokemons.sprites?.back_default}
                            position={"absolute"}
                            w={"250px"}
                            h={"250px"}
                        />
                    </Box>
                    <Box // Base stats
                        display={"flex"}
                        flexDirection={"column"}
                        position={"absolute"}
                        bgColor={"white"}
                        w={"343px"}
                        height={"613px"}
                        top={"24px"}
                        left={"360px"}
                        borderRadius={"12px"}
                        
                    >
                        <BaseStats>Base Stats</BaseStats>
                        <Flex
                            flexDirection={"column"}
                            marginTop={"60px"}
                            alignItems={"center"}
                        >
                            {pokemons.stats && pokemons.stats.map((stat) => {
                                return (
                                    <Flex 
                                        w={"300px"}
                                        key={stat.stat.name}
                                        borderBottom={"1px solid #D9DDDC"}
                                        alignItems={"center"}
                                    >
                                    <Flex>
                                        <Text 
                                            width={"60px"}
                                            position={"relative"}
                                            
                                            marginLeft={"8px"}
                                            textTransform={"capitalize"}
                                            textAlign={"end"}
                                            
                                        >
                                            {stat.stat.name.replace("special-attack", "Sp. Atk").replace("special-defense", "Sp. Def").replace("hp", "HP")}
                                        </Text>
                                        <Text
                                            marginLeft={"10px"}
                                        >
                                            {stat.base_stat}
                                        </Text>
                                        

                                    </Flex> 
                                    <Progress
                                        marginLeft={"10px"}
                                        w={"200px"}
                                        
                                        colorScheme={stat.base_stat <= 49 ? "orange" : stat.base_stat <= 69 ? "yellow" : "green"}
                                        value={(stat.base_stat)}
                                />
                                </Flex>
                                )
                            })}
                            </Flex>
                                {pokemons.stats && 
                                    <Flex 
                                        gap={"10px"}
                                        marginLeft={"34px"}
                                    >
                                        <Text>Total</Text>
                                        <Text fontWeight={"bold"}>{pokemons.stats.reduce((acc, stat) => acc + stat.base_stat, 0)}</Text>
                                    </Flex>
                                }
                            
                    </Box>
                    <P>#{ pokemons.id < 10 ? `0${pokemons.id}` : pokemons.id}</P>
                    <PokemonName>{pokemonName}</PokemonName>
                    {pokemons.types?.map((type) => {
                            return <Image 
                                    position={'relative'}
                                    left={"165px"}
                                    top={"90px"}
                                    w={"89px"} 
                                    height={"31px"}
                                    key={type.type.name} 
                                    src={pokemonTypes[type.type.name]?.img} 
                                    alt='Type of pokemon'/>
                        })}
                    <Box
                        bgColor={"white"}
                        position={"absolute"}
                        w={"292px"}
                        h={"453px"}
                        left={"771"}
                        top={"184px"}
                        borderRadius={"8px"}
                    >
                        <BaseStats>Moves:</BaseStats>
                        <Flex
                            flexDirection={"column"}
                            marginTop={"60px"}
                            gap={"10px"}
                        >
                            {pokemons.moves 
                                && pokemons.moves.filter((moves, indice) => indice < 4)
                                .map((move) =>
                                        <Box
                                            display={"flex"}
                                            justifyContent={"center"}
                                            alignItems={"center"}
                                            marginLeft={"30px"}
                                            w={"120px"}
                                            h={"37px"}
                                            bgColor={"#ECECEC"}
                                            border={"1px dashed rgba(0, 0, 0, 0.14)"}
                                            borderRadius={"12px"}
                                        >
                                            <Text
                                                textTransform={"capitalize"}
                                            >{(move.move.name).replace("-", " ")}</Text>
                                        </Box>
                                )
                            }
                        </Flex>
                    </Box>
                    <Image
                        position={"absolute"}
                        w={"270px"}
                        h={"270px"}
                        left={"1109px"}
                        bottom={"480px"}
                        src={pokemonsImage}
                        alt="Pokemon Image"
                        />
                </Flex>
            </Div>
        </DivPrincipal>
    )
}