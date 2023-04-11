import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoNovo = styled(Link)`
  display: flex;
  justify-content: center;
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;
  height: 50px;
  width: 100%;
  align-items: center;
  margin: 25px 0 25px 0;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background-color: #a29bfe;
  }
`
export const BarraLateral = styled.aside`
  padding: 16px;
  background-color: #dfe6e9;
  height: 100vh;
`

export const BotaoFiltro = styled.button`
  display: flex;
  width: 100%;
  height: 25px;
  align-items: center;
  margin-top: 16px;
  margin-left: 10px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  border-radius: 10px 40px 40px 10px;
  text-align: start;
  background-color: transparent;
  font-weight: bold;

  &:hover {
    background-color: #a29bfe;
  }
`
