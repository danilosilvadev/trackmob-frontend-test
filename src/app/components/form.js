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
  }
  state = {
    value: '0',
    periodicity: '',
    //border colors para validação
    valueColor: 'grey',
    nameColor: 'grey',
    lastNameColor: 'grey',
    emailColor: 'grey',
    CPFColor: 'grey',
    cartaoColor: 'grey',
    validadeColor: 'grey'
  }

  handleChange() {

  }

  handleClick(e) {
    e.preventDefault();
    const color = this.state.valueColor;
    if (this.state.value === '0' || this.state.value < 15 || this.state.value === '') {
      this.setState({valueColor: 'red'});
    } else {
      this.setState({valueColor: 'grey'});
    }

    console.log(color);
  }

  handleOption(p) {
    this.setState({ periodicity: p});
  }

  handleValue(v) {
    this.setState({ value: v});
  }

  render() {

    return <form onSubmit={this.handleClick} className='formulario'>

      {/*area 1 */}
      <Title>Selecione um valor</Title>
      <SelecioneValor onValue={this.handleValue} onOption={this.handleOption} />
      {/*area 2 */}
      <br />
      <Title>Dados Pessoais</Title>
      <DadosPessoais />
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