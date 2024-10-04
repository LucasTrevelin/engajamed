import React from 'react'
import * as S from './Landing.styled'
import { Flex } from '@chakra-ui/react'
import { Header } from './Fragments/Header'
import { Presentation } from './Fragments/Presentation'
import { Section } from './Fragments/Section'
import { ActualScenario } from './Fragments/ActualScenario'

const Landing: React.FC = () => {
  return (
    <Flex flexDirection='column'>
      <S.LandingContainer>
        <Header />
        <Flex flexDirection='column' w='100%'>
          <Section
            margin={'12rem 0 0 0'}
            padding={'2rem 0 0 0'}
            alignItems='center'
          >
            <Presentation />
          </Section>
          <ActualScenario />
        </Flex>
      </S.LandingContainer>
    </Flex>
  )
}

export default Landing
