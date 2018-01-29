import React, { Component } from 'react';
import styled from 'styled-components';
import DadosPessoais from './form-components/dados-pessoais'
import DadosPagamento from './form-components/dados-pagamento'
import SelecioneValor from './form-components/selecione-valor'
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  state = {

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
    accept_contact: 'false',

    //border colors para validação
    valueColor: 'grey',
    nameColor: 'grey',
    lastNameColor: 'grey',
    emailColor: 'grey',
    cpfColor: 'grey',
    cardColor: 'grey',
    cvvColor: 'grey',
    dateColor: 'grey',
    periodicityColor: 'grey'
  }

  errorMessage = {
    message: 'none'
  }

  handleClick(e) {
    e.preventDefault();

    const {
      value,
      name,
      lastName,
      email,
      cpf,
      card,
      cvv,
      date,
      periodicity } = this.state;

    const {
      valueColor,
      nameColor,
      lastNameColor,
      emailColor,
      cpfColor,
      cardColor,
      cvvColor,
      dateColor,
      periodicityColor
      } = this.state;

    //regex para validações
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexNumber = /^[0-9]*$/;

    //validações
    if (value === '0' || Number(value) < 15 || value === '' || !regexNumber.test(value)) {
      this.setState({ valueColor: '#ff5151' });
    } else {
      this.setState({ valueColor: 'grey' });
    } if (name === '') {
      this.setState({ nameColor: '#ff5151' });
    } else {
      this.setState({ nameColor: 'grey' });
    } if (lastName === '') {
      this.setState({ lastNameColor: '#ff5151' });
    } else {
      this.setState({ lastNameColor: 'grey' });
    } if (email === '' || !regexEmail.test(email)) {
      this.setState({ emailColor: '#ff5151' });
    } else {
      this.setState({ emailColor: 'grey' });
    } if (cpf === '' || !regexNumber.test(cpf) || cpf.length < 11) {
      this.setState({ cpfColor: '#ff5151' });
    } else {
      this.setState({ cpfColor: 'grey' });
    } if (card === '' || !regexNumber.test(card) || card.length < 16) {
      this.setState({ cardColor: '#ff5151' });
    } else {
      this.setState({ cardColor: 'grey' });
    } if (cvv === '' || !regexNumber.test(cvv) || cvv.length < 3) {
      this.setState({ cvvColor: '#ff5151' });
    } else {
      this.setState({ cvvColor: 'grey' });
    } if (date === '') {
      this.setState({ dateColor: '#ff5151' });
    } else {
      this.setState({ dateColor: 'grey' });
    } if (periodicity === '') {
      this.setState({ periodicityColor: '#ff5151' });
    } else {
      this.setState({ periodicityColor: 'grey' });
    }

    if ((valueColor && nameColor && lastNameColor && emailColor
      && cardColor && cvvColor && cpfColor
      && dateColor && periodicityColor) === 'grey') {
      console.log('dentro'); this.errorMessage.message = 'none'; //this.handleSubmit();
    } else {
      console.log('fora'); this.errorMessage.message = 'block';
    }
  }

  handleSubmit() {
    axios({
      method: 'post',
      url: 'https://trackmob-frontend-test.firebaseio.com/RdMa77REkLXsh9ec0WcWNbff1dw2/danilosilvadev/donors.json',
      data: {
        frequency: this.state.periodicity,
        value: this.state.value,
        first_name: this.state.name,
        last_name: this.state.lastName,
        complete_name: (this.state.name + this.state.lastName),
        email: this.state.email,
        document: this.state.cpf,
        card_number: this.state.card,
        cvv: this.state.cvv,
        validity: this.state.validity,
        accept_contact: this.state.accept_contact
      }
    }).then((res) => {
      console.log('deu certo');
    }).catch((err) => {
      console.log(err);

    });
  }

  render() {

    return <form onSubmit={this.handleClick} className='formulario'>

      {/*section 1 */}
      <Title>Selecione um valor</Title>
      <SelecioneValor onValue={v => this.setState({ value: v })} onOption={v => this.setState({ periodicity: v })}
        onErrorValue={this.state.valueColor} onErrorOption={this.state.periodicityColor} />

      {/*Error message */}
      <ErrorMessage style={{ display: this.errorMessage.message }}> &#x26A0; Corrija os campos abaixo</ErrorMessage>

      {/*section 2 */}
      <br />
      <Title>Dados Pessoais</Title>
      <DadosPessoais onName={v => this.setState({ name: v })} onLastName={v => this.setState({ lastName: v })} onEmail={v => this.setState({ email: v })}
        onErrorName={this.state.nameColor} onErrorLastName={this.state.lastNameColor}
        onErrorEmail={this.state.emailColor} />
      <br />

      {/*section 3 */}
      <Div><Title>Dados de pagamento</Title><Span>&#128274; Dados seguros</Span></Div>
      <DadosPagamento onCPF={v => this.setState({ cpf: v })}
        onErrorCPF={this.state.cpfColor} onCard={v => this.setState({ card: v })}
        onErrorCard={this.state.cardColor} onCVV={v => this.setState({ cvv: v })}
        onErrorCVV={this.state.cvvColor} onDate={v => this.setState({ date: v })}
        onErrorDate={this.state.dateColor} />
      <br />

      {/*section 4 */}
      <Confirmar>
        <Valor> R$ {this.state.value},00 {this.state.periodicity} </Valor>
        <ConfirmarButton type="submit">Confirmar doação</ConfirmarButton><br /><br />
      </Confirmar>
      <Checkbox>
        <input type="checkbox" onClick={v => this.setState({ accept_contact: 'true' })} />
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
  text-align: left;
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
  display: flex;
  margin-left: 7.9rem;
`
const Valor = styled.span`
  font-size: .8rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  width: 8rem;
`

const CheckText = styled.span`
  font-size: .6rem;
  color: DimGrey;
`

const ConfirmarButton = styled.button`
  background-color: #ff9900;
  color: white;
  padding: .5rem;
  border-radius: 2px;
  font-size: .9rem;
  font-weight: bold;
  border: none;
`
const Confirmar = styled.div`
  display: flex;
  align-items: center;
`

export default Form