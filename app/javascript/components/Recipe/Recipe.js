import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import styled from "styled-components"

const Wrapper = styled.div `
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div `
    background: #fff;
    height: 100vh;
    overflox: scroll;

    &:last-child {
        background: #000;
    }
`

const Main = styled.div `
    left-padding: 50px;
`

const Recipe = props => {
    const [recipe, setRecipe] = useState({})
    const [comment,setComment] = useState({})
    const [loaded, setLoaded] = useState(false)

    props = useParams()

    useEffect(() => {
        const slug = props.slug
        const url = `/api/v1/recipes/${slug}`

        axios.get(url)
        .then( response => {
            setRecipe(response.data)
            setLoaded(true)
        })
        .catch( response => console.log(response) )
    }, [])

    return(
        <Wrapper>
            <Column>
                <Main>
                    {
                        loaded &&
                        <Header
                            attributes={recipe.data.attributes}
                        />
                    }
                    <div className='comments'></div>
                </Main>
            </Column>
            <Column>
                <div className='comment-form'>[Comment form goes here]</div>
            </Column>
        </Wrapper>
    )
}

export default Recipe