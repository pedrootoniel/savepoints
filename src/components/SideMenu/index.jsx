import React from 'react'

import { Container, Span, Input, TextArea, Button } from './styles'

function SideMenu() {
  return(
      <Container>
        <Span>Adicionar Local</Span>
        <Input placeholder='Local' />
        <Input placeholder='Latitude' />
        <Input placeholder='Logintude' />
        <Input placeholder='Imagem' />
        <TextArea placeholder='Orientação para imunização' />
        <Button>Adicionar</Button>
      </Container>
  )
}

export default SideMenu