import React from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
    <div>
        <PageHeader name='Tarefas x' small='Cadastro'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)