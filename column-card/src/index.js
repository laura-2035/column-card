import React from 'react'
import ReactDOM from 'react-dom'

import Columns from './components/Columns'

const elemento = <h1>React</h1> 
//Nome do elemento que vai jogar todo conteúdo é root (por padrão)
ReactDOM.render(<Columns />, document.getElementById('root'))

