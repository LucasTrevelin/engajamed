import React from 'react'
import * as S from './Presentation.styled'
import { Flex, Image, Text } from '@chakra-ui/react'
import { LogoBubbles } from './Fragments/LogoBubbles'
import { BaseboardSection } from '../BaseboardSection'

const Presentation: React.FC = () => {
  return (
    <Flex flexDirection='column' w='100%' h='100%'>
      <S.Container>
        <LogoBubbles />
        <S.ContentContainer>
          <S.Title as='h1' fontSize='4xl' textAlign='center'>
            Sem tempo para redes sociais <br /> e ao tráfego pago?
          </S.Title>
          <Text
            fontSize='lg'
            color='brand.subtitle'
            maxW='32rem'
            textAlign='left'
          >
            Nós somos a Engajamed, uma empresa especializada em marketing da
            area médica dedicada a ajudar Médicos a se destacarem no mundo
            digital
          </Text>
          <Flex mt='4' w='100%' justifyContent='center' columnGap='5rem'>
            <S.PresentationButton size='lg' background='white'>
              <Image src='/images/whatsapp-icon-blue.jpg' alt='whatsapp-icon' />
              Fale com a gente
            </S.PresentationButton>
            <S.PresentationButton
              size='lg'
              color='white'
              background='brand.background_blue'
            >
              Nossos Serviços
            </S.PresentationButton>
          </Flex>
        </S.ContentContainer>
      </S.Container>
      <BaseboardSection />
    </Flex>
  )
}

export default Presentation
