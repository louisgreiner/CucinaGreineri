import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
    padding: 50px 100px 50px 0;

    img{
        height: 150px;
        width: 150px;
        border-radius: 100%;
        border: 1px solid rgba(0,0,0,0,1);
    }

    h1 {
        font-size: 30px;
    }
`

const TotalComments = styled.div `
    font-size: 18px;
    padding: 10px 0;
`

const Time = styled.div `
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
`

const Header = (props) => {
    const {name, image_url, preparation_time, cooking_time} = props.attributes

    return (
        <Wrapper>
            <h1> <img src={image_url} alt={name} />{name}</h1>
            <TotalComments>{props.attributes.comments.length} commentaire(s)</TotalComments>
            <Time>Préparation: {preparation_time}min</Time>
            <Time>Cuisson: {cooking_time}min</Time>
            <Time>Total: {preparation_time + cooking_time}min</Time>
        </Wrapper>
    )
}

export default Header