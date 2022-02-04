import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import CommentForm from './CommentForm'
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
    padding-left: 50px;
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

    const handleChange = (e) => {
        e.preventDefault()

        setComment(Object.assign({}, comment, {[e.target.name]: e.target.value}))

        console.log('comment:', comment)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
        
        const recipe_id = recipe.data.id
        axios.post('/api/v1/comments', {comment, recipe_id})
        .then(response => {
            debugger
            // const included = [...recipe.included, response.data.data]
            // setRecipe({...recipe, included})
            setComment({author: '', title: '', body: ''})
        })
        .catch(response => {})
    }

    return(
        <Wrapper>
            {
                loaded &&
                <Fragment>
                    <Column>
                        <Main>
                            <Header
                                attributes={recipe.data.attributes}
                            />
                            <div className='comments'></div>
                        </Main>
                    </Column>
                    <Column>
                        <CommentForm
                            handleChange = {handleChange}
                            handleSubmit = {handleSubmit}
                            attributes = {recipe.data.attributes}
                            comments = {recipe.data.attributes.comments}
                            />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}

export default Recipe