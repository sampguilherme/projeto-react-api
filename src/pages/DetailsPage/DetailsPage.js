import React from "react";
import { useNavigate } from "react-router";
import { Div, H2 } from "./DetailsPageStyle";
import { goToHomePage } from "../../Router/coordinator";
import { Header } from "../../Components/Header/Header";

export const DetailsPage = () => {
    const navigate = useNavigate()
    return (
        <Div>
            <Header isOnDetailsPage={true}/>
            <H2>Datalhes</H2>
        </Div>
    )
}