import React from 'react'
import * as S from './ActualScenario.styled'
import { Text } from '@chakra-ui/react'

const ActualScenario: React.FC = () => {
  return (
    <S.BackgroundContainer>
      <S.Container>
        <S.Title as='h1' textAlign='center'>
          Compreendendo o atual cenário
        </S.Title>
        <Text fontSize='lg' color='white' maxW='43rem' textAlign='left'>
          As redes sociais são vitais para qualquer negócio, mas navegar por
          algoritmos, conteúdo visual e interações exige estratégia. Assim, o
          objetivo é oferecer uma visão especializada para posicionar seu
          consultório ou clinica onde ela merece estar.
        </Text>
      </S.Container>
    </S.BackgroundContainer>
  )
}

export default ActualScenario
