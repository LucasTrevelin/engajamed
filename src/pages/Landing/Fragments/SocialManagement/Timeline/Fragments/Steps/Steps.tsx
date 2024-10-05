import React from 'react'
import * as S from './Steps.styled'
import { Divider, Flex, Text } from '@chakra-ui/react'
import { TSteps } from './Steps.types'

const Steps: React.FC<TSteps> = ({ steps }) => {
  return (
    <S.Container>
      {steps.map((step) => (
        <Flex key={step.number} alignItems={'flex-start'}>
          {step.placement === 'left' && (
            <>
              <S.BoxContainer background='brand.background_green'>
                <Text maxW={'300px'}>
                  <strong>{`${step.title}:`}</strong>
                  <br /> {`${step.text}`}
                </Text>
              </S.BoxContainer>
              <S.NumberContainer
                border='2px solid'
                borderColor='brand.background_green_lighter'
              >
                <Text fontSize='2xl'>{step.number}</Text>
              </S.NumberContainer>
            </>
          )}
          {step.placement === 'right' && (
            <>
              <S.NumberContainer
                border='2px solid'
                borderColor='brand.background_green_lighter'
              >
                <Text fontSize='2xl'>{step.number}</Text>
              </S.NumberContainer>
              <S.BoxContainer background='brand.background_green'>
                <Text maxW={'300px'}>
                  <strong>{`${step.title}:`}</strong>
                  <br /> {`${step.text}`}
                </Text>
              </S.BoxContainer>
            </>
          )}
          <Divider
            orientation='vertical'
            opacity={1}
            height='3rem'
            border='1px solid black'
          />
        </Flex>
      ))}
    </S.Container>
  )
}

export default Steps
