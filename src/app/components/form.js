import React, { Component } from 'react';
import styled from 'styled-components';
import DadosPessoais from './form-components/dados-pessoais'
import DadosPagamento from './form-components/dados-pagamento'
import SelecioneValor from './form-components/selecione-valor'

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {
    errorMessage: 'none',
    
    //fields
    value: '0',
    periodicity: '',
    name: '',
    lastName: '',
    email: '',
    card: '',
    cvv: '',
    date: '',
    cpf: '',

    //border colors para validação
    valueColor: 'grey',
    nameColor: 'grey',
    lastNameColor: 'grey',
    emailColor: 'grey',
    cpfColor: 'grey',
    cardColor: 'grey',
    cvvColor: 'grey',
    dateColor: 'grey'
  }

  handleClick(e) {
    e.preventDefault();
    const state = this.state;
    const { value } = state;
    const { name } = state;
    const { lastName } = state;
    const { email } = state;
    const { cpf } = state;
    const { card } = state;
    const { cvv } = state;
    const { date } = state;

    //regex para verificar validações
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexNumber = /^[0-9]*$/;

    //validações
    if (value === '0' || value < 15 || value === '' ) {
      this.setState({ valueColor: '#ff5151', errorMessage: 'block'});
    } else {
      this.setState({ valueColor: 'grey' });
    } if (name === '') {
      this.setState({ nameColor: '#ff5151', errorMessage: 'block' });
    } else {
      this.setState({ nameColor: 'grey' });
    } if (lastName === '') {
      this.setState({ lastNameColor: '#ff5151', errorMessage: 'block' });
    } else {
      this.setState({ lastNameColor: 'grey' });
    } if (email === '' || !regexEmail.test(email)) {
      this.setState({ emailColor: '#ff5151', errorMessage: 'block' });
    } else {
      this.setState({ emailColor: 'grey' });
    } if (cpf === '' || !regexNumber.test(cpf) || cpf.length < 11) {
      this.setState({ cpfColor: '#ff5151', errorMessage: 'block' });
    } else {
      this.setState({ cpfColor: 'grey' });
    } if (card === '' || !regexNumber.test(card) || card.length < 16) {
      this.setState({ cardColor: '#ff5151', errorMessage: 'block' });
    } else {
      this.setState({ cardColor: 'grey' });
    }  if (cvv === '' || !regexNumber.test(cvv) || cvv.length < 3) {
      this.setState({ cvvColor: '#ff5151', errorMessage: 'block' });
    } else {
      this.setState({ cvvColor: 'grey' });
    } if (date === '') {
      this.setState({ dateColor: '#ff5151', errorMessage: 'block' });
    } else {
      this.setState({ dateColor: 'grey' });
    } 
    
    //validação final
    if((state.valueColor && state.nameColor && state.lastNameColor && state.emailColor &&
          state.cardColor && state.cvvColor && state.cpfColor && state.dateColor) === 'grey'){
            this.setState({ errorMessage: 'none' });
            //pôr axious aqui
          }

  }

  render() {

    return <form onSubmit={this.handleClick} className='formulario'>

      {/*section 1 */}
      <Title>Selecione um valor</Title>
      <SelecioneValor onValue={v => this.setState({ value: v })} onOption={v => this.setState({ periodicity: v })} onError={this.state.valueColor} />

      {/*Error message */}
      <ErrorMessage style={{ display: this.state.errorMessage}}> &#x26A0; Corrija os campos abaixo</ErrorMessage>

      {/*section 2 */}
      <br />
      <Title>Dados Pessoais</Title>
      <DadosPessoais onName={v => this.setState({ name: v })} onLastName={v => this.setState({ lastName: v })} onEmail={v => this.setState({ email: v })}
        onErrorName={this.state.nameColor} onErrorLastName={this.state.lastNameColor}
        onErrorEmail={this.state.emailColor} />
      <br />

      {/*section 3 */}
      <Div><Title>Dados de pagamento</Title><Span>&#128274; Dados seguros</Span></Div>
      <DadosPagamento onCPF={v => this.setState({ cpf: v})} 
      onErrorCPF={this.state.cpfColor} onCard={v => this.setState({ card: v})} 
      onErrorCard={this.state.cardColor} onCVV={v => this.setState({ cvv: v})} 
      onErrorCVV={this.state.cvvColor} onDate={v => this.setState({ date: v})} 
      onErrorDate={this.state.dateColor}/>
      <br />

      {/*section 4 */}
      <Valor> R$ {this.state.value},00 {this.state.periodicity} </Valor>
      <input type="submit" value="Confirmar doação" /><br /><br />
      <Checkbox>
        <input type="checkbox" />
        <CheckText>Aceito ser contatado para receber informações sobre a ong.</CheckText>
      </Checkbox>
    </form>
  }
}

const ErrorMessage = styled.div`
  background-color: #ff5151;
  font-size: 1rem;
  color: white;
  margin-top: 1rem;
  padding: .5rem;
  border-radius: 2px;
`

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