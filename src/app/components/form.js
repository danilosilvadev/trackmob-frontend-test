import React, { Component } from 'react';
import styled from 'styled-components';
import DadosPessoais from './form-components/dados-pessoais'
import DadosPagamento from './form-components/dados-pagamento'
import SelecioneValor from './form-components/selecione-valor'

export class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: ''
  }

  handleChange() {

  }

  handleSubmit() {

  }

  handleTests() {

  }

  render() {
    return (
      //colocar as sections em components diferentes e validar eles nos seus devidos componentos
      //depois disso enviar para form.js via props e assim para a API
      <form onSubmit={this.handleSubmit} className='formulario'>
        
        <Title>Selecione um valor</Title>
        <SelecioneValor />

        <br />
        <Title>Dados Pessoais</Title>
        <DadosPessoais />
        <br />

        <Div><Title>Dados de pagamento</Title><Span>&#128274; Dados seguros</Span></Div>
        <DadosPagamento />
        <br />

        <Valor> R$ 35,00 </Valor>
        <input type="submit" value="Confirmar doação" /><br /><br />
        <Checkbox>
        <input type="checkbox" /> 
        <CheckText>Aceito ser contatado para receber informações sobre a ong.</CheckText>
        </Checkbox>
      </form>
    )
  }
}


const Title = styled.header`
  font-size: 1rem;
  font-weight: bold;
`
const Div = styled.div`
  display: flex;
`
const Span = styled.span`
  font-size: .6rem;
  color: DimGrey;
  margin-left: 1rem;
  background-color: LightGrey;
  padding: .2rem;
`
const Checkbox = styled.label`
  margin-left: 8rem;
`
const Valor = styled.span`
  margin-right: 4rem;
`

const CheckText = styled.span`
  font-size: .6rem;
  color: DimGrey;
`


export default Form