import React, { Component } from 'react'
import styled from 'styled-components'

const SelecioneValor = () => {
    return <section className='label_valor'>
    <LabelPeriodicidade>
      <select>
        <option value="unica">Única</option>
        <option value="mensal">Mensal</option>
        <option value="semestral">Semestral</option>
        <option value="anual">Anual</option>
      </select>
    </LabelPeriodicidade>
    <LabelValor>
      <InputValor type="text" placeholder='R$ 30,00' /><br />
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