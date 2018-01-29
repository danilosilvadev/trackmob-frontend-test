import React, { Component } from 'react'
import styled from 'styled-components'

const Footer = () => {
    return <Container>
        <Contact>
            <Logo>Logo</Logo>
            <Info>
                <Title>Está com dúvidas?</Title>
                <span>Para capitais 0800 000 000</span>
                <span>Para outras localidades</span>
                <span>Por e-mail</span>
            </Info>
        </Contact>
        <CopyPowered>
            <span>Copyright 2017</span>
            <span>Powered by trackMob</span>
        </CopyPowered>
    </Container>
}

const Container = styled.div`
    background-color: #009ce8;
    display: flex;
    justify-content: space-between;
    text-align: left;
    font-size: .7rem;
    color: white;
    align-items: center;
    padding: 1rem;
`

const Contact = styled.div`
    margin-left: 10rem;
    display: flex;
    align-items: center;
`
const Logo = styled.div`
    font-size: 2rem;
    margin-right: 1rem;

`

const Info = styled.div`
    display: flex;
    flex-direction: column;

`
const Title = styled.span`
    font-weight: bold;
`

const CopyPowered = styled.div`
    margin-right: 10rem;
    display: flex;
    flex-direction: column;
`

export default Footer