import React, { Component } from 'react'
import styled from 'styled-components'

const SelecioneValor = props => {

        return <section className='label_valor'>
            <LabelPeriodicidade>
                <select onChange={ v => props.onOption(v.target.value)}>
                    <option value="">Selecione</option>
                    <option value="única">Única</option>
                    <option value="mensais">Mensal</option>
                    <option value="semestrais">Semestral</option>
                    <option value="anuais">Anual</option>
                </select>
            </LabelPeriodicidade>
            <LabelValor>
                <InputValor type="number" placeholder='R$ 30,00' 
                onChange={v => props.onValue(v.target.value)} style={{border: `1px solid ${props.onError}`}}/><br />
                <span>Valor mínimo de R$ 15,00</span>
            </LabelValor>
        </section>
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