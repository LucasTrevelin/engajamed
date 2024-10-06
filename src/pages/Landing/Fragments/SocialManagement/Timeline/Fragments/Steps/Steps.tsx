import React from 'react'
import * as S from './Steps.styled'
import { Flex, Text } from '@chakra-ui/react'
import { TSteps } from './Steps.types'

const Steps: React.FC<TSteps> = ({ steps }) => {
  return (
    <S.Container>
      {steps.map((step, index) => (
        <Flex
          key={step.number}
          position='relative'
          flexDirection='column'
          alignItems='center'
        >
          <S.NumberContainer
            border='2px solid'
            borderColor='brand.background_green_lighter'
          >
            <Text fontSize='xl'>{step.number}</Text>
          </S.NumberContainer>

          {index < steps.length - 1 && <S.Divider />}

          <S.BoxContainer
            background='brand.background_green'
            placement={index % 2 === 0 ? 'right' : 'left'}
          >
            <Text maxW='20rem'>
              <strong>{`${step.title}:`}</strong>
              <br /> {`${step.text}`}
            </Text>
          </S.BoxContainer>
        </Flex>
      ))}
    </S.Container>
  )
}

export default Steps
