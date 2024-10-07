import React from 'react'

import * as S from './Authors.styled'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'

const Authors: React.FC = () => {
  return (
    <S.BackgroundContainer>
      <S.Container>
        <S.PresentationContainer>
          <Heading fontSize='5xl' color='white'>
            Quem está por trás <br />
            da
          </Heading>
          <Image src='/images/logo_green.jpg' alt='engajamed-logo' />
        </S.PresentationContainer>
        <S.DescriptionContainer>
          <S.AuthorContainer top={0}>
            <S.PhotoFrame boxShadow={'dark-lg'}>
              <Image
                borderRadius='50%'
                src='/images/foto_diego.jpg'
                zIndex='4'
                width='90%'
                height='90%'
              />
            </S.PhotoFrame>
            <Flex
              flexDir='column'
              textAlign='left'
              justifyContent='center'
              alignItems='flex-start'
              maxW='18.75rem'
              rowGap={4}
            >
              <Text fontSize='lg'>
                Responsável pela elaboração e estratégia em marketing dentro da
                Engajamed.
              </Text>
              <Heading color='brand.background_blue' fontSize='lg'>
                Diego Serdan <br /> Gerente de Marketing
              </Heading>
            </Flex>
          </S.AuthorContainer>
          <S.AuthorContainer bottom={0}>
            <S.PhotoFrame boxShadow='dark-lg'>
              <Image
                borderRadius='50%'
                src='/images/foto_lucas.jpg'
                zIndex='4'
                width='90%'
                height='90%'
              />
            </S.PhotoFrame>
            <Flex
              flexDir='column'
              textAlign='left'
              justifyContent='center'
              alignItems='flex-start'
              maxW='18.75rem'
              rowGap={4}
            >
              <Text fontSize='lg'>
                Resposável pelo desenvolvimento e elaboração de Sites, landing
                page e aplicativos dentro da Engajamed.
              </Text>
              <Heading color='brand.background_blue' fontSize='lg'>
                Lucas Trevelin <br /> Desenvolvedor
              </Heading>
            </Flex>
          </S.AuthorContainer>
        </S.DescriptionContainer>
      </S.Container>
    </S.BackgroundContainer>
  )
}

export default Authors
