import React, { Component } from 'react'
import styled from 'styled-components'

class SelecioneValor extends Component {
    constructor(props) {
        super(props);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleChangeOption = this.handleChangeOption.bind(this);
    }
    state = {
        valueMoney: '',
        periodicity: ''
    }

    handleChangeValue(e){
        e.preventDefault();
        const value = e.target.value;
        this.setState({valueMoney: value});
        this.props.onValue(value);
    }

    handleChangeOption(e){
        e.preventDefault();
        const option = e.target.value;
        this.setState({periodicity: option});
        this.props.onOption(option);


    }

    render() {
        return <section className='label_valor'>
            <LabelPeriodicidade>
                <select onChange={this.handleChangeOption}>
                    <option value="">Selecione</option>
                    <option value="única">Única</option>
                    <option value="mensais">Mensal</option>
                    <option value="semestrais">Semestral</option>
                    <option value="anuais">Anual</option>
                </select>
            </LabelPeriodicidade>
            <LabelValor>
                <InputValor type="number" placeholder='R$ 30,00' onChange={this.handleChangeValue} /><br />
                <span>Valor mínimo de R$ 15,00</span>
            </LabelValor>
        </section>
    }
}
const LabelPeriodicidade = styled.label`
  width 7rem;
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
  flex-grow: 2;
`
export default SelecioneValor