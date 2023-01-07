import React from "react";
import Logo from "../../Assets/logo.svg"
import { Img, HeaderStyled, Div1, Div2, Div3, ButtonFromPokedex, DeleteButton, P, A } from "./HeaderStyle";
import { goToPokedex, goToHomePage } from "../../Router/coordinator";
import { useLocation, useNavigate, useParams } from "react-router";

export const Header = (props) => {

    const location = useLocation()
    const params = useParams()

    const {
            isOnDetailsPage,
            isOnHomePage,
            isOnPokedexPage
          } = props


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
                    && <ButtonFromPokedex onClick={() => goToPokedex(navigate)}>Pokédex</ButtonFromPokedex>
                }
                {
                    isOnDetailsPage
                    && <DeleteButton>Excluir da Pokedex</DeleteButton>
                }
            </Div3>
        </HeaderStyled>
    )
}