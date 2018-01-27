import React, { Component } from 'react';
import styled from 'styled-components';


const LabelPeriodicidade = styled.label`
  width 7rem;
`

const Title = styled.header`
  font-size: 1rem;
  font-weight: bold;
`

const InputValor = styled.input`
  width: 99%;
`

const LabelValor = styled.div`
  background-color: #f5f5f5;
  padding: .4rem;
  font-size: .7rem;
  color: grey;
  margin-left: 1rem;
  flex-grow: 150;
`
const Span = styled.span`
  font-size: .7rem;
  color: grey;
  flex-grow: 1;
`
const LabelNome = styled.label`
  margin-left: 3%;
  width: 30%;
  width: 100%;
  flex-grow: 10;
`

const Asteristico = styled.span`
  color: red;
`

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
        <section className='label_valor'>
          <LabelPeriodicidade>
            <select>
              <option value="unica">Única</option>
              <option value="mensal">Mensal</option>
              <option value="semestral">Semestral</option>
              <option value="anual">Anual</option>
            </select>
          </LabelPeriodicidade>
          <LabelValor>
              <InputValor type="text" onChange={this.handleChange} placeholder='R$ 30,00' /><br />
              <span>Valor mínimo de R$ 15,00</span>
          </LabelValor>
        </section>
        
        <br />

        <Title>Dados Pessoais</Title>
        <section className='dados_pessoais' className='border'>
        <Span>Nome completo:</Span><Asteristico>*</Asteristico>
          <LabelNome>
            <input type="text" onChange={this.handleChange} placeholder='Primeiro Nome' />
          </LabelNome>
          <LabelNome>
            <input type="text" onChange={this.handleChange} placeholder='Sobrenome' /><br />
          </LabelNome>
          <Span>Email:</Span><Asteristico>*</Asteristico>
          <LabelNome>
            <input type="text" onChange={this.handleChange} placeholder='Email' />
          </LabelNome>
        </section>

        <br />

        <Title>Dados de pagamento</Title>
        <section className='dados_pessoais' className='border'>
        <Span>CPF</Span><Asteristico>*</Asteristico>
          <LabelNome>
            <input type="text" onChange={this.handleChange} placeholder='Primeiro Nome' />
          </LabelNome>
          <Span>Número de cartão</Span>
          <LabelNome>
            <input type="text" onChange={this.handleChange} placeholder='Sobrenome' /><br />
          </LabelNome>
          <Span>Validade do cartão</Span><Asteristico>*</Asteristico>
          <LabelNome>
            <input type="text" onChange={this.handleChange} placeholder='Email' />
          </LabelNome>
        </section>

      </form>
    )
  }
}

export default Form