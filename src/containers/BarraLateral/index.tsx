import * as S from '../BarraLateral/styles'

const BarraLateral = () => (
  <S.BarraLateral>
    <h1>Contatos</h1>
    <S.BotaoNovo to="/Novo"> + Novo Contato</S.BotaoNovo>
    <h2>Filtros</h2>
    <S.BotaoFiltro>Todos (4)</S.BotaoFiltro>
    <S.BotaoFiltro>Família (4)</S.BotaoFiltro>
    <S.BotaoFiltro>Trabalho (4)</S.BotaoFiltro>
    <S.BotaoFiltro>Amigos (4)</S.BotaoFiltro>
  </S.BarraLateral>
)

export default BarraLateral
