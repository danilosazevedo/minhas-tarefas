import { MainContainer } from '../../styles'
import * as S from '../Cadastro/styles'

const Cadastrar = () => (
  <MainContainer>
    <S.Titulo>Novo Contato</S.Titulo>
    <S.Form>
      <S.Input type="text" placeholder="Nome" />
      <S.Input type="number" placeholder="Telefone" />
      <S.Input type="email" placeholder="Email" />
      <S.Marcador type="checkbox" /> Família
      <S.Marcador type="checkbox" /> Amigos
      <S.Marcador type="checkbox" /> Trabalho
      <S.BotaoCadastrar>Cadastrar</S.BotaoCadastrar>
    </S.Form>
  </MainContainer>
)

export default Cadastrar
