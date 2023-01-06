export const goToHomePage = (navigate) => {
    navigate('/')
}

export const goToPokedex = (navigate) => {
    navigate('/pokedex')
}

export const goToDetailsPage = (navigate, pokemonName) => navigate(`/pokemon/${pokemonName}`) 