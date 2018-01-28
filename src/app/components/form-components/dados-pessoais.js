import React, { Component } from 'react'
import styled from 'styled-components';


const DadosPessoais = () => {
    return <Dados className='border'>
        <Nome>
            <FieldTitle>
                <span className='titulo_dado'>Nome completo:<span className='asteristico'>*</span></span>
            </FieldTitle>
            <NomeFields>
                <LNome>
                    <InputNome type="text" placeholder='Primeiro Nome' />
                </LNome>
                <LSobrenome>
                    <InputSobrenome type="text" placeholder='Sobrenome' />
                </LSobrenome>
            </NomeFields>
        </Nome>
        <Email>
            <FieldTitle>
                <span className='titulo_dado'>Email:<span className='asteristico'>*</span></span>
            </FieldTitle>
            <LEmail>
                <InputEmail type="text" placeholder='Email' />
            </LEmail>
        </Email>
    </Dados>
}

//geral
const Dados = styled.section`
  margin-top: 1rem;
`

const FieldTitle = styled.div`
    display: flex;
    margin-right: 2rem;
`

//nome e sobrenome
const Nome = styled.div`
  display: flex;
  justify-content: space-between;
`

const NomeFields = styled.div`
  display: flex;
  flex-grow: 2;
`

const InputNome = styled.input`
    width: 95%;
`

const InputSobrenome = styled.input`
    width: 100%;
`

const LNome = styled.label`
    flex-grow: 1;
`

const LSobrenome = styled.label`
    flex-grow: 1;
`

//email
const Email = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
const LEmail = styled.label`
    flex-grow: 2;
    margin-left: 3.6rem;
`
const InputEmail = styled.input`
    width: 100%;
`

export default DadosPessoais