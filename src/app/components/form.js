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
    const { value } = this.state;
    const { name } = this.state;
    const { lastName } = this.state;
    const { email } = this.state;
    const { cpf } = this.state;
    const { card } = this.state;
    const { cvv } = this.state;
    const { date } = this.state;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexNumber = /^[0-9]*$/;
    if (value === '0' || value < 15 || value === '' ) {
      this.setState({ valueColor: 'red' });
    } else {
      this.setState({ valueColor: 'grey' });
    } if (name === '') {
      this.setState({ nameColor: 'red' });
    } else {
      this.setState({ nameColor: 'grey' });
    } if (lastName === '') {
      this.setState({ lastNameColor: 'red' });
    } else {
      this.setState({ lastNameColor: 'grey' });
    } if (email === '' || !regexEmail.test(email)) {
      this.setState({ emailColor: 'red' });
    } else {
      this.setState({ emailColor: 'grey' });
    } if (cpf === '' || !regexNumber.test(cpf) || cpf.length < 11) {
      this.setState({ cpfColor: 'red' });
    } else {
      this.setState({ cpfColor: 'grey' });
    } if (card === '' || !regexNumber.test(card) || card.length < 16) {
      this.setState({ cardColor: 'red' });
    } else {
      this.setState({ cardColor: 'grey' });
    }  if (cvv === '' || !regexNumber.test(cvv) || cvv.length < 3) {
      this.setState({ cvvColor: 'red' });
    } else {
      this.setState({ cvvColor: 'grey' });
    } if (date === '') {
      this.setState({ dateColor: 'red' });
    } else {
      this.setState({ dateColor: 'grey' });
    }

  }

  render() {

    return <form onSubmit={this.handleClick} className='formulario'>

      {/*section 1 */}
      <Title>Selecione um valor</Title>
      <SelecioneValor onValue={v => this.setState({ value: v })} onOption={v => this.setState({ periodicity: v })} onError={this.state.valueColor} />

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