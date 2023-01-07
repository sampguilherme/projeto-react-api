import React, { useContext, useState } from "react";
import Logo from "../../Assets/logo.svg"
import { Img, HeaderStyled, Div1, Div2, Div3, ButtonHeader, DeleteButton, P, A } from "./HeaderStyle";
import { goToPokedex, goToHomePage } from "../../Router/coordinator";
import { useLocation, useNavigate, useParams } from "react-router";
import { GlobalContext } from "../../contexts/GlobalContext";

export const Header = (props) => {

    const location = useLocation()
    const params = useParams()

    const {pokedex, addToPokedex, pokemons, removeFromPokedex} = useContext(GlobalContext)

    const pokedexStringfy = JSON.stringify(pokedex)

    const {
            isOnDetailsPage,
            isOnHomePage,
            isOnPokedexPage
          } = props

        const headerButtons = () =>{
            switch(location.pathname){
                case `/pokemon/${params.pokemonName}`:
                    return (
                        <>
                            {pokedexStringfy.includes(`"${params.pokemonName}"`) ?
                                <DeleteButton onClick={() => removeFromPokedex(pokemons)}>Excluir da Pokedex</DeleteButton> :
                                <ButtonHeader onClick={() => addToPokedex(pokemons)}>Capturar!</ButtonHeader>
                            }
                        </>
                    )
            }
        }

        
        
        

    const navigate = useNavigate()
    return(
        <HeaderStyled>
            <Div1>
                {
                    isOnPokedexPage
                    && <A onClick={() => goToHomePage(navigate)}>{"<"}<P> Todos Pokémons</P></A>
                }
                {
                    isOnDetailsPage
                    && <A onClick={() => goToHomePage(navigate)}>{"<"}<P> Todos Pokémons</P></A>
                }
            </Div1>

            <Div2>
                <Img src={Logo}/>
            </Div2>

            <Div3>
                {
                    isOnHomePage 
                    && <ButtonHeader onClick={() => goToPokedex(navigate)}>Pokédex</ButtonHeader>
                }
                {
                    isOnDetailsPage
                    && headerButtons()
                }
            </Div3>
        </HeaderStyled>
    )
}