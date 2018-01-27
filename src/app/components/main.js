//Principal conteúdo da página

import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './form'

const Title = styled.h2`
    color: #039be5;
`

const Article = styled.article`
    font-size: .9rem;
    color: grey;
`

const Main = () => {
    return <main className='main' >
        <section className='banner_textos'>
            <Title>Thank's for your support!</Title>
            <Article>
                Vivamus eget enim at mi ultrices luctus.
                Proin nec urna vitae ipsum bibendum tincidunt
                in nec nunc. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus
                mus.
                </Article>
            <Form />
        </section>
    </main>;
}

export default Main