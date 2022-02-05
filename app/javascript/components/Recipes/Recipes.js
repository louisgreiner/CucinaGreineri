import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Recipe from './Recipe'
import styled from 'styled-components'

const Home = styled.div`
    text-align:center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`

const Header = styled.div`
    padding: 100px 100px 10px 100px

    h1 {
        font-size: 42px;
    }
`

const Subheader = styled.div`
    font-weigth: 300;
    font-size; 26px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(()=> {
        axios.get('/api/v1/recipes.json')
        .then( response => setRecipes(response.data.data))
        .catch( response => console.log(response))
    }, [recipes.length]) // this array skip applying useEffect if recipes length hasn't changed

    const grid = recipes.map( item => {
        return (
            <Recipe 
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )
    })

    return(
        <Home>
            <Header>
                <h1>Cucina Greineri</h1>
                <Subheader>Bon sang ne saurait mentir...</Subheader>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Recipes