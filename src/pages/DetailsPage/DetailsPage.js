import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { DivPrincipal, H2 } from "./DetailsPageStyle";
import { Header } from "../../Components/Header/Header";
import { Box, Flex } from "@chakra-ui/layout";
import pokeBola from "../../Assets/pokebola.svg"
import { GlobalContext } from "../../contexts/GlobalContext";

export const DetailsPage = () => {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const {pokemons} = context

    

    return (
        <DivPrincipal>
            <Header isOnDetailsPage={true}/>
            <Flex
                position={"relative"}
                bgImage={pokeBola}
            >
                <Box>

                </Box>
            </Flex>
        </DivPrincipal>
    )
}