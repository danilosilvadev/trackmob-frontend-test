import React, { Component } from 'react'
import styled from 'styled-components';

const DadosPagamento = () => {
    return <section className='dados_pessoais' className='border'>
        <CPF>
            <span className='titulo_dado'>CPF:<span className='asteristico'>*</span></span>
            <LCPF>
                <input type="text" placeholder='000.000.000-00' name="cpf" maxLength="11" />
            </LCPF>
        </CPF>
        <Card>
            <TitleField className='titulo_dado'>Número de cartão:<span className='asteristico'>*</span></TitleField>
            <label>
                <input type="text" placeholder='0000 0000 0000 0000' name="cartao" maxLength="16" /><br />
            </label>
            <label>
                <InputCVV type="text" placeholder='cvv' name="cvv" maxLength="3" /><br />
            </label>
        </Card>
        <Validity>
            <span className='titulo_dado'>Validade do cartão:<span className='asteristico'>*</span></span>
            <label>
                <InputDate type="date" placeholder='00/00/00' />
            </label>
        </Validity>
    </section>
}

const CPF = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
const LCPF = styled.label`
    margin-left: 6.3rem;
`

const Card = styled.div`
    display: flex;
`

const LNumber = styled.div`
    margin-left: 1.2rem;
    margin-right: 1rem;
`

const InputCVV = styled.input`
    width: 40%;
    margin-left: 1rem;
`

const TitleField = styled.span`
    margin-right: 1.2rem;
`
const Validity = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
`
const InputDate = styled.input`
    margin-left: 1rem;
`
export default DadosPagamento