import React from 'react'
import * as S from './ActualScenario.styled'
import { Image, Text } from '@chakra-ui/react'

const ActualScenario: React.FC = () => {
  return (
    <S.BackgroundContainer>
      <S.Container>
        <S.Title as='h1' textAlign='center' zIndex={2}>
          Compreendendo o atual cenário
        </S.Title>
        <Text
          fontSize='lg'
          color='white'
          maxW='43rem'
          textAlign='left'
          zIndex={2}
        >
          As redes sociais são vitais para qualquer negócio, mas navegar por
          algoritmos, conteúdo visual e interações exige estratégia. Assim, o
          objetivo é oferecer uma visão especializada para posicionar seu
          consultório ou clinica onde ela merece estar.
        </Text>
        <Image
          src='/images/actual_scenario_1.jpg'
          right='5rem'
          aspectRatio={0.66 / 1}
          width={60}
          borderRadius='10px'
          position='absolute'
          boxShadow='md'
        />
        <Image
          src='/images/actual_scenario_2.png'
          left='5rem'
          aspectRatio={1.04 / 1}
          width={60}
          borderRadius='10px'
          position='absolute'
          boxShadow='md'
        />
      </S.Container>
    </S.BackgroundContainer>
  )
}

export default ActualScenario
