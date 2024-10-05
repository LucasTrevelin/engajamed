import React from 'react'
import * as S from './Header.styled'
import { Flex, Link } from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <S.Container>
      <Flex justifyContent='space-between' alignItems='center'>
        <S.Logo src='/images/logo_blue.jpg' alt='Logo' />
        <Flex justifyContent='flex-end' pr='10' columnGap={10}>
          <Link fontSize='xl'>Home</Link>
          <Link fontSize='xl'>Serviços</Link>
          <Link fontSize='xl'>Planos</Link>
        </Flex>
      </Flex>
    </S.Container>
  )
}

export default Header
