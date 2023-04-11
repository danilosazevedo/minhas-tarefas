import styled from 'styled-components'

export const Titulo = styled.h1`
  position: fixed;
  background-color: white;
  width: 13%;
`

export const Form = styled.form`
  width: 55%;
  border: dotted;
  border-width: 5px 4px;
  border-radius: px 40px;
  margin-top: 29px;
`

export const Input = styled.input`
  display: flex;
  margin: 8px;
  width: 90%;
  height: 3em;
  padding-left: 20px;
`
export const Marcador = styled.input`
  margin: 8px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
  margin-left: 16px;
`
export const BotaoCadastrar = styled.button`
  background-color: #ffeaa7;
  margin: 8px 120px;
  height: 3em;
  width: 20%;
  border-radius: 2em;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #fdcb6e;
  }
`
