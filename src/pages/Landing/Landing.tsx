import React from 'react'
import * as S from './Landing.styled'
import { Flex } from '@chakra-ui/react'
import { Header } from './Fragments/Header'
import { Presentation } from './Fragments/Presentation'
import { Section } from './Fragments/Section'
import { BaseboardSection } from './Fragments/BaseboardSection'

const Landing: React.FC = () => {
  return (
    <Flex flexDirection='column'>
      <S.LandingContainer>
        <Header />
        <Section
          margin={'12rem 0 0 0'}
          padding={'2rem 0 0 0'}
          alignItems='center'
        >
          <Presentation />
          <BaseboardSection />
        </Section>
      </S.LandingContainer>
    </Flex>
  )
}

export default Landing
