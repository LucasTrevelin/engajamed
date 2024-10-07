import React from 'react'
import * as S from './ActualScenario.styled'
import { Box, Image, Text } from '@chakra-ui/react'

const ActualScenario: React.FC = () => {
  return (
    <S.BackgroundContainer>
      <S.Container>
        <S.Title as='h1' textAlign='center' zIndex={4}>
          Compreendendo o atual cenário
        </S.Title>
        <Text
          fontSize='lg'
          color='white'
          maxW='43rem'
          textAlign='left'
          zIndex={4}
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
        <Box
          right='5rem'
          aspectRatio={0.66 / 1}
          width={60}
          borderRadius='10px'
          position='absolute'
          boxShadow='md'
          zIndex={2}
          opacity={0.7}
          background='brand.green_filter'
        />
        <Image
          src='/images/actual_scenario_2.jpg'
          left='5rem'
          aspectRatio={1.04 / 1}
          width={60}
          borderRadius='50%'
          position='absolute'
          boxShadow='md'
        />
        <Box
          left='5rem'
          aspectRatio={1.04 / 1}
          width={60}
          borderRadius='50%'
          position='absolute'
          boxShadow='md'
          zIndex={2}
          opacity={0.7}
          background='brand.green_filter'
        />
      </S.Container>
    </S.BackgroundContainer>
  )
}

export default ActualScenario
