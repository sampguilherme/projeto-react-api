import styled from "styled-components";

export const PrincipalDiv = styled.div`
    
        @media (max-width: 468px){
            
            
            .cardPokemon {
                width: 320px;
                height: 160px;
                background-size: 200px;
            }

            .pokemonName{
                font-size: 16px;
            }

            .pokemonImage{
                width: 153px;
                height: 153px;
                right: 10px;
                bottom: 60px;
            }

            .pokemonType{
                left: 18px;
                top: 54px;
                width: 69px;
                height: 31px;
            }

        }
    
`

export const P = styled.p`
    position: absolute;
    left: 23px;
    top: 25px;
    font-family: 'Inter', sans-serif;
    color: white;
    font-size: 16px;
`

export const H2 = styled.h2`
    text-transform: capitalize;
    position: absolute;
    left: 23px;
    top: 40px;
    font-size: 32px;
    font-family: 'Inter', sans-serif;
    color: white;
`

export const Img = styled.img`
    display: flex;
    width: 99px;
   
    border: 1px solid black;
`

export const DeleteButton = styled.button`
    position:absolute;
    bottom:20px;
    right:32px;
    width:146px;
    height:38px;
    border-radius:8px;
    background-color:#FF6262;
    font-family: "Inter", sans-serif;
    color:white;
    &:hover{
        background-color: #F58787;
    }
`

export const Button = styled.button `
    font-family: Inter, sans-serif;
    position: absolute;
    bottom: 20px;
    right: 32px;
    width: 146px;
    height: 38px;
    border-radius: 8px;
`
