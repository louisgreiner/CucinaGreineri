import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`

const RecipeLogo = styled.div`
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img {
        height: 200px;
        width: 200px;
        border-radius: 100%
        border: 1px solid #efefef;
    }
`

const RecipeName = styled.div`
    padding: 20px 0 10px 0;
`

const RecipeAuthor = styled.div`
    padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const Recipe = (props) => {
    return (
        <Card>
            <RecipeLogo>
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </RecipeLogo>
            <RecipeName>
                {props.attributes.name}
            </RecipeName>
            <RecipeAuthor>
                {props.attributes.author}
            </RecipeAuthor>
            <LinkWrapper>
                <Link to={`/recipes/${props.attributes.slug}`}>Voir la recette</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Recipe