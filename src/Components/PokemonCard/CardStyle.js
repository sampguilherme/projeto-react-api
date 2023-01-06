import styled from "styled-components";

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