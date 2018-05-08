import React from 'react'
import { render } from 'react-dom'

const header = React.createElement('h1', {}, 'Lisa Bergman :: Pianist, Producer')

render(
  header,
  document.getElementById('root')
)
