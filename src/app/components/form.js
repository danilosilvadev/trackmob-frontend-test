import React, { Component } from 'react';
import styled from 'styled-components';
import DadosPessoais from './form-components/dados-pessoais'
import DadosPagamento from './form-components/dados-pagamento'
import SelecioneValor from './form-components/selecione-valor'

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleValue = this.handleValue.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOption = this.handleOption.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  state = {
    value: '0',
    periodicity: '',
    name: '',
    lastName: '',
    email: '',
    card: '',
    validity: '',
    cpf: '',
    //border colors para validação
    valueColor: 'grey',
    nameColor: 'grey',
    lastNameColor: 'grey',
    emailColor: 'grey',
    cpfColor: 'grey',
    cardColor: 'grey',
    validityColor: 'grey'
  }

  handleClick(e) {
    e.preventDefault();
    const { value } = this.state;
    const { name } = this.state;
    const { lastName } = this.state;
    const { email } = this.state;
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (value === '0' || value < 15 || value === '') {
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
    } if (email === '' || !regex.test(email)) {
      this.setState({ emailColor: 'red' });
    } else {
      this.setState({ emailColor: 'grey' });
    }



  }

  handleOption(p) {
    this.setState({ periodicity: p });
  }

  handleValue(v) {
    this.setState({ value: v });
  }

  handleName(n) {
    this.setState({ name: n });
  }

  handleLastName(l) {
    this.setState({ lastName: l });
  }

  handleEmail(e) {
    this.setState({ email: e });
  }

  render() {

    return <form onSubmit={this.handleClick} className='formulario'>

      {/*area 1 */}
      <Title>Selecione um valor</Title>
      <SelecioneValor onValue={this.handleValue} onOption={this.handleOption} onError={this.state.valueColor} />

      {/*area 2 */}
      <br />
      <Title>Dados Pessoais</Title>
      <DadosPessoais onName={this.handleName} onLastName={this.handleLastName} onEmail={this.handleEmail}
        onErrorName={this.state.nameColor} onErrorLastName={this.state.lastNameColor}
        onErrorEmail={this.state.emailColor} />
      <br />

      {/*area 3 */}
      <Div><Title>Dados de pagamento</Title><Span>&#128274; Dados seguros</Span></Div>
      <DadosPagamento />
      <br />

      {/*area 4 */}
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