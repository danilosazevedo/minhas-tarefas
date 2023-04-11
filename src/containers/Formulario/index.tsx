import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles/index'
import { Form, Opcoes } from './styles'

import { useDispatch } from 'react-redux'
import { useState, FormEvent } from 'react'

import * as enums from '../../utils/enums/Tarefas'
import { cadastrar } from '../../store/reducers/tarefas'
import Tarefa from '../../models/Tarefa'

import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(
      titulo,
      prioridade,
      enums.Status.PENDENTE,
      descricao,
      1
    )

    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE
      })
    )
    navigate('/')
  }
  return (
    <MainContainer>
      <Titulo>Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Titulo"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        />
        <Opcoes>
          <p>Prioridade</p>
          <input
            value={enums.Prioridade.URGENTE}
            name="prioridade"
            type="radio"
            onChange={(evento) =>
              setPrioridade(evento.target.value as enums.Prioridade)
            }
          />{' '}
          <label htmlFor="Urgente">Urgente</label>
          <input
            value={enums.Prioridade.IMPORTANTE}
            name="prioridade"
            type="radio"
            onChange={(evento) =>
              setPrioridade(evento.target.value as enums.Prioridade)
            }
          />
          <label htmlFor="Importante">Importante</label>
          <input
            value={enums.Prioridade.NORMAL}
            name="prioridade"
            type="radio"
            defaultChecked={prioridade === enums.Prioridade.NORMAL}
            onChange={(evento) =>
              setPrioridade(evento.target.value as enums.Prioridade)
            }
          />
          <label htmlFor="Normal">Normal</label>
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
