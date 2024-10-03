import React from 'react'
import * as S from './Landing.styled'
import { Flex } from '@chakra-ui/react'
import { Header } from './Fragments/Header'

const Landing: React.FC = () => {
  return (
    <Flex flexDirection='column'>
      <S.LandingContainer>
        <Header />
      </S.LandingContainer>
    </Flex>
  )
}

export default Landing
