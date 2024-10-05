import React from 'react'
import * as S from './WhyChooseUs.styled'
import { Image, Text } from '@chakra-ui/react'

const WhyChooseUs: React.FC = () => {
  return (
    <S.BackgroundContainer>
      <S.Container>
        <Image
          src='/images/logo_why_choose_us.jpg'
          alt='logo'
          borderRadius={10}
        />

        <Text fontSize='5xl' color='white' textAlign='center'>
          Porque nos escolher?
        </Text>

        <Image src='/images/checkpoints.png' alt='logo' borderRadius={20} />
      </S.Container>
    </S.BackgroundContainer>
  )
}

export default WhyChooseUs
