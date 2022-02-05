import React from 'react'
import styled from 'styled-components'

const Field = styled.div`
    border-radius: 4px;

    input {
        min-height: 50px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 0 0 12px 0;
        padding: 12px;
        width: 95%;
    }

    textarea {
        width: 100%;
        min-height: 80px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 12px 0;
        padding: 12px;
    }
`

const Wrapper = styled.div`
    background: #fff;
    padding: 20px;
    background: #000;
    height: 100vh;
    padding-top: 100px;

`

const SubmitButton = styled.button`
    color: #fff;
    background: #333;
    border-radius: 4px;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #fff;
    width: 95%;
    margin-top: 20px;

    &:hover {
        background: #fff;
        color: #000;
        border: 1px solid #fff;
    }
`

const HeadLine = styled.div`
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`

const CommentForm = (props) => {
    return (
        <Wrapper>
            <form onSubmit={props.handleSubmit}>
                <HeadLine>Un avis sur la recette {props.attributes.name}? Ecris un commentaire !</HeadLine>
                <Field>
                    <input onChange={props.handleChange} value={props.comment.author} type='text' name='author' placeholder='Auteur(e)'/>
                </Field>
                <Field>
                    <input onChange={props.handleChange} value={props.comment.title} type='text' name='title' placeholder='Titre'/>
                </Field>
                <Field>
                    <input onChange={props.handleChange} value={props.comment.body} type='text' name='body' placeholder='Commentaire'/>
                </Field>
                <SubmitButton type='submit'>Envoyer le commentaire</SubmitButton>
            </form>
        </Wrapper>
    )
}

export default CommentForm